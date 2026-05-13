// Scroll reveal — anima gli elementi quando entrano nella viewport
const revealEls = document.querySelectorAll('.reveal, .timeline-item');
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
 
revealEls.forEach(el => observer.observe(el));