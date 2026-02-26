# GitHub Pages Deployment

This repository publishes the static site from `docs/` using GitHub Actions.

## Files involved

- `.github/workflows/deploy-pages.yml`
- `docs/.nojekyll`
- `docs/index.html`

## One-time setup in GitHub

1. Open repository **Settings**.
2. Go to **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

## Triggering deployments

- Any push to `main` or `master` deploys.
- You can also run it manually from **Actions** (`workflow_dispatch`).

## Published URL

After the first successful run, GitHub shows the Pages URL in:

- **Actions** run summary
- **Settings -> Pages**
