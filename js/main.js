/**
 * main.js — Shared interactions:
 *   - Scroll reveal animation
 *   - Mobile hamburger nav
 */

/* ── Scroll Reveal ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // fire once
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

/* ── Mobile Hamburger ── */
const hamburger = document.getElementById('hamburger');
const navbar    = document.getElementById('navbar');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('nav-mobile-open');
    hamburger.textContent = navbar.classList.contains('nav-mobile-open') ? '✕' : '☰';
  });

  // Close when a nav link is clicked
  navbar.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('nav-mobile-open');
      hamburger.textContent = '☰';
    });
  });
}
