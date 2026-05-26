/**
 * team.js — Render team section dari data.js
 */

(function renderTeam() {
  const { team } = SITE_DATA;

  const cardsHTML = team.map(m => `
    <div class="team-card reveal">
      <div class="team-avatar" style="background:${m.color}">${m.initials}</div>
      <div class="team-name">${m.name}</div>
      <div class="team-role">${m.role}</div>
      <div class="team-skills">
        ${m.skills.map(s => `<span class="tag">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');

  document.getElementById('team').innerHTML = `
    <div class="team-header">
      <div class="section-tag">// who we are</div>
      <h2 class="section-title">Tim Projekan.ID</h2>
      <p class="section-sub">Developer, designer, dan problem-solver yang passionate bangun produk digital berkualitas.</p>
    </div>
    <div class="team-grid">${cardsHTML}</div>
  `;
})();
