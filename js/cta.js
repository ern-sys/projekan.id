/**
 * cta.js — Render contact / CTA section dari data.js
 */

(function renderCTA() {
  const { email, whatsapp } = SITE_DATA.site;

  document.getElementById('contact').innerHTML = `
    <div class="cta-box">
      <div>
        <h2>Punya Ide Project?<br />Mari Kita Diskusi.</h2>
        <p>Ceritakan kebutuhan Anda — kami siap bantu dari konsultasi teknis hingga delivery produk yang siap jalan.</p>
      </div>
      <div class="cta-actions">
        <a href="mailto:${email}" class="btn-white">📧 Email Kami</a>
        <a href="https://wa.me/${whatsapp}" target="_blank" rel="noopener" class="btn-ghost">💬 WhatsApp</a>
      </div>
    </div>
  `;
})();
