# formfusion-docs

The documentation site and landing page for [FormFusion](https://formfusion-eta.vercel.app) — a React form library with built-in validation, input masking and error handling.

Built with [Next.js](https://nextjs.org) (pages router), TypeScript and SCSS modules.

## The site

-   **`/`** — landing page for the library: feature overview, a live interactive form demo next to the equivalent source code, and links into the docs.
-   **`/docs`** — the documentation. Reference pages for the form components, hooks and validation rules (`/docs/api/*`), and guides for integrating with Material UI, Ant Design, Chakra UI and Reactstrap (`/docs/integrations/*`).
-   **`/playground`** — a full working example of the library, embedded from StackBlitz. It runs as a cross-origin isolated page (COOP/COEP headers on `/playground`, `corp=1` on the embed) because WebContainers require `SharedArrayBuffer`.
-   **`/api/subscribe`** — a serverless endpoint that signs visitors up to the newsletter.

The API and integration pages are statically generated from the JSON files in `src/data`, so component props, hook signatures and integration details live in one place. The examples shown on the page are powered by `formfusion` itself, and the UI is built on [corelabui](https://github.com/corelabui) components.

## Structure

| Path             | Contents                                                              |
| ---------------- | --------------------------------------------------------------------- |
| `src/pages`      | Routes; each page owns its title, description and canonical URL       |
| `src/components` | Layout (`MainLayout`, `Section`, …), docs and landing components      |
| `src/constants`  | Routes, feature/example content, shared page metadata (`metaData.ts`) |
| `src/data`       | Documentation content as JSON                                         |
| `src/core`       | Theme, global styles and generated stylesheets                        |
| `public`         | Favicons, assets, `robots.txt` and `sitemap.xml`                      |

Absolute URLs (canonical, Open Graph, sitemap, breadcrumbs) are driven by a single `SITE_URL` constant in `src/constants/metaData.ts`, mirrored in `public/sitemap.xml` and `public/robots.txt` — those three are the only places to update when the deployment domain changes.

The build uses Next's `output: 'standalone'` mode, and `next.config.js` sets the site-wide security headers (CSP, frame options, referrer policy) alongside the image allowlist and redirects.
