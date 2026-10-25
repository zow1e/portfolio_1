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
  components/          Taped section cards, project cards, and category filters
  data/                Project descriptions, profile, education, and experience
  layout/              Navigation and footer
  sections/            Hero, toolkit, experience, projects, about, and contact
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
- Inside Projects, all seven data/ML/AI projects appear in the main showcase, with the strongest work first. Category filters narrow this list; Other software projects has its own nested disclosure.
- Verified technologies appear as skill chips on every card. Keep concise goal and contribution text in the overview. Technical context, limitations, and source links belong in the expandable “Approach & sources” content.
- Experience is placed after the header and before projects. Its facts come from `Zowie_resumeDS.pdf`; changing the PDF does not automatically update the site.

See [PROJECT_REVIEW.md](PROJECT_REVIEW.md) for the repository review and any facts to confirm before applying.

## Compile checks and troubleshooting

Verified the current module paths: `src/sections/Projects.js` imports `../data/projects`; `src/components/ProjectCard.js` also uses `../data/projects`. `src/App.js` imports the existing `src/styles/portfolio.css`, and `src/index.js` imports the existing `src/styles/global.css`. The obsolete `src/components/Portfolio.js` is not part of the current site. No placeholder module or compatibility file is required.

If logs still reference `components/Portfolio.js` or `../projects`, stop the previous development server with Ctrl+C and restart from this project directory using the commands above. Confirm that the editor and terminal are using the same checkout. Both the production build and a fresh development server compiled successfully for this update.

The eleven automated tests pass. Browser checks at 1440, 768, 375, and 320 pixels verified all seven cards, 21 visible skill chips, category filtering/reset, the retained software disclosure/archive route, keyboard skip-link access, and no horizontal overflow or failed resources. Computed text contrast passed 4.5:1 for normal text and 3:1 for large text, including expanded project details. Desktop/phone screenshots were inspected. This is a focused check, not a full assistive-technology audit.

Existing warnings remain: Node and webpack-dev-server deprecations, the CRA/Babel undeclared-plugin dependency notice, and outdated Browserslist data. These are separate from compile errors. No dependency upgrade or audit remediation was performed; npm audit vulnerability counts have not been rechecked or resolved by this update.

## Navigation, typography, and project documentation

The hero is unchanged. Navigation labels use stronger type and padded hover/focus states; the current section has a green inset marker and `aria-current="location"`, updated on section links and scrolling. Navigation links open the matching Experience, Projects, or About card and scroll its face below the sticky header. Direct section URLs and browser hash navigation work too. Contact remains outside the cards.

Headings and technical labels use a system monospace stack (`ui-monospace`, Cascadia Code, SFMono-Regular, Consolas, Liberation Mono, monospace). Body copy keeps the bundled Open Sans fonts. No font downloads or dependencies were added. A restrained receipt treatment appears only in expanded “Technical notes”, using dashed rules and readable text.

Each of the seven main project cards now links to its repository README. Those READMEs were reviewed against the current source and updated on GitHub; the three software projects in the separate disclosure were left untouched. See the update record in [PROJECT_REVIEW.md](PROJECT_REVIEW.md) for exact commits and verification limits. Nothing was deployed.

## Toolkit

The compact Toolkit appears below the three taped cards and before Contact. Three groups (Languages, Libraries & frameworks, Tools & platforms) include every technology explicitly named in the supplied resume, alongside existing project and course entries. Resume entries do not require an external source. New source links distinguish course coverage from project use. The 43 labels are ordered for data science, ML, data engineering, and other technical areas; they are not proficiency ratings. The curated list and evidence URLs live in `src/data/toolkit.js`. See [TOOLKIT_REVIEW.md](TOOLKIT_REVIEW.md) for the resume inventory, all 25 course codes/titles, sources, and verification limits. No transcript grades or identifiers are published. Keep future entries tied to portfolio or repository evidence. Groups use flexible wrapping: three columns when space permits, two at intermediate widths, and one on narrow screens. Labels wrap within their available space. Cards and Toolkit share a wider desktop container; desktop card faces are enlarged while tablet/mobile retain comfortable sizing.

## Taped section cards

Experience, Projects, and About use one shared native HTML disclosure module in `src/components/SectionCard.js`. Each paper face has a section label, a decorative pixel icon below it, a CSS tape strip, and a visible open/close cue. The icons are inline SVG drawings; no image download, animation library, or dependency was added.

When all cards are closed, desktop shows three cards side by side. Opening any card switches to a full-width stack so its content remains easy to read, without reordering the sections. At 760px and below the cards are always stacked. Enter, Space, pointer, and touch operate the disclosures independently. Content stays mounted, preserving filters and nested project notes when cards close. The archive route still opens Projects and Other software projects.

Hover/focus shadows and brief icon/indicator transitions provide feedback. Browsers supporting intrinsic-size transitions animate opening and closing over 180ms; other browsers open immediately. Reduced-motion settings remove all animation. Navigation links, direct URLs, and hash changes open the correct card; the current-section marker ignores closed cards while scrolling.

Browser checks at 1440, 900, 375, and 320px verified card layout, icons below labels, independent expansion, keyboard and touch operation, same-hash navigation, direct links, category filter state, and the archive route. There was no horizontal overflow or runtime error. Computed text contrast passed the normal/large text thresholds. Desktop/mobile screenshots were inspected, including hover/focus and reduced motion. All eleven automated tests pass; this is not a full assistive-technology audit.

## Requested Codex plugin

Verified the installed CLI (`0.164.0-alpha.11.1`) using `codex plugin --help`, `codex plugin marketplace add --help`, and `codex plugin add --help`, then ran the requested commands without changing their syntax:

```powershell
codex plugin marketplace add mattpocock/skills
codex plugin add mattpocock-skills@mattpocock
```

Both commands succeeded. The installed plugin is version **1.3.1**, with its manifest present and `enabled = true` in the Codex configuration. Its Codebase Design skill informed the shared card module and small caller interface. The plugin is installed in the user's Codex configuration, not as a website dependency.

The pixel/grid background spans the portfolio using the existing small SVG and 48-second stepped CSS drift. A fixed, viewport-sized decorative layer stays behind the page; opaque cards protect their text. Stronger local layers emphasize the sticky navbar and hero, with a gradient mask fading the hero into the subtle main background. Contact has a faint matching layer against its dark green surface. All layers ignore pointer input, and the background element is hidden from assistive technology. Mobile uses lower opacity; reduced-motion settings stop every pixel animation. No JavaScript animation loop, dependency, or external service was added.

Build and eleven tests pass. Desktop/mobile browser checks at 1440/900/375/320px cover controls, keyboard focus, touch, no horizontal overflow, background layer placement and opacity, and reduced-motion mode. Text contrast was checked conservatively against the darkest pixel/grid intersections. Existing Node/CRA/Browserslist warnings and the intermittent Jest delayed-exit notice remain; no audit remediation or deployment was performed.
