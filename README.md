# Rob Voto — Technical Business Analysis and Applied AI

Source repository for [robvoto.com](https://robvoto.com), a professional portfolio covering technical business analysis, delivery leadership, enterprise transformation, and practical AI products.

## Purpose

The site gives recruiters, hiring managers, and delivery leaders a concise view of:

- technical business analysis and delivery capabilities;
- selected enterprise case studies;
- tools, methods, and industry experience;
- applied AI projects, including KnowMe and Job Hunter;
- contact details and a short introduction video.

## Live site

**[Visit robvoto.com](https://robvoto.com)**

## Project status

Active and maintained. The site is deployed through GitHub Pages.

## Technology

- Semantic HTML
- CSS
- Vanilla JavaScript
- Data-driven content rendering
- Playwright regression tests
- GitHub Actions deployment

The project intentionally has no application backend or database. Portfolio content is maintained in `data.js` and rendered by `render.js`.

## Repository structure

```text
.
├── index.html                  # Page structure
├── data.js                     # Portfolio content and links
├── render.js                   # Data-to-page rendering
├── script.js                   # Interactive behaviour
├── styles.css                  # Site styling
├── tests/                      # Playwright regression tests
├── docs/MAINTENANCE.md         # Maintainer instructions
└── .github/workflows/static.yml
```

## Run locally

```bash
python -m http.server 8001
```

Open `http://127.0.0.1:8001/`.

## Run tests

```bash
npm install
npm test
```

The Playwright suite checks that key portfolio sections render and that important external links remain usable.

## Design decisions

- Content is separated from rendering logic so updates do not require rewriting page components.
- The site uses a lightweight static architecture to minimise maintenance and hosting complexity.
- Case studies focus on delivery context, actions, and outcomes rather than unsupported marketing claims.

## Maintenance

See [`docs/MAINTENANCE.md`](docs/MAINTENANCE.md) for content locations, local commands, and release checks.

## Licence

This project is currently licensed under the GNU General Public License v3.0. See [`LICENSE`](LICENSE).
