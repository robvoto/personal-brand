# Personal Brand Site

Static personal portfolio site for Rob Voto.

Public site:

- `https://robvoto.com`
- GitHub Pages source repo: `robvoto/personal-brand`

## What this project is

This is a static HTML/CSS/JavaScript site. It does not have a backend, database, or server-side admin area.

Main files:

- `index.html` - page structure
- `data.js` - editable portfolio content, links, project cards, video link, credentials, and case-study content
- `render.js` - renders content from `data.js` into the page
- `script.js` - page interaction behaviour
- `styles.css` - visual styling
- `.github/workflows/static.yml` - GitHub Pages deployment workflow
- `tests/` - Playwright regression tests

## Run locally

From this folder:

```powershell
cd E:\Programming\personal-brand
python -m http.server 8001
```

Then open:

```text
http://127.0.0.1:8001/
```

Alternative if Python is not available:

```powershell
npx serve .
```

## Install test dependencies

```powershell
cd E:\Programming\personal-brand
npm install
```

## Run tests

```powershell
npm test
```

The Playwright tests verify that key sections render and that the 2-minute intro shows a preview card while still linking to the Google Drive share URL.

## Edit content

Most content should be changed in `data.js`. Do not hardcode content in `render.js` unless it is layout/rendering logic.

Common edits:

- Intro video URL: `data.heroVideo.href`
- KnowMe link: project card/link data in `data.js`
- Job Hunter demo link: project card/link data in `data.js`

See `NOTES.md` for implementation decisions and constraints.
