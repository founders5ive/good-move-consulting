# Good Move Consulting

Production website for Good Move Consulting. It is a static Next-compatible site built with vinext, designed for GitHub-connected deployment on Cloudflare Pages.

## Edit the site

- Main page copy and layouts live in `app/`.
- Shared navigation and footer live in `app/components/SiteChrome.tsx`.
- Field Notes live in `content/field-notes/` as Markdown files.
- Global visual styles live in `app/globals.css`.

To add a Field Note, copy the existing Markdown file, change the frontmatter and body, and give it a new URL-safe filename. The Field Notes index and individual page are generated automatically.

## Run locally

Requires Node.js 22.13 or later.

```bash
npm install
npm run dev
```

Before publishing a change:

```bash
npm test
```

## Deploy with GitHub and Cloudflare Pages

1. Create a GitHub repository and push this folder to the `main` branch.
2. In Cloudflare, open **Workers & Pages** → **Create application** → **Pages** → **Import an existing Git repository**.
3. Select the GitHub repository.
4. Set **Production branch** to `main`.
5. Set **Build command** to `npm run build`.
6. Set **Build output directory** to `dist/client`.
7. Save and deploy. Cloudflare will rebuild the site after every push to `main`.

## Connect goodmoveconsulting.com

After the first Pages deployment, open the project in Cloudflare and choose **Custom domains** → **Set up a custom domain**. Add `goodmoveconsulting.com`, then add `www.goodmoveconsulting.com` and redirect it to the primary domain if desired. If the domain’s DNS is already managed by Cloudflare, Cloudflare can create the required records automatically. Otherwise, follow the DNS records shown on that screen at the current registrar.
