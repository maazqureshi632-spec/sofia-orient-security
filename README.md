# Sofia Orient Security Services website

Static website for [sofiaorientsecurity.com](https://sofiaorientsecurity.com), built with [Astro](https://astro.build).

## Local development

Requires Node.js 22 or later.

```bash
npm install
npm run dev        # http://127.0.0.1:4330
npm run build      # production build into dist/
npm run preview    # serve dist/ at http://127.0.0.1:4331
```

## Deploying to Hostinger

This repository holds the **source code only**. Hostinger shared hosting serves plain files and does not run the Astro build, so the site is built locally and the built files are uploaded.

Do **not** connect this repository to Hostinger's Git deployment: it copies the source code into `public_html`, which has no `index.html` and results in 403/404 errors.

1. Build and package the site:

   ```bash
   npm run package:hostinger
   ```

   This runs the production build and creates `sofia-orient-hostinger-upload.zip` in the project folder. The ZIP contains the contents of `dist/` (including the hidden `.htaccess` file) at its root.

2. In hPanel, open **File Manager** for the domain and go to `public_html`.
3. Move any old files out of the way first (for example into a folder named `_old_files`) rather than deleting them.
4. Upload `sofia-orient-hostinger-upload.zip` to `public_html` and extract it **there**, so `index.html` sits directly inside `public_html` (not in a subfolder).
5. Delete the uploaded ZIP from `public_html`.
6. Check the homepage, a few inner pages, `/robots.txt`, `/sitemap.xml`, and a non-existent page (it should show the site's own 404 page).

To update the site later, repeat steps 1, 4 and 5; the new files replace the old ones.

## Notes

- `dist/`, `node_modules/`, `.env*` files, ZIP files and all PDFs are excluded by `.gitignore`. The company profile PDF contains confidential personal documents and must never be committed or uploaded.
- `public/.htaccess` does not force HTTPS. The domain already redirects HTTP to HTTPS at Hostinger's edge.
- The quote form sends requests through WhatsApp; it does not send email.
