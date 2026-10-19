# suite.hieuspace.com

Showcase site for open-source macOS app replacements (SwiftShot, SwishLite, …).
Built with Astro + vanilla CSS. Bilingual EN/VI (`/` and `/vi/`).

## Dev

```sh
npm install
npm run dev      # local dev
npm run build    # builds dist/
```

## Deploy

Hosted on Cloudflare Pages (project `suite`, Direct Upload):

```sh
npx wrangler pages deploy dist --project-name=suite
```

Production: https://suite.hieuspace.com · Preview: https://suite-1lv.pages.dev

## Adding an app

1. Add entry in `src/data/apps.js` (EN + VI copy, icon + hero image in `public/assets/`).
2. Create `src/pages/apps/<id>.astro` and `src/pages/vi/apps/<id>.astro` (copy an existing file, change the id string).
3. Build + deploy.
