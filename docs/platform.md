# Payload + Medusa Platform

This repo still builds the public GitHub Pages landing page from the root Vite app.
The editable backend foundation lives under `apps/` and can be deployed later behind
Authelia at `munimuni.dissonant.info`.

## Apps

- `apps/cms`: Payload CMS on Next.js. It owns editable pages, media, and product
  spotlights.
- `apps/commerce`: Medusa backend and admin. It owns products, checkout, carts,
  customers, orders, shipping, inventory, discounts, and payments.
- root app: current static Vite landing page for `munimunileather.com`.

## Local Start

Use Node 20 LTS or Node 24 LTS for the backend apps. The current host Node may be
newer than the versions supported by Payload and Medusa.

```sh
docker compose up -d postgres
cp apps/cms/.env.example apps/cms/.env
cp apps/commerce/.env.example apps/commerce/.env
npm --prefix apps/cms install
npm --prefix apps/commerce install
npm run dev:cms
npm run dev:commerce
```

Default local URLs:

- Vite site: `http://localhost:5173`
- Payload admin: `http://localhost:3000/admin`
- Medusa admin: `http://localhost:9000/app`
- Medusa Store API: `http://localhost:9000/store`

## First Content Model

Payload starts with:

- `pages`: editable landing/subpage content.
- `media`: managed image uploads with card and hero sizes.
- `product-spotlights`: editorial content that references a Medusa product ID.
- `users`: admin users.

Medusa starts as the stock commerce backend. Create the first admin user and products
through `http://localhost:9000/app`.

## Deployment Shape

For the first private deployment, bind the apps to localhost and expose only through
the existing Traefik/Authelia route:

- `/admin` or `cms.munimuni.dissonant.info` -> Payload.
- `/commerce-admin` or `commerce.munimuni.dissonant.info/app` -> Medusa Admin.
- `/commerce-api` or `commerce.munimuni.dissonant.info` -> Medusa backend.

Later, when `munimunileather.com` moves away from GitHub Pages, the public frontend
can become a Next.js app that reads Payload content and Medusa products directly.
