const panelTop = document.getElementById('panelTop');
const panelBottom = document.getElementById('panelBottom');
const panelLeft = document.getElementById('panelLeft');
const panelRight = document.getElementById('panelRight');
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

  // Riduce i pannelli dal 50% fino a 0%
  const size = 50 - progress * 50;

  panelTop.style.height = size + '%';
  panelBottom.style.height = size + '%';
  panelLeft.style.width = size + '%';
  panelRight.style.width = size + '%';

  // Mostra navbar quando quasi tutto è scrollato
  if (progress > 0.95) {
    navbar.classList.add('visible');
  } else {
    navbar.classList.remove('visible');
  }
});