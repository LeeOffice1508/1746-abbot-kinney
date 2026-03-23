// ── Scroll Reveal ──────────────────────────────────────────────────────────
const revealEls = document.querySelectorAll(
  '.overview-text, .overview-image, .highlight-card, .gallery-item, .details-row, .contact-inner, .download-inner, .broker-card'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = i * 60;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

// ── Nav Shadow on Scroll ────────────────────────────────────────────────────
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 40 ? '0 2px 24px rgba(0,0,0,0.4)' : 'none';
}, { passive: true });

// ── Smooth anchor scroll with offset for fixed nav ─────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 68;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── Gallery: stagger reveal items ──────────────────────────────────────────
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const items = entry.target.closest('.gallery-grid')?.querySelectorAll('.gallery-item');
      items?.forEach((item, i) => {
        setTimeout(() => item.classList.add('visible'), i * 80);
      });
      galleryObserver.disconnect();
    }
  });
}, { threshold: 0.1 });

const galleryGrid = document.querySelector('.gallery-grid');
if (galleryGrid) galleryObserver.observe(galleryGrid);
