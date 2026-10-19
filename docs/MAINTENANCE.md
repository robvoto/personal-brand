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

## Security incident — retired Job Hunter DNS (19 October 2026)

A responsible-disclosure email reported that `jobhunter.robvoto.com` resolved to `32.236.144.98`, a retired AWS endpoint. Before remediation, Windows `nslookup` reproduced that A record. On 19 October 2026, the specific `jobhunter.robvoto.com` A record was removed in Porkbun DNS management for `robvoto.com`. The Porkbun record list decreased from 12 to 11 and no longer contained the Job Hunter record. A direct query to authoritative server `maceio.ns.porkbun.com` then returned **Non-existent domain** for `jobhunter.robvoto.com`.

This closes the *dangling DNS configuration* identified in the report; it does not establish whether the reporter actually took control, whether visitors were affected, or whether all cached DNS responses have expired. The reporter's CVSS 8.2 rating was not independently validated. No payment was made or promised. Do not recreate this DNS record until it targets a verified active, controlled service. The separately configured `knowme.robvoto.com` A record also pointed to that retired AWS IP. The owner subsequently deleted this record in Porkbun. On 19 October 2026, Windows authoritative DNS queries to `maceio.ns.porkbun.com` returned **Non-existent domain** for both `knowme.robvoto.com` and `jobhunter.robvoto.com`. Both identified dangling A records are therefore removed; cached responses may persist temporarily.

Evidence: Gmail message dated 19 October 2026, subject “Responsible Disclosure of a Subdomain Takeover issue on: jobhunter.robvoto.com” from `omri@galaxysec.co.uk`; observed Porkbun record list and authoritative DNS check on Windows.

## GitHub Pages domain ownership (19 October 2026)

The GitHub account `robvoto` previously showed no verified domains. On 19 October 2026, `robvoto.com` ownership was verified through GitHub Settings → Pages using the DNS TXT challenge `_github-pages-challenge-robvoto.robvoto.com` added in Porkbun. The TXT was independently resolved against authoritative server `maceio.ns.porkbun.com`, and GitHub displayed **Successfully verified robvoto.com** and **robvoto.com Verified**. Keep the verification TXT record in DNS; removing it may compromise continued verification. This is distinct from the separate site custom-domain configuration and HTTPS checks.

## Website Content Security Policy (19 October 2026)

The GitHub Pages site uses a CSP declared with an HTML `<meta http-equiv="Content-Security-Policy">` in `index.html`, introduced by PR #2 (merged commit `a07a58f`). This limits scripts to same-origin files, styles to same-origin files and Google Fonts CSS, font files to Google Fonts, images to same-origin and data URLs, and disables embedded frames and objects. The meta delivery approach does **not** support all CSP directives (notably `frame-ancestors` and reporting-only); it is not equivalent to a server-delivered CSP response header.

Verified after production deployment: the live HTML returned HTTP 200 and contained the CSP, and the Windows Chrome rendered the portfolio content and navigation. This confirms basic operation, not exhaustive browser-console or regression testing. Reassess the CSP when adding external videos, new widgets, network APIs or third-party scripts; test those changes before release. Separately noted: the site's content still links to retired `knowme.robvoto.com` and `jobhunter.robvoto.com`; update those project destinations once replacements are decided rather than restoring dangling DNS.
