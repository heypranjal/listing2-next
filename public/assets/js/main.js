/* CAASAA PAANDORA — Main JS */
(function () {
  'use strict';

  /* ---- Custom Cursor ---- */
  const cursor = document.querySelector('.cp-cursor');
  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    });
  }

  /* ---- Sticky Header ---- */
  const header = document.querySelector('.cp-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });
  }

  /* ---- Nav Toggle ---- */
  const menuBtn  = document.querySelector('.cp-menu-btn');
  const closeBtn = document.querySelector('.cp-nav-close');
  const overlay  = document.querySelector('.cp-nav-overlay');
  if (menuBtn && overlay) {
    menuBtn.addEventListener('click', () => overlay.classList.add('open'));
    closeBtn?.addEventListener('click', () => overlay.classList.remove('open'));
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') overlay.classList.remove('open');
    });
  }

  /* ---- Scroll Reveal ---- */
  const srEls = document.querySelectorAll('.sr-fade, .sr-left, .sr-right');
  if (srEls.length && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    srEls.forEach((el) => obs.observe(el));
  } else {
    srEls.forEach((el) => el.classList.add('visible'));
  }

  /* ---- Counter Animation ---- */
  function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 2000;
    const start = performance.now();
    const isFloat = target % 1 !== 0;

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = prefix + (isFloat ? value.toFixed(1) : Math.floor(value)) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const counterEls = document.querySelectorAll('.cp-stats__number[data-count]');
  if (counterEls.length && 'IntersectionObserver' in window) {
    const cObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          cObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counterEls.forEach((el) => cObs.observe(el));
  }

  /* ---- Project Carousel ---- */
  function initCarousel(wrap) {
    const slides  = wrap.querySelector('.cp-projects__slides');
    const items   = wrap.querySelectorAll('.cp-projects__slide');
    const dots    = wrap.querySelectorAll('.cp-carousel-dots .dot');
    const prevBtn = wrap.querySelector('.cp-carousel-prev');
    const nextBtn = wrap.querySelector('.cp-carousel-next');
    let current = 0;
    let autoTimer;

    function goTo(idx) {
      current = (idx + items.length) % items.length;
      slides.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    prevBtn?.addEventListener('click', () => { clearInterval(autoTimer); goTo(current - 1); autoPlay(); });
    nextBtn?.addEventListener('click', () => { clearInterval(autoTimer); goTo(current + 1); autoPlay(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { clearInterval(autoTimer); goTo(i); autoPlay(); }));

    function autoPlay() {
      autoTimer = setInterval(() => goTo(current + 1), 5000);
    }
    goTo(0);
    autoPlay();
  }

  document.querySelectorAll('.cp-projects__carousel').forEach(initCarousel);

  /* ---- Testimonial Slider ---- */
  function initTestimonials(wrap) {
    const slides  = wrap.querySelectorAll('.cp-testimonials__slide');
    const prevBtn = wrap.querySelector('.cp-test-prev');
    const nextBtn = wrap.querySelector('.cp-test-next');
    let current = 0;
    let autoTimer;

    function goTo(idx) {
      slides[current].classList.remove('active');
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add('active');
    }

    prevBtn?.addEventListener('click', () => { clearInterval(autoTimer); goTo(current - 1); autoPlay(); });
    nextBtn?.addEventListener('click', () => { clearInterval(autoTimer); goTo(current + 1); autoPlay(); });

    function autoPlay() {
      autoTimer = setInterval(() => goTo(current + 1), 6000);
    }
    goTo(0);
    autoPlay();
  }

  document.querySelectorAll('.cp-testimonials').forEach(initTestimonials);

  /* ---- Listings Tab Filter ---- */
  (function () {
    const tabBar  = document.querySelector('.cp-listings__tabs');
    const cards   = document.querySelectorAll('.cp-listing-card');
    if (!tabBar || !cards.length) return;

    function filterCards(type) {
      cards.forEach((card, i) => {
        const show = type === 'all' || card.dataset.type === type;
        card.hidden = !show;
        if (show) {
          card.style.animationName = 'none';
          card.style.animationDelay = (i * 0.03) + 's';
          requestAnimationFrame(() => {
            card.style.animationName = 'cardAppear';
          });
        }
      });
    }

    tabBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.cp-listings__tab');
      if (!btn) return;
      tabBar.querySelectorAll('.cp-listings__tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      filterCards(btn.dataset.filter);
    });

    filterCards('all');
  })();

  /* ---- Form Validation (basic) ---- */
  document.querySelectorAll('.cp-contact__form, .cp-hero-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = 'Sent!';
        btn.disabled = true;
        setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 3000);
      }
    });
  });

  /* ---- Smooth Scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.querySelector('.cp-nav-overlay')?.classList.remove('open');
      }
    });
  });

})();
