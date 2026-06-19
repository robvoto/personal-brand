(function () {
  const data = window.PERSONAL_BRAND_DATA;
  if (!data) return;

  const escapeHtml = (value) =>
    String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');

  const renderTags = (tags) => tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
  const renderBadges = (badges) =>
    badges.map((badge) => `<span class="credential-badge">${escapeHtml(badge)}</span>`).join('');
  const renderLink = (link, className = 'chip-link action-pill') => {
    const external = link.external ?? /^[a-z][a-z0-9+.-]*:/i.test(link.href);
    const externalAttrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<a class="${className}" href="${escapeHtml(link.href)}"${externalAttrs}>${escapeHtml(link.label)}</a>`;
  };
  const renderLinks = (links, className = 'card-actions') =>
    `<div class="${className}">${links.map((link) => renderLink(link)).join('')}</div>`;

  const renderBrand = (brand) => `<span>${escapeHtml(brand.first)} <span>${escapeHtml(brand.last)}</span></span>`;
  const renderNav = (links) => links.map((link) => `<a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`).join('');
  const renderHeroCopy = (hero) => `
    <div>
      <div class="eyebrow">${escapeHtml(hero.eyebrow)}</div>
      <h1>${escapeHtml(hero.title)}</h1>
      <p class="hero-copy">${escapeHtml(hero.copy)}</p>
      <div class="hero-chip-row">
        <span class="hero-chip">${escapeHtml(hero.chip)}</span>
      </div>
      <div class="hero-actions">
        <a class="button primary" href="${escapeHtml(hero.ctaHref)}" target="_blank" rel="noopener noreferrer">${escapeHtml(hero.ctaLabel)}</a>
      </div>
    </div>
  `;
  const renderSectionHead = (title) => `<h2>${escapeHtml(title)}</h2>`;
  const renderHeroVideoCard = (video) => `
    <div class="hero-video-preview">
      <div class="hero-video-thumb" aria-hidden="true">
        <img src="${escapeHtml(video.thumbSrc)}" alt="${escapeHtml(video.thumbAlt)}" class="hero-video-thumb-img">
        <div class="hero-video-play-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
            <path d="M8 5.5l11 6.5-11 6.5V5.5z" fill="currentColor"/>
          </svg>
        </div>
      </div>
      <h2>${escapeHtml(video.title)}</h2>
      <p class="hero-video-copy">${escapeHtml(video.description)}</p>
      <div class="hero-video-actions">
        <a class="button primary" href="${escapeHtml(video.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(video.ctaLabel)}</a>
      </div>
    </div>
  `;

  const renderSectionIntro = (copy) => `
    <div class="work-sample-intro">
      <p>${escapeHtml(copy)}</p>
    </div>
  `;

  const renderWorkSampleOverview = (overview) => `
    ${renderSectionIntro(overview.subtitle)}
    <div class="card-grid four work-sample-overview-grid">
      ${overview.cards
        .map(
          (card) => `
            <article class="card compact work-sample-card">
              <h3>${escapeHtml(card.title)}</h3>
              <p>${escapeHtml(card.body)}</p>
              <div class="card-actions">
                ${renderLink({ href: card.href, label: `Open ${card.title}` })}
              </div>
            </article>
          `
        )
        .join('')}
    </div>
  `;

  const renderWorkSampleDetail = (sample) => `
    <article class="work-sample-shell">
      <div class="card work-sample-hero">
        <div class="work-sample-kicker">BA work sample</div>
        <h1>${escapeHtml(sample.title)}</h1>
        <p class="work-sample-value">${escapeHtml(sample.recruiterValue)}</p>
      </div>

      <div class="work-sample-stack">
        <article class="card work-sample-section">
          <h2>Context / problem</h2>
          <p>${escapeHtml(sample.context)}</p>
        </article>

        <article class="card work-sample-section">
          <h2>What Rob did</h2>
          <p>${escapeHtml(sample.whatRobDid)}</p>
        </article>

        <article class="card work-sample-section">
          <h2>Diagram area</h2>
          <div class="work-sample-diagram" aria-label="${escapeHtml(sample.diagramLabel)}">
            <div class="work-sample-diagram-label">${escapeHtml(sample.diagramLabel)}</div>
            <div class="work-sample-diagram-grid">
              ${sample.diagramSteps
                .map(
                  (step, index) => `
                    <div class="work-sample-diagram-step">
                      <span class="work-sample-step-index">${String(index + 1).padStart(2, '0')}</span>
                      <h3>${escapeHtml(step.title)}</h3>
                      <p>${escapeHtml(step.body)}</p>
                    </div>
                  `
                )
                .join('')}
            </div>
          </div>
        </article>

        <article class="card work-sample-section">
          <h2>Why it mattered</h2>
          <p>${escapeHtml(sample.whyItMattered)}</p>
        </article>

        <article class="card work-sample-section">
          <h2>Related project links</h2>
          ${renderLinks(sample.relatedLinks, 'card-actions card-actions--wrap')}
        </article>
      </div>
    </article>
  `;

  const renderCapabilities = (cards) =>
    cards
      .map((card) => `<article class="card compact"><h3>${escapeHtml(card.title)}</h3><p>${escapeHtml(card.body)}</p></article>`)
      .join('');

  const renderToolkit = (cards) =>
    cards
      .map(
        (card) =>
          `<article class="card compact"><h3>${escapeHtml(card.title)}</h3><div class="pill-cloud">${renderTags(card.tags)}</div></article>`
      )
      .join('');

  const renderCaseStudies = (cards) =>
    cards
      .map(
        (card, index) => `
          <article class="card compact case-study-card">
            <span class="case-study-company">${escapeHtml(card.company)}</span>
            <h3>${escapeHtml(card.title)}</h3>
            <p class="case-study-summary">${escapeHtml(card.summary)}</p>
            <div class="pill-cloud case-study-tags">${renderTags(card.tags)}</div>
            <div class="case-study-actions">
              <button
                class="chip-link case-file-button"
                type="button"
                data-case-study-index="${index}"
                aria-haspopup="dialog"
                aria-controls="case-drawer"
              >${escapeHtml(data.caseDrawer.triggerLabel)}</button>
            </div>
          </article>
        `
      )
      .join('');

  const renderAppliedAi = (cards) =>
    cards
      .map((card) => {
        if (card.featured || card.featuredAligned) {
          return `
            <article class="card compact tool-feature">
              <div class="applied-head">
                <h3 class="applied-title">
                  <span>${escapeHtml(card.title)}</span>
                  ${
                    card.image
                      ? `<img class="applied-media" src="${escapeHtml(card.image.src)}" alt="${escapeHtml(card.image.alt)}">`
                      : '<span class="applied-media applied-media--spacer" aria-hidden="true"></span>'
                  }
                </h3>
              </div>
              <div class="applied-copy">
                <p>${escapeHtml(card.body)}</p>
                ${renderLinks(card.links, 'card-actions card-actions--wrap')}
              </div>
            </article>
          `;
        }

        return `
          <article class="card compact">
            <h3>${escapeHtml(card.title)}</h3>
            <p>${escapeHtml(card.body)}</p>
            ${card.links ? renderLinks(card.links, 'card-actions card-actions--wrap') : `<div class="credential-badges">${renderBadges(card.badges || [])}</div>`}
          </article>
        `;
      })
      .join('');

  const renderIndustries = (cards) =>
    cards.map((card) => `<article class="card compact industry-card industry-title-only"><h3>${escapeHtml(card.title)}</h3></article>`).join('');

  const renderEducationTop = (cards) =>
    cards
      .map((card) => {
        if (card.badge) {
          return `
            <article class="card compact">
              <h3>${escapeHtml(card.title)}</h3>
              <div class="credential-badges" aria-label="Degree institution">
                <a class="chip-link" href="${escapeHtml(card.badge.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(card.badge.label)}</a>
              </div>
            </article>
          `;
        }

        if (!card.logo) {
          return `
            <article class="card compact">
              <h3>${escapeHtml(card.title)}</h3>
            </article>
          `;
        }

        return `
          <article class="card compact">
            <div class="credential-title credential-title--inline credential-title--capm">
              <h3><span>${escapeHtml(card.title)}</span></h3>
              <img class="credential-logo${card.logo.wide ? ' credential-logo--wide' : ''}" src="${escapeHtml(card.logo.src)}" alt="${escapeHtml(card.logo.alt)}">
            </div>
          </article>
        `;
      })
      .join('');

  const renderEducationBottom = (cards) => cards.map((card) => `<article class="card compact"><h3>${escapeHtml(card.title)}</h3></article>`).join('');

  const renderContact = (contact) => `
    <div class="contact-panel">
      <div class="contact-links">
        <a class="contact-link" href="mailto:${escapeHtml(contact.email)}">
          <strong>${escapeHtml(contact.emailLabel)}</strong>
          <span>${escapeHtml(contact.email)}</span>
        </a>
        <a class="contact-link" href="${escapeHtml(contact.linkedinHref)}" target="_blank" rel="noopener noreferrer">
          <strong>${escapeHtml(contact.linkedinLabel)}</strong>
          <span>${escapeHtml(contact.linkedinDisplay)}</span>
        </a>
      </div>
    </div>
    <div class="contact-stack">
      <div class="contact-panel company-card">
        <img class="contact-brand" src="votoruizit.png" alt="VotoRuizIT">
        <div class="company-copy">
          <span class="company-label">${escapeHtml(contact.companyLabel)}</span>
          <strong>${escapeHtml(contact.companyName)}</strong>
          <span>${escapeHtml(contact.acn)}</span>
        </div>
      </div>
    </div>
  `;

  const renderFooter = (footer) => `
    <div>${escapeHtml(footer.left)}</div>
    <div class="footer-meta">
      <span>${escapeHtml(footer.right)}</span>
      <span class="footer-links">
        ${(footer.links || [])
          .map((link) => `<a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`)
          .join('<span aria-hidden="true">·</span>')}
      </span>
    </div>
  `;

  const renderOverviewPage = (workSamples) => `
    <div class="section-head work-sample-head">
      <h1>${escapeHtml(workSamples.overview.title)}</h1>
      <p class="work-sample-subtitle">${escapeHtml(workSamples.overview.subtitle)}</p>
    </div>
    ${renderWorkSampleOverview(workSamples.overview)}
  `;

  const renderSection = (selector, html) => {
    const target = document.querySelector(selector);
    if (target) target.innerHTML = html;
  };

  const setPageMeta = (title, description) => {
    document.title = title;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) descriptionMeta.setAttribute('content', description);
  };

  const pageType = document.body.dataset.page || 'home';
  const sampleSlug = document.body.dataset.sample;

  setPageMeta(data.site.title, data.site.description);

  if (pageType === 'work-sample-overview') {
    const workSamples = data.workSamples;
    setPageMeta(workSamples.overview.title, workSamples.overview.description);
    renderSection('[data-render="brand"]', renderBrand(data.copy.brand));
    renderSection('[data-render="nav"]', renderNav(workSamples.overviewNavigation));
    renderSection('[data-render="work-sample-overview"]', renderOverviewPage(workSamples));
    renderSection('[data-render="footer"]', renderFooter(data.copy.footer));
    return;
  }

  if (pageType === 'work-sample-detail') {
    const sample = data.workSamples.pages[sampleSlug];
    if (sample) {
      setPageMeta(`${sample.title} | Rob Voto`, sample.recruiterValue);
      renderSection('[data-render="brand"]', renderBrand(data.copy.brand));
      renderSection('[data-render="nav"]', renderNav(data.workSamples.detailNavigation));
      renderSection('[data-render="work-sample-detail"]', renderWorkSampleDetail(sample));
      renderSection('[data-render="footer"]', renderFooter(data.copy.footer));
    }
    return;
  }

  renderSection('[data-render="skip-link"]', escapeHtml(data.copy.skipLink));
  renderSection('[data-render="brand"]', renderBrand(data.copy.brand));
  renderSection('[data-render="nav"]', renderNav(data.copy.navigation));
  renderSection('[data-render="hero-copy"]', renderHeroCopy(data.copy.hero));
  const heroVideoCard = document.querySelector('[data-render="hero-video-label"]');
  if (heroVideoCard) heroVideoCard.setAttribute('aria-label', data.heroVideo.ariaLabel);
  renderSection('[data-render="section-capabilities"]', renderSectionHead(data.copy.sections.capabilities));
  renderSection('[data-render="section-toolkit"]', renderSectionHead(data.copy.sections.toolkit));
  renderSection('[data-render="section-case-studies"]', renderSectionHead(data.copy.sections.caseStudies));
  renderSection('[data-render="section-applied-ai"]', renderSectionHead(data.copy.sections.appliedAi));
  renderSection('[data-render="section-ba-work-samples"]', renderSectionHead(data.copy.sections.baWorkSamples));
  renderSection('[data-render="section-industries"]', renderSectionHead(data.copy.sections.industries));
  renderSection('[data-render="section-education"]', renderSectionHead(data.copy.sections.education));
  renderSection('[data-render="section-contact"]', renderSectionHead(data.copy.sections.contact));
  renderSection('[data-render="capabilities"]', renderCapabilities(data.capabilities));
  renderSection('[data-render="toolkit"]', renderToolkit(data.toolkit));
  renderSection('[data-render="case-studies"]', renderCaseStudies(data.caseStudies));
  renderSection('[data-render="applied-ai"]', renderAppliedAi(data.appliedAi));
  renderSection('[data-render="ba-work-samples"]', renderWorkSampleOverview(data.workSamples.overview));
  renderSection('[data-render="industries"]', renderIndustries(data.industries));
  renderSection('[data-render="education-top"]', renderEducationTop(data.educationTop));
  renderSection('[data-render="education-bottom"]', renderEducationBottom(data.educationBottom));
  renderSection('[data-render="contact"]', renderContact(data.copy.contact));
  renderSection('[data-render="footer"]', renderFooter(data.copy.footer));
  renderSection('[data-render="hero-video"]', renderHeroVideoCard(data.heroVideo));
})();
