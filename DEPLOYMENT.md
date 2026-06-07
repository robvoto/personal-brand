# Deployment

This site is deployed as a static GitHub Pages site.

## Production URL

```text
https://robvoto.com
```

## Hosting model

```text
robvoto.com
  -> Porkbun DNS
  -> GitHub Pages
  -> robvoto/personal-brand repository
```

The site is static. There is no server-side CMS, no database, and no backend login for this portfolio site.

## GitHub Pages workflow

Deployment is controlled by:

```text
.github/workflows/static.yml
```

The workflow runs on pushes to:

```text
main
```

It uploads the repository contents to GitHub Pages using the official GitHub Pages actions.

## Custom domain

The GitHub Pages custom domain should be:

```text
robvoto.com
```

In GitHub:

```text
Repository -> Settings -> Pages -> Custom domain
```

Set:

```text
robvoto.com
```

Enable **Enforce HTTPS** once GitHub has issued the certificate.

## DNS records at Porkbun

Keep the root domain pointed to GitHub Pages using GitHub's apex-domain A records:

```text
A  @  185.199.108.153
A  @  185.199.109.153
A  @  185.199.110.153
A  @  185.199.111.153
```

For `www`:

```text
CNAME  www  robvoto.github.io
```

Do not keep Porkbun parking records such as:

```text
ALIAS  @   uixie.porkbun.com
CNAME  *   uixie.porkbun.com
```

The wildcard parking CNAME must stay removed so future subdomains can be used cleanly:

```text
knowme.robvoto.com
jobhunter.robvoto.com
```

## Future subdomains

Planned structure:

```text
robvoto.com             -> this GitHub Pages portfolio
knowme.robvoto.com      -> KnowMe app, likely AWS later
jobhunter.robvoto.com   -> Job Hunter app, likely AWS later
```

Do not point `knowme` or `jobhunter` to GitHub Pages unless that is deliberately approved.

## Deployment steps

After editing content:

```powershell
git status
git add .
git commit -m "Update personal brand site"
git push origin main
```

Then check:

```text
GitHub -> Actions -> Deploy static content to Pages
```

When the workflow passes, check:

```text
https://robvoto.com
```

## Troubleshooting

### HTTPS unavailable

GitHub may need time to issue the certificate after DNS changes. Wait and retry the **Enforce HTTPS** checkbox later.

### Porkbun page still appears

Check that Porkbun parking records were removed and the GitHub Pages A records exist.

### Video opens Google account chooser

Do not embed Google Drive videos. Keep the video as a CTA link opening in a new tab, or later move the video to YouTube unlisted or a public MP4 host.
