# Personal Website

This repository contains the source code for my personal website and project portfolio, built with SvelteKit and deployed to GitHub Pages.

## Live site

https://tertius4.github.io/

## Project structure

- `main/` — SvelteKit application source and development setup
- `build/` — generated production build output
- `deploy` — deployment script for publishing the site
- root-level HTML files — generated GitHub Pages artifacts

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

From the repository root (not `/main`), run:

```bash
./deploy
```

Then commit your changes and push them to the appropriate branch (for this project, `master`).

## Notes

- The app source code lives under `main/`.
- The built static site is published through GitHub Pages.
- This project is designed for a personal portfolio / landing page with lightweight static hosting.