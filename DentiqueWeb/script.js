/* ==========================================================================
   DENTIQUE — SCRIPT
   JavaScript mínimo: menú móvil y navbar sólida al hacer scroll.
   Sin dependencias externas.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Menú móvil (hamburguesa) ---- */
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Navbar sólida al hacer scroll ---- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('is-scrolled', window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

});
