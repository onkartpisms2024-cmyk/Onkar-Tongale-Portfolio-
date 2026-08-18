const reveal = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));

const menu=document.querySelector('.menu');
const nav=document.querySelector('.desktop-nav');
menu?.addEventListener('click',()=>{
  const open=nav.classList.toggle('mobile-open');
  if(open){
    nav.style.display='flex';
    nav.style.position='absolute';
    nav.style.top='64px';
    nav.style.left='0';
    nav.style.right='0';
    nav.style.padding='25px';
    nav.style.background='#050505';
    nav.style.flexDirection='column';
    nav.style.gap='22px';
    nav.style.borderBottom='1px solid #242424';
  }else{
    nav.removeAttribute('style');
  }
});
document.querySelectorAll('.desktop-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('mobile-open')));
