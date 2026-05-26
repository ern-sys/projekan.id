/**
 * services.js — Render services section dari data.js
 */

(function renderServices() {
  const { services } = SITE_DATA;

  const cardsHTML = services.map(s => `
    <div class="service-card reveal">
      <div class="service-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <div class="service-tags">
        ${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');

  document.getElementById('services').innerHTML = `
    <div class="services-header">
      <div class="section-tag">// what we do</div>
      <h2 class="section-title">Layanan Kami</h2>
      <p class="section-sub">Dari web app hingga infrastruktur — kami handle end-to-end dengan standar code quality yang tinggi.</p>
    </div>
    <div class="services-grid">${cardsHTML}</div>
  `;
})();
