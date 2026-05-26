/**
 * portfolio.js — Render portfolio section + filter logic
 */

(function renderPortfolio() {
  const { projects, portfolioFilters } = SITE_DATA;

  const filtersHTML = portfolioFilters.map((f, i) =>
    `<button class="filter-btn${i === 0 ? ' active' : ''}" data-filter="${f}">${f}</button>`
  ).join('');

  const cardsHTML = projects.map(p => `
    <div class="project-card reveal" data-category="${p.category}">
      <div class="project-thumb" style="background:${p.bg}">${p.emoji}</div>
      <div class="project-body">
        <div class="project-meta">
          <span class="project-category">${p.category}</span>
          <span class="project-year">${p.year}</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-stack">
          ${p.stack.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  document.getElementById('portfolio').innerHTML = `
    <div class="portfolio-header">
      <div>
        <div class="section-tag">// what we've built</div>
        <h2 class="section-title">Portfolio</h2>
      </div>
      <div class="filter-tabs">${filtersHTML}</div>
    </div>
    <div class="portfolio-grid">${cardsHTML}</div>
  `;

  // Filter logic
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach(card => {
        const match = filter === 'Semua' || card.dataset.category === filter;
        card.classList.toggle('hidden', !match);
      });
    });
  });
})();
