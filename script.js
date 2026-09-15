/* =========================================================
   FOURTH CAFÉ — script.js
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Menú hamburguesa ---------- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  function closeNav() {
    nav.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Abrir menú');
  }

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        closeNav();
        burger.focus();
      }
    });
  }

  /* ---------- Header al hacer scroll ---------- */
  var header = document.getElementById('header');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-stuck', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Fade-in de secciones ---------- */
  var revealables = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Video del hero ----------
     Solo se asegura la reproducción automática.
     No se aplica ningún filtro, overlay ni efecto sobre el video. */
  var heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.setAttribute('muted', '');
    heroVideo.playsInline = true;

    var tryPlay = function () {
      var p = heroVideo.play();
      if (p && typeof p.catch === 'function') { p.catch(function () {}); }
    };

    tryPlay();
    heroVideo.addEventListener('loadeddata', tryPlay);
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) tryPlay();
    });
    ['touchstart', 'click'].forEach(function (evt) {
      document.addEventListener(evt, tryPlay, { once: true, passive: true });
    });
  }

  /* ---------- Año del footer ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
