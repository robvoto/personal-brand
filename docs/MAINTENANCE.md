# Portfolio Maintenance

This document contains maintainer-facing instructions that do not belong in the public project overview.

## Content ownership

Most portfolio copy and external links are stored in `data.js`.

Common update locations:

- Page metadata: `site`
- Navigation and interface copy: `copy`
- Introduction video: `heroVideo`
- Professional capabilities: `capabilities`
- Tools and methods: `toolkit`
- Delivery examples: `caseStudies`
- Applied AI projects: project data under the relevant work section

Keep user-facing content in `data.js`. Add content directly to `render.js` only when it is part of rendering behaviour rather than portfolio copy.

## Local preview

From the repository root:

```bash
python -m http.server 8001
```

Then open `http://127.0.0.1:8001/`.

An alternative static server may be used when Python is unavailable:

```bash
npx serve .
```

## Test setup

```bash
npm install
npm test
```

Run the Playwright suite after changing navigation, section identifiers, project links, the introduction video, or rendering logic.

## Before merging

1. Confirm the site loads without browser console errors.
2. Check desktop and mobile layouts.
3. Verify prominent external links.
4. Run `npm test`.
5. Confirm no credentials, private documents, local paths, or generated test artefacts are included.

## Deployment

GitHub Pages deployment is defined in `.github/workflows/static.yml`. Changes merged to the configured deployment branch are published through that workflow.
