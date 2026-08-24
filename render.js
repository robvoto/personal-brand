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
  const renderLinks = (links) =>
    links
      .map(
        (link) =>
          `<a class="chip-link" href="${escapeHtml(link.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`
      )
      .join('');

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
                <div class="credential-badges">${renderLinks(card.links)}</div>
              </div>
            </article>
          `;
        }

        return `
          <article class="card compact">
            <h3>${escapeHtml(card.title)}</h3>
            <p>${escapeHtml(card.body)}</p>
            <div class="credential-badges">
              ${card.links ? renderLinks(card.links) : renderBadges(card.badges || [])}
            </div>
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

  const renderSection = (selector, html) => {
    const target = document.querySelector(selector);
    if (target) target.innerHTML = html;
  };

  document.title = data.site.title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.setAttribute('content', data.site.description);

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
  renderSection('[data-render="section-industries"]', renderSectionHead(data.copy.sections.industries));
  renderSection('[data-render="section-education"]', renderSectionHead(data.copy.sections.education));
  renderSection('[data-render="section-contact"]', renderSectionHead(data.copy.sections.contact));
  renderSection('[data-render="capabilities"]', renderCapabilities(data.capabilities));
  renderSection('[data-render="toolkit"]', renderToolkit(data.toolkit));
  renderSection('[data-render="case-studies"]', renderCaseStudies(data.caseStudies));
  renderSection('[data-render="applied-ai"]', renderAppliedAi(data.appliedAi));
  renderSection('[data-render="industries"]', renderIndustries(data.industries));
  renderSection('[data-render="education-top"]', renderEducationTop(data.educationTop));
  renderSection('[data-render="education-bottom"]', renderEducationBottom(data.educationBottom));
  renderSection('[data-render="contact"]', renderContact(data.copy.contact));
  renderSection('[data-render="footer"]', renderFooter(data.copy.footer));
  renderSection('[data-render="hero-video"]', renderHeroVideoCard(data.heroVideo));
})();
