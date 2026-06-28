# MuniMuniLeather

- React/Vite app for the Muni Muni Leather landing page.
- Deploy GitHub Pages builds with `npm run deploy`; this builds `dist` and publishes it to the `gh-pages` branch.
- Keep `vite.config.js` `base` set to `/` while the site is served from the custom domain `munimunileather.com`.
- Prefer small, minimal landing-page changes unless the user asks for a fuller storefront.
- Backend/admin scaffolding lives under `apps/`: `apps/cms` is Payload CMS and `apps/commerce` is Medusa.
- Keep the root Vite app deployable independently until hosting moves away from GitHub Pages.
- Use Node 20 LTS or Node 24 LTS for Payload/Medusa work; avoid assuming the host's newest Node is supported.
