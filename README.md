# Muni Muni Leather

Minimal React/Vite landing page for Muni Muni Leather.

This README line was updated during the GitHub webhook end-to-end sync test.

## Platform Direction

The repo now includes a starter Payload CMS + Medusa commerce foundation under
`apps/`, while keeping the current GitHub Pages landing page intact.

- `apps/cms`: Payload admin for editable pages, media, and product spotlights.
- `apps/commerce`: Medusa backend/admin for ecommerce.
- `docs/platform.md`: local setup and deployment notes.

For the first private preview behind Authelia, it is acceptable to run the Node
apps from generic Node containers with the repo bind-mounted through Docker
Compose. Before treating the stack as production-like, replace that with
Compose-built local app images so installs, startup commands, and runtime
versions are repeatable.

## Development

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
