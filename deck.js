(function(){
  var S=window.DECK||[], cur=0, step=0;
  // chapters = first slide of each chapter, in order
  var chapters=[];S.forEach(function(s,i){if(!chapters.length||chapters[chapters.length-1].name!==s.chapter)chapters.push({name:s.chapter,start:i});});
  var bar=document.querySelector('.topbar');
  if(bar){
    bar.classList.add('demobar');
    bar.innerHTML='<div class="wrap"><button class="play" data-go="0">&#9654; Presentation</button><nav class="chips" aria-label="Presentation outline">'+
      chapters.filter(function(c){return c.name!=='Intro';}).map(function(c,n){return '<button class="chip" data-go="'+c.start+'"><i>'+(n+1)+'</i>'+c.name+'</button>';}).join('')+
      '</nav><button class="agentbtn" data-agent>Agent</button></div>';
  }
  var d=document.createElement('div');d.className='deck';d.setAttribute('role','dialog');d.setAttribute('aria-label','Presentation');
  d.innerHTML='<div class="frame"><div class="stage"></div><div class="nav"><button data-prev aria-label="Previous">&#8592;</button><button data-next aria-label="Next">&#8594;</button><div class="bar"><div></div></div><span class="ttl"></span><button class="close" data-close aria-label="Close">&#10005;</button></div></div>';
  document.body.appendChild(d);
  var stage=d.querySelector('.stage');
  function render(){
    var s=S[cur];
    if(s.frame){stage.innerHTML='<section class="slide frame"><iframe src="'+s.frame+'" title="'+s.title+'" allow="fullscreen"></iframe></section>';var fr=stage.querySelector('iframe');fr.addEventListener('load',function(){try{fr.contentWindow.focus();}catch(e){}});}else
    stage.innerHTML='<section class="slide '+(s.cls||'')+'">'+s.html+((/cover|section|story/.test(s.cls||''))?'':'<div class="logo-lockup"><img src="assets/brand-brightcurrent.png" alt="Brightcurrent"><img src="assets/logo-salesforce.png" alt="Salesforce"></div>')+'</section>';
    if(s.steps)applyStep();
    d.querySelector('.bar div').style.width=((cur+1)/S.length*100)+'%';
    d.querySelector('.ttl').textContent=(cur+1)+' / '+S.length+'  ·  '+s.title+(s.steps?' ('+(step+1)+'/'+s.steps+')':'');
    var ci=0;chapters.forEach(function(c,i){if(c.start<=cur)ci=i;});
    document.querySelectorAll('.chip').forEach(function(el){el.classList.toggle('on',d.classList.contains('open')&&+el.dataset.go===chapters[ci].start);});
  }
  function open(i,atEnd){cur=Math.max(0,Math.min(S.length-1,i));step=(atEnd&&S[cur].steps)?S[cur].steps-1:0;d.classList.add('open');document.body.classList.add('deck-open');history.replaceState(null,'','#slide-'+(cur+1));render();}
  function close(){d.classList.remove('open');document.body.classList.remove('deck-open');history.replaceState(null,'',location.pathname+location.search);render();}

  function applyStep(){
    var s=S[cur],sl=stage.querySelector('.slide');if(!sl||!s.steps)return;
    sl.dataset.step=step;
    sl.querySelectorAll('[data-step]').forEach(function(b){b.classList.toggle('on',+b.dataset.step===step);b.classList.toggle('done',+b.dataset.step<step);});
    sl.querySelectorAll('.cnt').forEach(function(el){var to=+el.dataset.to,t0=performance.now();(function f(t){var k=Math.min(1,(t-t0)/900);el.textContent=Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f);})(t0);});
    d.querySelector('.ttl').textContent=(cur+1)+' / '+S.length+'  \u00b7  '+s.title+' ('+(step+1)+'/'+s.steps+')';
  }
  function next(){var s=S[cur];if(s.steps&&step<s.steps-1){step++;applyStep();}else open(cur+1);}
  function prev(){var s=S[cur];if(s.steps&&step>0){step--;applyStep();}else open(cur-1,true);}
  function agent(){
    try{embeddedservice_bootstrap.utilAPI.launchChat();}
    catch(err){console.error('Agentforce chat is not ready yet',err);}
  }
  document.addEventListener('click',function(e){
    var t=e.target.closest('[data-go],[data-prev],[data-next],[data-close],[data-agent],[data-act],.slide [data-step]');if(!t)return;
    if(t.hasAttribute('data-go'))open(+t.dataset.go);
    else if(t.hasAttribute('data-prev'))prev();
    else if(t.hasAttribute('data-next'))next();
    else if(t.hasAttribute('data-step')){step=+t.dataset.step;applyStep();}
    else if(t.hasAttribute('data-close'))close();
    else if(t.hasAttribute('data-agent')){if(d.classList.contains('open'))close();agent();}
    else if(t.dataset.act==='site')close();
    else if(t.dataset.act==='agent'){close();agent();}
  });
  document.addEventListener('keydown',function(e){
    if(/input|textarea/i.test(e.target.tagName))return;
    if(!d.classList.contains('open')){if(e.key==='p'||e.key==='P')open(0);return;}
    if(e.key==='ArrowRight'||e.key===' '||e.key==='PageDown'){e.preventDefault();next();}
    else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();prev();}
    else if(e.key==='Escape')close();
    else if(e.key==='Home')open(0);else if(e.key==='End')open(S.length-1);
  });
  var m=location.hash.match(/^#slide-(\d+)/);if(m)open(+m[1]-1);
})();
