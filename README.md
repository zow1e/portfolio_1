# Zowie Ong — Portfolio

A responsive portfolio for data science, machine learning, and AI engineering applications. The existing React 18, Create React App 5, and React Router setup is retained, along with the cream and green palette. No backend, API keys, remote fonts, or deployment is required.

## Run locally

Install Node.js and npm, then run these commands in this project directory:

```powershell
npm.cmd ci
npm.cmd start
```

Open **http://localhost:3000/**. The original `/zowie-portfolio` and `/zowie-portfolio/moreprojects` routes still work. Stop the server with **Ctrl+C**.

On macOS/Linux, replace `npm.cmd` with `npm`. On Windows, `npm.cmd` avoids PowerShell's `npm.ps1` execution-policy restriction. The project was checked using Node.js 24.11.1 and npm 11.6.2.

```powershell
npm.cmd run build
npm.cmd test -- --watchAll=false --runInBand
```

The build goes to `build/`. `package.json` retains the original `/zowie-portfolio` homepage asset base and deployment scripts; **do not run `npm run deploy` for local development**. Nothing was deployed during this update. The retained CRA toolchain may print Node deprecation and outdated Browserslist warnings.

## Structure

```text
src/
  assets/fonts/        Two local Open Sans font files
  components/          Shared project cards and category filters
  data/                Project descriptions, profile, education, and experience
  layout/              Navigation and footer
  sections/            Hero, experience, projects, about, and contact
  styles/              Global tokens/type and page layout
  App.js               Existing routes and missing-page fallback
  PortfolioPage.js     Section order and page composition
  App.test.js          Content, routing, and interaction regressions
  index.js             React entry point
  serviceWorker.js     Legacy service-worker cleanup retained
public/                HTML template, manifest, and favicons
PROJECT_REVIEW.md      Evidence, limitations, and details to confirm
```

Local notebooks, the computer-vision ZIP, résumé, transcript, and editor settings remain in their existing locations and are not shipped in the site. They are reference material, not runtime code. Generated `build/` and installed `node_modules/` stay ignored by Git.

Unused starter components, duplicate historical résumé data, sample logo, legacy jQuery scripts, old CSS, and sample images were removed after checking their references. Fonts were copied into `src/assets/fonts/` before removing the old asset tree. Unused Material UI/table dependencies were removed; the React/CRA framework remains unchanged.

## Update content

- Edit `src/data/profile.js` for contact details, education, and résumé-supported experience.
- Edit `src/data/projects.js` for descriptions, categories, technology labels, links, contribution evidence.
- All seven data/ML/AI projects appear directly in the main showcase, with the strongest work first. Category filters narrow this list; only “Other software projects” remains collapsed.
- Verified technologies appear as skill chips on every card. Keep concise goal and contribution text in the overview. Technical context, limitations, and source links belong in the expandable “Approach & sources” content.
- Experience is placed after the header and before projects. Its facts come from `Zowie_resumeDS.pdf`; changing the PDF does not automatically update the site.

See [PROJECT_REVIEW.md](PROJECT_REVIEW.md) for the repository review and any facts to confirm before applying.

## Compile checks and troubleshooting

Verified the current module paths: `src/sections/Projects.js` imports `../data/projects`; `src/components/ProjectCard.js` also uses `../data/projects`. `src/App.js` imports the existing `src/styles/portfolio.css`, and `src/index.js` imports the existing `src/styles/global.css`. The obsolete `src/components/Portfolio.js` is not part of the current site. No placeholder module or compatibility file is required.

If logs still reference `components/Portfolio.js` or `../projects`, stop the previous development server with Ctrl+C and restart from this project directory using the commands above. Confirm that the editor and terminal are using the same checkout. Both the production build and a fresh development server compiled successfully for this update.

The eight automated tests pass. Browser checks at 1440, 768, 375, and 320 pixels verified all seven cards, 21 visible skill chips, category filtering/reset, the retained software disclosure/archive route, keyboard skip-link access, and no horizontal overflow or failed resources. Computed text contrast passed 4.5:1 for normal text and 3:1 for large text, including expanded project details. Desktop/phone screenshots were inspected. This is a focused check, not a full assistive-technology audit.

Existing warnings remain: Node and webpack-dev-server deprecations, the CRA/Babel undeclared-plugin dependency notice, and outdated Browserslist data. These are separate from compile errors. No dependency upgrade or audit remediation was performed; npm audit vulnerability counts have not been rechecked or resolved by this update.
