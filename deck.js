/* Host for the capstone presentation.
   The slides live in decks/capstone.html (built by tools/build_capstone.py) and are embedded here
   so the presentation and the Agentforce chat share one page. */
(function(){
  var SRC='decks/capstone.html';
  // [label, chapter id in the deck, is a demo step]
  var NAV=[['Introductions','intro'],['Challenge Statement','challenge'],['DEMO','demo1',1],['Roadmap','roadmap'],['Test Plan','test'],['Observability','observability'],['DEMO','demo2',1],['Business Value','value']];
  var frame=null,openNow=false,pending=null;

  var bar=document.querySelector('.topbar');
  if(bar){
    bar.classList.add('demobar');
    bar.innerHTML='<div class="wrap"><button class="play" data-open>&#9654; Presentation</button><nav class="chips" aria-label="Presentation outline">'+
      NAV.map(function(n){return '<button class="chip'+(n[2]?' demo':'')+'" data-chapter="'+n[1]+'">'+n[0]+'</button>';}).join('')+
      '</nav><button class="agentbtn" data-agent>Agent</button></div>';
  }
  var d=document.createElement('div');d.className='deck';d.setAttribute('role','dialog');d.setAttribute('aria-label','Presentation');
  d.innerHTML='<button class="x" data-close aria-label="Close presentation">&#10005;</button>';
  document.body.appendChild(d);

  function send(msg){if(frame&&frame.contentWindow)frame.contentWindow.postMessage(msg,'*');}
  function show(msg){
    if(!frame){
      frame=document.createElement('iframe');frame.title='Presentation';frame.allow='fullscreen';
      pending=msg;frame.src=SRC+(msg&&msg.n?'#'+msg.n:'');d.appendChild(frame);
      frame.addEventListener('load',function(){if(pending&&pending.chapter)send(pending);pending=null;frame.contentWindow.focus();});
    }else if(msg){send(msg);}
    d.classList.add('open');document.body.classList.add('deck-open');openNow=true;
    setTimeout(function(){try{frame.contentWindow.focus();}catch(e){}},50);
  }
  function close(){d.classList.remove('open');document.body.classList.remove('deck-open');openNow=false;mark(null);}
  function agent(){try{embeddedservice_bootstrap.utilAPI.launchChat();}catch(err){console.error('Agentforce chat is not ready yet',err);}}
  function mark(chapter){
    document.querySelectorAll('.chip').forEach(function(c){c.classList.toggle('on',!!chapter&&c.dataset.chapter===chapter);});
  }

  document.addEventListener('click',function(e){
    var t=e.target.closest('[data-open],[data-chapter],[data-close],[data-agent]');if(!t)return;
    if(t.hasAttribute('data-open'))show({sfds:'go',n:1});
    else if(t.hasAttribute('data-chapter'))show({sfds:'go',chapter:t.dataset.chapter});
    else if(t.hasAttribute('data-close'))close();
    else if(t.hasAttribute('data-agent')){if(openNow)close();agent();}
  });
  window.addEventListener('message',function(e){
    var m=e.data;if(!m||!m.sfds)return;
    if(m.sfds==='slide'){mark(m.chapter);if(openNow)history.replaceState(null,'','#slide-'+m.n);}
    else if(m.sfds==='close')close();
    else if(m.sfds==='act'){close();if(m.act==='agent')agent();}
  });
  document.addEventListener('keydown',function(e){
    if(/input|textarea/i.test(e.target.tagName))return;
    if(!openNow&&(e.key==='p'||e.key==='P'))show({sfds:'go',n:1});
    else if(openNow&&e.key==='Escape')close();
  });
  var m=location.hash.match(/^#slide-(\d+)/);if(m)show({sfds:'go',n:+m[1]});
})();
