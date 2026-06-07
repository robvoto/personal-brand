# AGENTS.md — personal-brand

Static portfolio site. Read these before writing any code:

- `README.md` — file map, local run, and editing guide
- `NOTES.md` — implementation decisions and project-specific constraints
- `DEPLOYMENT.md` — DNS and deployment notes
- `tests/` — Playwright regression tests; all must stay green

## Principles

- Keep the site static unless a real backend/CMS is explicitly approved.
- Keep external links safe: `target="_blank"` and `rel="noopener noreferrer"`.
- Do not hardcode and do not use fallbacks unless explicitly approved.
- Deployment is GitHub Pages.
- Public domain is robvoto.com.
- No unused CSS.
- No legacy links.