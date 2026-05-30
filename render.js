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
          `<a class="chip-link" href="${escapeHtml(link.href)}" target="_blank" rel="noopener">${escapeHtml(link.label)}</a>`
      )
      .join('');

  const renderCapabilities = (cards) =>
    cards
      .map(
        (card) =>
          `<article class="card compact"><h3>${escapeHtml(card.title)}</h3><p>${escapeHtml(card.body)}</p></article>`
      )
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
              >Case file →</button>
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
    cards
      .map(
        (card) =>
          `<article class="card compact industry-card industry-title-only"><h3>${escapeHtml(card.title)}</h3></article>`
      )
      .join('');

  const renderEducationTop = (cards) =>
    cards
      .map((card) => {
        if (card.badge) {
          return `
            <article class="card compact">
              <h3>${escapeHtml(card.title)}</h3>
              <div class="credential-badges" aria-label="Degree institution">
                <a class="chip-link" href="${escapeHtml(card.badge.href)}" target="_blank" rel="noopener">${escapeHtml(card.badge.label)}</a>
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

  const renderEducationBottom = (cards) =>
    cards.map((card) => `<article class="card compact"><h3>${escapeHtml(card.title)}</h3></article>`).join('');

  const renderSection = (selector, html) => {
    const target = document.querySelector(selector);
    if (target) target.innerHTML = html;
  };

  renderSection('[data-render="capabilities"]', renderCapabilities(data.capabilities));
  renderSection('[data-render="toolkit"]', renderToolkit(data.toolkit));
  renderSection('[data-render="case-studies"]', renderCaseStudies(data.caseStudies));
  renderSection('[data-render="applied-ai"]', renderAppliedAi(data.appliedAi));
  renderSection('[data-render="industries"]', renderIndustries(data.industries));
  renderSection('[data-render="education-top"]', renderEducationTop(data.educationTop));
  renderSection('[data-render="education-bottom"]', renderEducationBottom(data.educationBottom));
})();
