# Deployment

This document describes how to build, run, and prepare this site for production. It does **not** deploy anything — no changes have been made to any existing Oracle server, Cloudflare account, or Cloudflare Tunnel configuration. Everything here was verified locally (Docker build + run, health check) during development.

## Runtime model

The site is Astro with the `@astrojs/node` adapter in **standalone** mode. Almost every page is statically prerendered at build time (`dist/client/*.html`); only two routes are rendered on-demand by the Node process:

- `/` — reads the `nawa_locale` cookie or `Accept-Language` header and redirects to `/ar` or `/en`.
- `/health` — returns `{"status":"ok"}` for container health checks.

This means the running Node process is lightweight (it's not re-rendering pages on every request), but it is still a real server process, not a purely static file host — the container must stay running.

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `PORT` | No (default `4321`) | Port the Node server listens on. |
| `HOST` | No (default `0.0.0.0` in the container) | Bind address. |
| `PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 measurement ID (e.g. `G-XXXXXXXXXX`). When unset, no analytics script is ever injected — this is enforced in `src/layouts/Base.astro`, not just a config toggle. |

Copy `.env.example` to `.env` for local development. No other environment variables are read by the app. No secrets/API keys are required to build or run this site.

## Local build and run (verified)

```bash
npm ci
npm run build      # runs `astro check` then `astro build`
node ./dist/server/entry.mjs
```

The server listens on port 4321 by default. `GET /health` should return `{"status":"ok"}`.

## Docker (verified locally)

```bash
docker build -t nawa-website .
docker run -d -p 4321:4321 --name nawa-website nawa-website
curl http://localhost:4321/health
```

This was actually built and run during development (not just written and assumed to work): `docker build` completed successfully, the container reached Docker's `healthy` state via the built-in `HEALTHCHECK`, and `/ar`, `/en`, and `/health` all returned correct responses. Verified image size at build time: **~576MB** (node:22-alpine base + production `node_modules`; no build toolchain is retained in the runtime stage since it's a separate `runtime` stage in the multi-stage Dockerfile).

Notes on the Dockerfile:
- Multi-stage: `builder` installs full deps and runs `astro build`; `runtime` installs **production-only** deps (`npm ci --omit=dev`) and copies only `dist/`. The Node adapter's standalone output is **not** fully self-contained — it still imports a few runtime packages (e.g. `devalue`) from `node_modules`, so the production `node_modules` install in the runtime stage is required, not optional. This was confirmed by testing `node dist/server/entry.mjs` with `dist/` copied to a directory with no `node_modules` — it fails with `ERR_MODULE_NOT_FOUND`.
- Runs as a non-root user (`nawa`).
- `HEALTHCHECK` hits `/health` internally every 30s.

## Restart behavior

The container has no built-in supervisor/restart logic of its own — restart policy should be set by whatever runs the container (e.g. `docker run --restart unless-stopped`, or the equivalent field in a Compose file / systemd unit / Oracle Cloud container instance config). The app itself does not hold any local state that needs to survive a restart — the locale-preference "session" storage the Node adapter logs on startup ("Enabling sessions with filesystem storage") is unused by this app (no page currently uses Astro sessions); if that ever changes, the session storage directory would need to be a persistent volume.

## Target production architecture (as described by the user; not implemented here)

```
Internet → Cloudflare → Cloudflare Tunnel → Oracle server → Nawa website container
```

Notes for whoever wires this up (I have not touched any existing Oracle or Cloudflare configuration):

- **Oracle server**: run the container with a restart policy (see above) and expose it only on a loopback or private interface — the public-facing entry point should be the Cloudflare Tunnel, not a directly exposed port.
- **Cloudflare Tunnel**: point a `cloudflared` ingress rule at `http://localhost:4321` (or whatever port the container is published on). A minimal ingress example:

  ```yaml
  ingress:
    - hostname: nawa.systems
      service: http://localhost:4321
    - service: http_status:404
  ```

- **Health checks**: both Docker's own `HEALTHCHECK` and `GET /health` are available if Cloudflare or an external monitor wants to poll something directly.
- **TLS**: expected to terminate at Cloudflare; the container itself serves plain HTTP.
- **This document does not create, modify, or assume the existence of any specific Cloudflare Tunnel, DNS record, or Oracle instance** — those are operational steps for whoever has access to the existing infrastructure.

## What was NOT done

- No image was pushed to any registry.
- No DNS, Cloudflare Tunnel, or Oracle server configuration was created or modified.
- No production deployment occurred.
