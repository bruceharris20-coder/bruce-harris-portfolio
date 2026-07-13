const menuToggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
document.querySelectorAll('.details-btn').forEach(button=>{button.addEventListener('click',()=>{const details=button.nextElementSibling;const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));details.hidden=open;button.innerHTML=open?'View Project Details <span>→</span>':'Close Project Details <span>↑</span>';});});
document.getElementById('year').textContent=new Date().getFullYear();
