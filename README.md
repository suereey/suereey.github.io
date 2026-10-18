# suereey.com / Lily — Misty Blue release

A static, zero-build website compatible with GitHub Pages.

## Included
- `index.html`: homepage with Lily avatar and three content pillars
- `guides/cursor-grok-x-subscription/index.html`: starter article with seven subscription scenarios
- `assets/style.css`: complete typography/layout and editable color variables at top
- `assets/lily-avatar.webp`: avatar supplied by site owner
- `CNAME`: custom domain `suereey.com`

## Important before going public
- Confirm that the GitHub repository **owner** and commit author details will not reveal an identity you intend to keep separated. A public GitHub repository, commit email or repo profile can expose identifying information. Consider deploying using the pen-name account that will manage the site.
- Site has **no X account handle/profile links**, real names, academic affiliations, or analytics.
- The topic of the first article is the *X Subscription product*, which necessarily appears by name. This does not link Lily to any X social account.
- Article is a NEW independently drafted starter guide based on official 2026-10-17 product docs, **not a transcript of the original seven-scenario post**. Replace / approve the article text once the author supplies the full original.
- Misty Blue palette confirmed: primary `#4C79AB`, page background `#F5F8FC`, secondary blue `#DFECF8`. Color tokens are at the top of `assets/style.css`; logo/favicon and browser theme have been updated. Site remains anonymous and has no social profile links.

## Preview locally

From the website directory:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to existing GitHub Pages
1. Confirm the GitHub repository and its current branch/setup before replacing any files.
2. Upload these files to the repository root (or the configured Pages folder) and commit.
3. In repository Settings > Pages, select `Deploy from a branch`, the desired branch and `/ (root)` if that is the existing setup. Or match any existing Actions workflow.
4. In Pages custom domain use `suereey.com` and enable HTTPS after DNS is set.
5. Add DNS records at the domain registrar only after verifying the present DNS settings and GitHub Pages docs. Do not wipe existing MX/TXT/email records.

No build scripts or packages required.
