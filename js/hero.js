/**
 * hero.js — Render hero section dari data.js
 */

(function renderHero() {
  const { stats } = SITE_DATA;

  const statsHTML = stats.map(s => `
    <div class="stat-card">
      <div class="stat-num">${s.num.replace(/(\+|%|th)/, '<span>$1</span>')}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');

  document.getElementById('hero-section').innerHTML = `
    <div class="hero-inner">

      <div class="hero-content">
        <div class="hero-badge">
          <span class="hero-badge-dot"></span>
          Open for Projects — ${new Date().getFullYear()}
        </div>
        <h1>Kami Bangun<br /><span class="accent">Software</span> yang<br />Benar-Benar Jalan.</h1>
        <p class="hero-sub">
          Projekan.ID adalah tim developer &amp; tech enthusiast yang mengerjakan proyek
          software dari ideasi hingga deployment — clean, scalable, dan tepat waktu.
        </p>
        <div class="hero-actions">
          <a href="#portfolio" class="btn-primary">Lihat Portfolio ↓</a>
          <a href="#contact"   class="btn-secondary">Hubungi Kami</a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="code-card">
          <div class="code-bar">
            <span class="dot-r"></span>
            <span class="dot-y"></span>
            <span class="dot-g"></span>
          </div>
          <div><span class="c-comment">// projekan.id — delivering value</span></div>
          <div>&nbsp;</div>
          <div><span class="c-key">const</span> <span class="c-white">team</span> = {</div>
          <div>&nbsp;&nbsp;<span class="c-fn">name</span>: <span class="c-str">"Projekan.ID"</span>,</div>
          <div>&nbsp;&nbsp;<span class="c-fn">stack</span>: [<span class="c-str">"React"</span>, <span class="c-str">"Node"</span>, <span class="c-str">"Go"</span>],</div>
          <div>&nbsp;&nbsp;<span class="c-fn">projects</span>: <span class="c-num">20+</span>,</div>
          <div>&nbsp;&nbsp;<span class="c-fn">delivery</span>: <span class="c-str">"on-time ✓"</span></div>
          <div>}</div>
          <div>&nbsp;</div>
          <div><span class="c-key">export default</span> <span class="c-white">team</span></div>
        </div>
        <div class="stat-row">${statsHTML}</div>
      </div>

    </div>
  `;
})();
