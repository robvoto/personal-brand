const KNOWME_URL = 'https://knowme-reeo.onrender.com/';

// Lazy-load the iframe only when the section scrolls into view.
// Render.com free tier spins down — lazy loading avoids a cold-start penalty on page load.
const frame = document.getElementById('knowme-frame');
let loaded = false;

new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !loaded) {
    loaded = true;
    frame.src = KNOWME_URL;
  }
}, { threshold: 0.1 }).observe(document.getElementById('knowme'));

// Smooth scroll for all in-page anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.getElementById(a.getAttribute('href').slice(1));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
