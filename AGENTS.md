# AGENTS.md — personal-brand

Static portfolio site. Read these before writing any code:

- `README.md` — file map, local run, and editing guide
- `NOTES.md` — implementation decisions and project-specific constraints
- `DEPLOYMENT.md` — DNS and deployment notes
- `tests/` — Playwright regression tests; all must stay green
- `.skills/git-lifecycle/SKILL.md` — mandatory for branch/worktree, commit, push, PR, merge, and `main` integration

## Principles

- Keep the site static unless a real backend/CMS is explicitly approved.
- Keep external links safe: `target="_blank"` and `rel="noopener noreferrer"`.
- Do not hardcode and do not use fallbacks unless explicitly approved.
- Deployment is GitHub Pages.
- Public domain is robvoto.com.
- No unused code.
- No legacy code or links.

## Repository text format

- All tracked text files use LF line endings. `.gitattributes` and `.editorconfig` are authoritative; do not introduce or preserve CRLF.
- Before finishing edits, run `git diff --check`. If a touched tracked text file is CRLF or mixed, normalize that touched file to LF without rewriting unrelated dirty work.
