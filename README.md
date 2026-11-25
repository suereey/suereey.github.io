# Lily — Misty Blue v1.1.1 (Bilingual)

Static GitHub Pages website; no build, API key, database, paid translation, or third-party script required.

## Live deployment target

`https://suereey.github.io/` (`main`, root). `CNAME` is intentionally absent because the custom domain has an unresolved GitHub Pages binding conflict. Do not restore the old `CNAME` until the domain issue is resolved. When moving to `suereey.com`, update canonical, hreflang, Open Graph URLs, sitemap and robots.txt consistently.

## Pages and behavior

- Navigation uses Articles / 文章; `#articles` is the new section anchor. Previous `#writing` links remain valid on both homepages.

- `/`: default English homepage; a visitor who chose Chinese is redirected to `/zh/` when returning to this landing page.
- `/zh/`: Chinese homepage; visiting the explicit Chinese homepage selects Chinese website UI.
- `/guides/cursor-grok-x-subscription/`: Chinese original article; existing URL and article body preserved.
- `/guides/cursor-grok-x-subscription/en/`: complete AI-assisted English translation with a visible translation notice and link back to the original.
- Header `EN / 中文` switches website UI. On article pages it changes only site navigation and footer; article body, title and selected translation stay unchanged. The article-language panel links to the corresponding content URL. A direct article URL always wins over any saved UI preference.
- Both homepages link to the original article by default; the English translation is separately available. Explicit language labels stay visible. Browser `localStorage` stores only `lily.preferredLanguage` (en or zh) on that browser and origin. No analytics or personal information is collected. If storage is blocked, pages still work without cross-visit persistence. If JavaScript is disabled, both homepages and both article versions work via static links; header language links lead to the chosen homepage.
- ChatGPT `utm_source=chatgpt.com` is removed from the address bar; unrelated query parameters and anchors are preserved.

## Preview and deploy

From the repository root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`. This is a root-hosted user site, not a GitHub project site under a subdirectory. Keep `.nojekyll` in the root.

To deploy from the existing local repository, extract the update ZIP into that repository (not a nested folder), inspect `git diff` and `git status`, then commit and push to `main`. Do not delete or replace `.git`. Existing `.git` history remains intact.

## Content publishing standard: Original First, Translation Optional

1. Write the original in Chinese or English. Keep its original publication date and facts.
2. Give it a stable URL and create a separate static translation page when ready. Review the translation against the original before release; do not present it as an independently authored article.
3. Add a clearly labeled original/AI-assisted translation panel and reciprocal `hreflang` tags. Each page must use its own canonical URL and correct HTML language. Home cards should link to the original, with an explicit alternative translation link. If no translation exists, omit that link and any alternate-language metadata.
4. Update both homepage listings and sitemap together; use shared assets and `assets/site.js`. For an English original, reverse the original/translated labels accordingly. No reader-triggered translation API is needed.

The existing starter guide was originally an independently drafted Chinese article, not a transcript of the original social post. Its historical price figures, date (2026-10-17), seven scenarios, references and article-body text are unchanged; English is an AI-assisted translation of that existing draft, not a new fact-check. Review both versions before promoting them widely.

## Branding / privacy

Misty Blue (`#4C79AB`, `#F5F8FC`, `#DFECF8`), Lily avatar, and Guides / Explorations / Lab remain. No social profile, real-name biography, academic affiliation, external analytics, or user-identifying details added. Git commit metadata and public GitHub profile can still reveal identity: keep Lily's repo author identity and credentials configured locally.
