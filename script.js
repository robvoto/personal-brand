// Personal brand site interactions
// Keep this lightweight. The page is mostly static; JS is only for small UX improvements.

(function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav a[href^="#"]'));

  if ('IntersectionObserver' in window && sections.length && navLinks.length) {
    const linkById = new Map(
      navLinks.map((link) => [link.getAttribute('href').replace('#', ''), link])
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        navLinks.forEach((link) => link.removeAttribute('aria-current'));
        const activeLink = linkById.get(visible.target.id);
        if (activeLink) activeLink.setAttribute('aria-current', 'page');
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
  }
})();
