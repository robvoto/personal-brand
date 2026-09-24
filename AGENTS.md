# AGENTS.md — personal-brand

Static portfolio site. Read these before writing any code:

- `README.md` — file map, local run, and editing guide
- `NOTES.md` — implementation decisions and project-specific constraints
- `DEPLOYMENT.md` — DNS and deployment notes
- `tests/` — Playwright regression tests; all must stay green
- `.skills/git-lifecycle/SKILL.md` — mandatory for branch/worktree, commit, push, PR, merge, and `main` integration

## Principles

- Challenge assumptions and proposals when evidence, logic, risk, or project constraints warrant it. Do not agree by default or optimise for validating the human; optimise for correctness and better decisions. Do not be contrarian when the evidence supports agreement.
- Keep changes small and bounded.
- Before any semantic/product/UX/business-rule/default/workflow/data-interpretation/classification/heuristic/fallback/persistent-data behaviour change: investigate, explain the current finding and exact proposed effect, then wait for Rob's explicit approval. Treat uncertain changes as semantic; mechanical no-behaviour changes may proceed.
- Never claim a preference, rule, memory, or instruction is persisted unless the authoritative persistent source was actually updated and verified.
- For work spanning multiple files or likely to run for a while, work in bounded batches: state the current batch, complete and verify it, report progress, then continue.
- If a patch, exact-text replacement, or expected match fails, reread the current source and diagnose the mismatch before retrying. Do not retry stale input.
- Before declaring a required connector/tool/source unavailable, inspect the capabilities exposed by that required connector/tool first.
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
