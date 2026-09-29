const toggle=document.getElementById('menuToggle');const links=document.getElementById('navlinks');toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));const tagDemo=document.getElementById('tagDemo');if(tagDemo){document.querySelectorAll('[data-demo-open]').forEach(button=>button.addEventListener('click',()=>tagDemo.showModal()));tagDemo.querySelectorAll('[data-demo-close]').forEach(button=>button.addEventListener('click',()=>tagDemo.close()));tagDemo.addEventListener('click',event=>{if(event.target===tagDemo)tagDemo.close()})}
const contactForm=document.querySelector('.contact-form');
if(contactForm){contactForm.addEventListener('submit',async event=>{
  event.preventDefault();
  const button=contactForm.querySelector('button[type=submit]');
  const original=button.innerHTML;
  button.disabled=true;button.textContent='Invio in corso…';
  try{
    const response=await fetch(contactForm.action,{method:'POST',body:new FormData(contactForm),headers:{Accept:'application/json'}});
    if(!response.ok)throw new Error('invio non riuscito');
    const box=contactForm.closest('.final-box');
    contactForm.outerHTML='<div class="form-status ok"><strong>Messaggio inviato.</strong> Grazie: ti risponderemo al più presto all\'indirizzo che hai indicato.</div>';
    const note=box&&box.querySelector('.form-note');if(note)note.remove();
  }catch(error){
    button.disabled=false;button.innerHTML=original;
    let status=contactForm.parentElement.querySelector('.form-status.err');
    if(!status){status=document.createElement('div');status.className='form-status err';contactForm.insertAdjacentElement('afterend',status)}
    status.innerHTML='<strong>Invio non riuscito.</strong> Riprova tra qualche istante oppure scrivi direttamente a <a href="mailto:info@snapost.it">info@snapost.it</a>.';
  }
})}
