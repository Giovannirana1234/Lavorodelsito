const panels = {
  top: document.getElementById('panelTop'),
  bottom: document.getElementById('panelBottom'),
  left: document.getElementById('panelLeft'),
  right: document.getElementById('panelRight'),
};

const navbar = document.getElementById('navbar');

let ticking = false;

function animatePanels() {
  const scrollY = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  // Evita divisioni strane
  const progress = Math.min(scrollY / maxScroll, 1);

  // Movimento più smooth
  const eased = 1 - Math.pow(1 - progress, 3);

  // Da 50% → 0%
  const size = Math.max(50 - eased * 50, 0);

  // Applica trasformazioni
  panels.top.style.height = `${size}%`;
  panels.bottom.style.height = `${size}%`;
  panels.left.style.width = `${size}%`;
  panels.right.style.width = `${size}%`;

  // Navbar con fade elegante
  navbar.classList.toggle('visible', progress > 0.92);

  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      animatePanels();
    });

    ticking = true;
  }
});

// Esegui subito al caricamento
animatePanels();