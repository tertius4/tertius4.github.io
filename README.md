# Personal Website

This repository contains the source code for my personal website and project portfolio, built with SvelteKit and deployed to GitHub Pages.

## Live site

https://tertius4.github.io/

## Project structure

- `main/` — SvelteKit application source and development setup
- `build/` — generated production build output (git-ignored, created by the build)
- `.github/workflows/static.yml` — builds the site and deploys it to GitHub Pages

## Local development

Navigate to the app source directory and install dependencies:

```bash
cd main
npm i
npm run dev
```

Then open the local development URL shown in the terminal, typically:

```bash
http://localhost:5173
```

## Production build

To build the site locally:

```bash
cd main
npm run build
npm run preview
```

## Deployment

Pushing to `master` runs the GitHub Actions workflow, which installs dependencies, runs `npm run check`, builds the site and deploys the `build/` output to GitHub Pages. Build output is no longer committed.

The workflow sets `PUBLIC_ANALYTICS_ID` (Google Analytics). Analytics only load after the visitor accepts the consent banner. Node 20.19+ (22 recommended) is required.

## Notes

- The app source code lives under `main/`.
- The built static site is published through GitHub Pages.
- Formatting: `npm run format` (Prettier). Icons live in `main/static/icons/sprite.svg` and are referenced by id via `Icon.svelte`.
- This project is designed for a personal portfolio / landing page with lightweight static hosting.