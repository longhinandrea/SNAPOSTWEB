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

// Su telefono/tablet il file .exe non si puo' installare: invece di far
// scaricare un file inutile, spiego e porto l'utente sull'app giusta.
if(/Android|iPhone|iPad|iPod|Mobi/i.test(navigator.userAgent)){
  // 1) pulsanti che puntano al .exe: sostituiti da una nota inline
  document.querySelectorAll('a[href$=".exe"]').forEach(function(a){
    var note=document.createElement('p');
    note.className='mobile-note';
    note.innerHTML='<strong>Snapost per Windows si scarica da un PC.</strong> Apri www.snapost.it dal computer, oppure installa l\'app Android da Google Play quando sara\' disponibile.';
    a.replaceWith(note);
  });
  // 2) pulsante nella barra di navigazione: diventa "App Android"
  //    (nascosto se si e' gia' nella pagina Android)
  document.querySelectorAll('.nav-cta').forEach(function(a){
    if(/android\.html/.test(location.pathname)){
      a.style.display='none';
    }else{
      a.textContent='L\'app Android';
      a.setAttribute('href','android.html');
    }
  });
}
