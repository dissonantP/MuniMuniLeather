# Payload + Medusa Resume Notes

Date: 2026-06-28

## Goal

Add a basic Payload CMS + Medusa commerce foundation while keeping the current
GitHub Pages/Vite landing page deployable.

## Current State

- The repo has committed/scaffolded app folders:
  - `apps/cms`: Payload CMS on Next.js.
  - `apps/commerce`: Medusa backend/admin.
- Root scripts exist for:
  - `npm run dev:cms`
  - `npm run dev:commerce`
  - `npm run build:cms`
  - `npm run build:commerce`
  - `npm run stack:db`
- `docker-compose.yml` defines a localhost-bound Postgres service.
- `docs/platform.md` documents the intended app split and future
  Authelia/Traefik deployment shape.

## Node 25 Test Results

Host Node during testing:

```sh
node --version
# v25.8.1
```

Payload dependency install completed:

```sh
npm --prefix apps/cms install
```

Medusa dependency install initially hung during npm finalization after writing
`node_modules` and `package-lock.json`. The hung process was terminated, then the
install completed quickly with:

```sh
npm --prefix apps/commerce install --no-audit --no-fund --no-progress
```

No explicit Node 25 engine failure was observed during installs.

Update: after removing the Codex filesystem sandbox restriction, Medusa was
installed and built successfully on Node 25.8.1 after adding `ts-node` and
aligning the commerce app TypeScript config with package `exports` resolution:

```sh
npm --prefix apps/commerce install --save-dev ts-node --no-audit --no-fund --no-progress
env DATABASE_URL=postgres://munimuni:munimuni@localhost:5432/munimuni_medusa \
  JWT_SECRET=development-jwt-secret \
  COOKIE_SECRET=development-cookie-secret \
  npm --prefix apps/commerce run build
```

The successful build completed backend and frontend compilation.

## Verification Attempt

Payload build was started with development env values:

```sh
env DATABASE_URL=postgres://munimuni:munimuni@localhost:5432/munimuni_payload \
  PAYLOAD_SECRET=development-secret \
  NEXT_PUBLIC_SERVER_URL=http://localhost:3000 \
  npm --prefix apps/cms run build
```

It reached `Creating an optimized production build ...` under Next.js 16.2.6 /
Turbopack, then the user interrupted the turn. Before resuming, check whether any
Next build process is still running and rerun the build from a clean shell.

Medusa build was attempted with development env values:

```sh
env DATABASE_URL=postgres://munimuni:munimuni@localhost:5432/munimuni_medusa \
  JWT_SECRET=development-jwt-secret \
  COOKIE_SECRET=development-cookie-secret \
  npm --prefix apps/commerce run build
```

It failed for two concrete reasons:

1. `ts-node` is missing from the commerce app dependencies.
2. The Medusa CLI attempted to create `/home/max/.config/medusa`, which is not
   writable from the Codex sandbox.

The Medusa error was not clearly a Node 25 incompatibility.

## Files Created By Dependency Installs

These lockfiles are currently untracked and should be reviewed/kept if the
dependency installs are accepted:

- `apps/cms/package-lock.json`
- `apps/commerce/package-lock.json`

`node_modules` folders were also created under both app folders, but they are
ignored by git.

## Suggested Next Steps

1. Confirm there are no leftover build/install processes:

   ```sh
   ps -eo pid,ppid,stat,etime,cmd | rg 'MuniMuniLeather|apps/cms|apps/commerce|next build|medusa build|npm --prefix'
   ```

2. Rerun Payload build from a clean shell. The prior warning about root inference
   can likely be addressed by setting `turbopack.root` in
   `apps/cms/next.config.mjs` if needed.

3. Run Medusa migrations/dev server against the local Postgres service.

## Open Question

We still have not proven whether Node 25 is acceptable for runtime. The current
evidence says Medusa installs and builds on Node 25, but the dev server and
database-backed runtime still need to pass before treating it as supported for
this repo.
