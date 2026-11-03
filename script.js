document.querySelector('.burger').addEventListener('click',()=>document.querySelector('nav.main').classList.toggle('open'));
document.querySelectorAll('.carousel').forEach(c=>{
  const t=c.querySelector('.track');
  c.querySelectorAll('[data-dir]').forEach(b=>b.addEventListener('click',()=>{
    t.scrollBy({left:b.dataset.dir*(t.firstElementChild.offsetWidth+20),behavior:'smooth'});
  }));
});
