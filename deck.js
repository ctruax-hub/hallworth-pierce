/* Host for the capstone presentation.
   The slides live in decks/capstone.html (built by tools/build_capstone.py) and are embedded here
   so the presentation and the Agentforce chat share one page. decks/manifest.js lists every slide. */
(function(){
  var SRC='decks/capstone.html';
  var SLIDES=window.CAPSTONE_SLIDES||[];
  // [label, deck chapters it covers, is a demo step]
  var NAV=[['Introductions',['intro']],['Challenge Statement',['challenge']],['DEMO',['demo1'],1],
           ['Architecture',['data-arch','agent-arch']],['Roadmap',['roadmap']],['Test Plan',['test']],
           ['Deployment Plan',['deploy']],['Observability',['observability']],['DEMO',['demo2'],1],
           ['Business Value',['value']],['Thank You',['thanks']],['Appendix',['appendix']]];
  var GROUP={'data-arch':'Data architecture','agent-arch':'Agent architecture'};
  var frame=null,openNow=false,pending=null,curN=0,curCh=null;

  function slidesFor(chs){return SLIDES.filter(function(s){return chs.indexOf(s.chapter)>=0;});}

  var bar=document.querySelector('.topbar');
  if(bar){
    bar.classList.add('demobar');
    bar.innerHTML='<div class="wrap"><button class="play" data-open title="Start the presentation">&#9654;<span class="pl"> Presentation</span></button><nav class="chips" aria-label="Presentation outline">'+
      NAV.map(function(n,i){var multi=slidesFor(n[1]).length>1;
        return '<button class="chip'+(n[2]?' demo':'')+(multi?' has-menu':'')+'" data-nav="'+i+'" aria-haspopup="'+(multi?'true':'false')+'">'+n[0]+(multi?'<i class="caret" aria-hidden="true"></i>':'')+'</button>';}).join('')+
      '</nav><button class="agentbtn" data-agent>Agent</button></div>';
  }
  // one floating menu, outside the scrolling chip row so it is never clipped
  var menu=document.createElement('div');menu.className='navmenu';menu.setAttribute('role','menu');document.body.appendChild(menu);
  var menuFor=null,hideT=null;
  function openMenu(chip){
    var nav=NAV[+chip.dataset.nav],list=slidesFor(nav[1]);
    if(list.length<2){closeMenu();return;}
    clearTimeout(hideT);
    var html='',grp=null;
    list.forEach(function(s){
      if(nav[1].length>1&&s.chapter!==grp){grp=s.chapter;html+='<div class="nm-grp">'+(GROUP[grp]||grp)+'</div>';}
      html+='<button type="button" role="menuitem" class="nm-item'+(openNow&&s.n===curN?' on':'')+'" data-n="'+s.n+'"><span class="nm-n">'+s.n+'</span>'+s.title+'</button>';
    });
    menu.innerHTML=html;
    var r=chip.getBoundingClientRect();
    menu.style.left=Math.max(8,Math.min(r.left,window.innerWidth-menu.offsetWidth-8))+'px';
    menu.style.top=(r.bottom+6)+'px';
    menu.classList.add('open');menuFor=chip;
    menu.style.left=Math.max(8,Math.min(r.left,window.innerWidth-menu.offsetWidth-8))+'px';
  }
  function closeMenu(){menu.classList.remove('open');menuFor=null;}
  function laterClose(){clearTimeout(hideT);hideT=setTimeout(closeMenu,180);}
  document.addEventListener('mouseover',function(e){
    var c=e.target.closest&&e.target.closest('.chip.has-menu');
    if(c){if(menuFor!==c)openMenu(c);else clearTimeout(hideT);return;}
    if(e.target.closest&&e.target.closest('.navmenu')){clearTimeout(hideT);return;}
    if(menuFor)laterClose();
  });
  document.addEventListener('focusin',function(e){var c=e.target.closest&&e.target.closest('.chip.has-menu');if(c)openMenu(c);});
  bar&&bar.querySelector('.chips').addEventListener('scroll',closeMenu);
  window.addEventListener('resize',closeMenu);

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
    curCh=chapter;
    document.querySelectorAll('.chip').forEach(function(c){c.classList.toggle('on',!!chapter&&NAV[+c.dataset.nav][1].indexOf(chapter)>=0);});
    [].forEach.call(menu.querySelectorAll('.nm-item'),function(b){b.classList.toggle('on',openNow&&+b.dataset.n===curN);});
  }

  document.addEventListener('click',function(e){
    var t=e.target.closest('[data-open],[data-nav],[data-close],[data-agent],.nm-item');if(!t)return;
    if(t.classList.contains('nm-item')){closeMenu();show({sfds:'go',n:+t.dataset.n});}
    else if(t.hasAttribute('data-open'))show({sfds:'go',n:1});
    else if(t.hasAttribute('data-nav'))show({sfds:'go',chapter:NAV[+t.dataset.nav][1][0]});
    else if(t.hasAttribute('data-close'))close();
    else if(t.hasAttribute('data-agent')){if(openNow)close();agent();}
  });
  window.addEventListener('message',function(e){
    var m=e.data;if(!m||!m.sfds)return;
    if(m.sfds==='slide'){curN=m.n;mark(m.chapter);if(openNow)history.replaceState(null,'','#slide-'+m.n);}
    else if(m.sfds==='close')close();
    else if(m.sfds==='act'){close();if(m.act==='agent')agent();}
  });
  document.addEventListener('keydown',function(e){
    if(/input|textarea/i.test(e.target.tagName))return;
    if(e.key==='Escape'&&menuFor){closeMenu();return;}
    if(!openNow&&(e.key==='p'||e.key==='P'))show({sfds:'go',n:1});
    else if(openNow&&e.key==='Escape')close();
  });
  var m=location.hash.match(/^#slide-(\d+)/);if(m)show({sfds:'go',n:+m[1]});
})();
