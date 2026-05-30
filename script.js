// Personal brand site interactions.
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

  const caseStudies = window.PERSONAL_BRAND_DATA?.caseStudies || [];
  if (!caseStudies.length) return;

  const createCaseDrawer = () => {
    const drawer = document.createElement('div');
    drawer.className = 'case-drawer';
    drawer.id = 'case-drawer';
    drawer.hidden = true;
    drawer.setAttribute('aria-hidden', 'true');
    drawer.innerHTML = `
      <button class="case-drawer-backdrop" type="button" data-case-close aria-label="Close case file"></button>
      <aside class="case-drawer-panel" role="dialog" aria-modal="true" aria-labelledby="case-drawer-heading">
        <div class="case-drawer-top">
          <div>
            <div class="case-drawer-kicker">Case file</div>
            <h3 id="case-drawer-heading">Case details</h3>
          </div>
          <button class="case-drawer-close" type="button" data-case-close aria-label="Close case file">×</button>
        </div>
        <div class="case-drawer-meta">
          <div class="case-drawer-field">
            <span>Company</span>
            <strong data-case-company></strong>
          </div>
          <div class="case-drawer-field">
            <span>Title</span>
            <strong data-case-title></strong>
          </div>
        </div>
        <div class="case-drawer-body">
          <div class="case-drawer-field">
            <span>Situation</span>
            <p data-case-situation>STAR content to be added.</p>
          </div>
          <div class="case-drawer-field">
            <span>Task</span>
            <p data-case-task>STAR content to be added.</p>
          </div>
          <div class="case-drawer-field">
            <span>Action</span>
            <p data-case-action>STAR content to be added.</p>
          </div>
          <div class="case-drawer-field">
            <span>Result</span>
            <p data-case-result>STAR content to be added.</p>
          </div>
        </div>
      </aside>
    `;
    document.body.appendChild(drawer);
    return drawer;
  };

  const caseDrawer = createCaseDrawer();
  const drawerPanel = caseDrawer.querySelector('.case-drawer-panel');
  const caseFields = {
    company: caseDrawer.querySelector('[data-case-company]'),
    title: caseDrawer.querySelector('[data-case-title]'),
    situation: caseDrawer.querySelector('[data-case-situation]'),
    task: caseDrawer.querySelector('[data-case-task]'),
    action: caseDrawer.querySelector('[data-case-action]'),
    result: caseDrawer.querySelector('[data-case-result]'),
  };

  const openCaseDrawer = (index) => {
    const caseStudy = caseStudies[index];
    if (!caseStudy) return;

    caseFields.company.textContent = caseStudy.company;
    caseFields.title.textContent = caseStudy.title;
    caseFields.situation.textContent = caseStudy.caseFile?.situation || 'STAR content to be added.';
    caseFields.task.textContent = caseStudy.caseFile?.task || 'STAR content to be added.';
    caseFields.action.textContent = caseStudy.caseFile?.action || 'STAR content to be added.';
    caseFields.result.textContent = caseStudy.caseFile?.result || 'STAR content to be added.';

    caseDrawer.hidden = false;
    caseDrawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('case-drawer-open');
    requestAnimationFrame(() => caseDrawer.classList.add('is-open'));

    const closeButton = caseDrawer.querySelector('.case-drawer-close');
    if (closeButton) closeButton.focus({ preventScroll: true });
  };

  const closeCaseDrawer = () => {
    if (caseDrawer.hidden) return;

    caseDrawer.classList.remove('is-open');
    caseDrawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('case-drawer-open');

    const finishClose = () => {
      if (!caseDrawer.classList.contains('is-open')) {
        caseDrawer.hidden = true;
      }
    };

    drawerPanel.addEventListener('transitionend', finishClose, { once: true });
    window.setTimeout(finishClose, 280);
  };

  document.addEventListener('click', (event) => {
    const openTrigger = event.target.closest('[data-case-study-index]');
    if (openTrigger) {
      const index = Number(openTrigger.getAttribute('data-case-study-index'));
      if (!Number.isNaN(index)) openCaseDrawer(index);
      return;
    }

    const closeTrigger = event.target.closest('[data-case-close]');
    if (closeTrigger) {
      closeCaseDrawer();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !caseDrawer.hidden) {
      closeCaseDrawer();
    }
  });
})();
