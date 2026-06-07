# Implementation notes — personal-brand

Decisions and constraints for this project.

## Hero video

The 2-minute introduction renders as a preview card with a play overlay and an external Google Drive share link. No embedded player is rendered in the hero video section.

Implementation: `data.heroVideo.href` drives the preview card CTA. CSS for the hero video is centralized in the shared preview-card styles.

## Site constraints

- Static only. No backend, no server-side admin area, no client-side fake auth.
- Do not add heuristics data or random-word filter data without asking first.
- Do not touch KnowMe or Job Hunter from this repo.
- No unused CSS, duplicate markup, or legacy compatibility code.
