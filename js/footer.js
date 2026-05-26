/**
 * footer.js — Render footer dari data.js
 */

(function renderFooter() {
  const { name, year } = SITE_DATA.site;

  document.getElementById('footer').innerHTML = `
    <a href="#" class="footer-logo">
      <span class="nav-logo-dot"></span>
      ${name.replace('.', '<span class="accent">.')}
    </a>
    <span>© ${year} ${name} — All rights reserved</span>
    <nav class="footer-links">
      <a href="#services">Services</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#team">Team</a>
      <a href="#contact">Kontak</a>
    </nav>
  `;
})();
