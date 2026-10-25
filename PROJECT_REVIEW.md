# Portfolio evidence and details to confirm

Updated on 25 October 2026 (initial repository review: 24 October). Current work builds on the earlier review of the public [zow1e account](https://github.com/zow1e), and adds the supplied résumé plus the `adv` and `aa` repositories.

## Résumé-supported content

Read text from **Zowie_resumeDS.pdf**, provided in this project. The PDF was parsed locally with a temporary reader installed outside the project. It was not copied to `public/`, and no runtime PDF dependency was added. The separate transcript was not used; the work experience section relies only on the résumé.

| Section | Source-supported facts used |
| --- | --- |
| STB | Data Science Intern, Singapore Tourism Board (STB), May–Aug 2026. LLM-assisted scraping of 10+ dynamic websites; Playwright, Scrapy, LangChain, TinyFish, OpenAI/Claude; AWS S3/SageMaker and 170,000 records. |
| Z-Power | Data Analyst Intern, Z-Power Automation, May–July 2025. Three predictive models, clustering and anomaly detection on three industrial datasets; recommendations for automation/Power BI and support for centralized databases. |
| DSTA | Data Analyst Intern, “Defense Science Technology Agency (DSTA)” as written in the résumé, Sep 2023–Feb 2024. Grade-prediction ML, sentiment/topic classification on 500 records, and structured/unstructured pipelines. |
| Education | NUS Bachelor of Computing in Computer Science, Aug 2024–May 2027, Minor in Data Engineering, AI and Database Systems focus areas. NYP Diploma in Applied Artificial Intelligence and Analytics, Apr 2021–May 2024, Big Data specialisation. Replaces the previous site's 2028 NUS end date. |
| 3Rabbits ownership | Résumé specifically credits TinyFish scraping, anti-bot fallback, TypeScript/Zod, and JSON ETL/validation. The card attributes this work to Zowie; it does not claim ownership of every RAG/application component. |

The published summaries omit the résumé's 40% and 60% improvement claims to keep the section concise. Retained counts are résumé-reported, not independently measured here. All three internships have dates and titles; none required guessing. No phone number, transcript grades, or résumé download was added.

## New repository review

GitHub's web reader failed for both repository pages. Public GitHub API metadata and default-branch ZIP downloads succeeded. Both repositories use `main`. Searched their extracted contents for README files: **neither repository contains a README**. Display names and tags were chosen from the implementation, not inferred from the short repository names.

### adv → HDB resale explorer

Repository: https://github.com/zow1e/adv

Read `task1/index.html`, `task1/js/main.js`, and chart implementation source including `lineChart.js` and `pieChart.js`; inventoried other chart modules and tutor folders. Also read code/markdown from `Task 2/assignment_task2_student.ipynb` (Seaborn resort-booking exploratory exercises).

The `task1` dashboard reads the included `hdb-resale-prices_2000-2023May.csv`, converts fields, groups by town/time, calculates means and counts, and shares controls across D3 charts. Verified tags: JavaScript, D3.js, HTML/CSS. Classified as Data visualization. Links point to the HTML and data/filter code.

The repository contains tutor examples as well as assignment work. The card does not claim original authorship of tutorial code, predictive modeling, business impact, or a deployed demo. Data currency labels and chart calculations were not independently validated.

### aa → HDB dashboard experiments

Repository: https://github.com/zow1e/aa

Read `index.html`, `js/main.js`, `js/mainsep.js`, `js/change.js`, `js/typepie.js`, and code/markdown in `P7.ipynb`; inventoried the remaining chart modules.

The dashboard groups HDB resale CSV records by time, town, flat type/model and contains line, bar, pie, and stacked-chart experiments. Metric/time controls call chart-update functions. Verified tags: JavaScript, D3.js, HTML/CSS. Classified as Data visualization. Its subject overlaps `adv`; both remain supporting work instead of displacing stronger ML/AI evidence.

**Limitations:** `js/main.js` references `data/small.csv`, which is absent from the downloaded repository. Parts of `change.js` have inconsistent argument/data usage. Some source comments credit tutorial projects. `P7.ipynb` is a GCP credentials/bucket/upload practical, not an implemented image-training workflow. There are no deployment, model-training, ownership, or performance claims. Only source links are provided.

## Existing repository evidence retained

The earlier pass downloaded all ten public default-branch repositories then available and reviewed relevant documentation/source. This update did not rerun their experiments or refresh every repository. Source attribution for 3Rabbits was refined using the newly supplied résumé and a further read of `runSiteScrape.ts`, `runScrapeJob.ts`, and `productListing.ts`.

| Repository | Evidence | Presentation |
| --- | --- | --- |
| MLOPS | Root/webApp READMEs and `webApp/main.py`; transaction route marked `Zowie`. Generic Hydra examples credit another author. | Featured saved-model inference application; individual claim limited to the marked route, preprocessing, and prediction. |
| 3monkfish | README/package docs, RAG code, ingestion pipeline/normalizer, and résumé contribution statement. | Featured 3Rabbits scraping/ingestion prototype; no full-product or production claims. |
| Big-data-project | README lists four team members; `zowie_EDA.ipynb` and text of `zowie_appendixD.docx` identify individual analysis. | Featured fare analysis, joins, and visualization; broader big-data pipeline remains team work. |
| ADL | README, `part1normal.ipynb`, `part1Transfer.ipynb`, and notebook inventory. | Featured custom CNN vs frozen VGG16 comparison; no independently reproduced scores or explicit individual authorship. |
| AY22-y2 | NLP preprocessing/modeling notebooks; count/TF-IDF, logistic regression, Naive Bayes, class imbalance. | NLP coursework in the main showcase; individual ownership not explicitly documented. |
| ip | README/user guide, `Parser.java` credits `zow1e`, source/test inventory. | Additional software: Kiwi Java/JavaFX task manager; identifies starter/fork context in this record. |
| tp | README, team-doc inventory, course-export command source. | Additional software: GradeBookPlus team app; individual ownership not established. |
| overflowz | README and Flask routes/calculations. | Additional software: household calculator; no validated emission-factor claims. |
| PyHipp | README, requirements, module inventory and spike-train source. | Omitted: upstream fork without confirmed personal contribution. |
| javafx-tutorial | README and starter Java source. | Omitted: tutorial starter with little additional evidence for target roles. |

## Files and implementation

- Retained React 18 / CRA 5, React Router routes, native project filters and disclosures, contact links, local fonts, and the cream/green palette.
- Separated page sections, shared UI, content data, layout, styles, and font assets. Merged previous Home composition into `PortfolioPage.js`; replaced the old Resume component with an experience-only section.
- Removed confirmed unused old components/data/logo and legacy public JavaScript/CSS/sample-image trees. The two used local font files were preserved under `src/assets/fonts/`. The service-worker unregister path remains for returning visitors.
- Removed unused Material UI/table packages; retained the current framework and deployment configuration. No deployment ran.
- Left the supplied PDFs, local notebook folders, computer-vision ZIP, and `.vscode` settings in their existing locations. They are not runtime assets and are not copied into the build.

## Confirm or supply

1. **DSTA employer spelling:** the résumé says “Defense Science Technology Agency (DSTA)”, while the old site used “Defence Science and Technology Agency”. The new experience section follows the résumé literally. Confirm the public wording you prefer.
2. **NUS end date:** the résumé says May 2027; the previous website said 2028. The new page uses the résumé. Confirm this is current.
3. **adv and aa relationship/ownership:** both contain HDB dashboard work and lack READMEs. Confirm whether `aa` is an earlier iteration and identify your individual contribution. Supply its missing `data/small.csv` or a corrected data path if you want a working demo later.
4. Individual contributions to ADL, AY22-y2, GradeBookPlus, and Overflowz remain undocumented in the reviewed material. Current descriptions stay neutral. No results or ownership were invented.
5. The résumé's TrueSight entry contains a literal `github-link` placeholder rather than a usable repository URL. It was not added as an independently reviewed project; provide the repository if you want it featured.

No private repositories, commit history/PR attribution, live project deployments, or model experiments were independently verified. Archived ZIP contents and local lab PDFs were not used as evidence for public claims.

## Validation

Automated regressions cover experience order and résumé content, visibility of all seven projects, category filtering/reset across all seven data/ML projects, both new repository links, disclosure counts, legacy routes, source-link encoding, and the missing-page fallback. Final production build succeeded and all eight tests passed. Headless Edge checks passed at 1440, 768, 375, and 320 pixels: no horizontal overflow, JavaScript runtime exceptions, or failed resource responses. Verified category filters, adv/aa links, expanded detail layout, native disclosure/count updates, legacy archive routes, and Tab/Enter activation of the skip link. Desktop and phone screenshots were inspected. This is a focused browser check, not a full screen-reader audit. The retained CRA toolchain reports dependency/deprecation and Browserslist warnings.

## Visual refinement and compile verification — 25 October 2026

Kept the existing content, section order, React structure, and muted green/warm palette. All seven projects now appear in the main showcase; the data/ML disclosure and its obsolete `featured` flags were removed. The software disclosure, category filters, and all project/source links remain. Technology chips use the exact existing `tools` arrays, with no new skills or claims.

Dark green supporting text replaces the previous muted copy colour. Coordinated chip fills, links, control borders, and contact-section focus colours improve readability. Browser computed-colour checks passed WCAG AA text thresholds (normal 4.5:1; large 3:1), with details expanded. No attached screenshot was accessible in this turn; the actual local desktop and mobile renders were inspected instead.

The reported missing-module errors were not reproducible in the current files. Both referenced stylesheets exist and the active project components import `src/data/projects.js` correctly. The old `src/components/Portfolio.js` is absent and unused. Verified a fresh development-server compilation and production build; neither reported missing modules. No placeholder files, dependency upgrades, or audit fixes were added.

All eight updated tests pass. Headless Edge checks at 1440/768/375/320 pixels passed for seven visible cards, 21 skill chips, filters/reset, software/archive behavior, keyboard skip link, expanded-detail width, resource loading, and text contrast. Existing Node/webpack-dev-server, CRA/Babel, and Browserslist warnings remain. Vulnerability counts were not rechecked or remediated. Nothing was deployed.

## README refresh and technical visual treatment — 25 October 2026

Cloned the current `main` branch of exactly the seven projects in the main showcase, read their existing documentation and relevant source, and edited only each repository's root `README.md`. Four existing READMEs were revised; AY22-y2, adv, and aa received new READMEs because none existed. All repositories were accessible. No files in ip, tp, overflowz, PyHipp, or javafx-tutorial were edited.

| Repository | README-only commit |
| --- | --- |
| [3monkfish](https://github.com/zow1e/3monkfish/blob/main/README.md) | [5ef96ee](https://github.com/zow1e/3monkfish/commit/5ef96ee) |
| [MLOPS](https://github.com/zow1e/MLOPS/blob/main/README.md) | [c57a2af](https://github.com/zow1e/MLOPS/commit/c57a2af) |
| [Big-data-project](https://github.com/zow1e/Big-data-project/blob/main/README.md) | [de0421b](https://github.com/zow1e/Big-data-project/commit/de0421b) |
| [ADL](https://github.com/zow1e/ADL/blob/main/README.md) | [855dd50](https://github.com/zow1e/ADL/commit/855dd50) |
| [AY22-y2](https://github.com/zow1e/AY22-y2/blob/main/README.md) | [e260d97](https://github.com/zow1e/AY22-y2/commit/e260d97) |
| [adv](https://github.com/zow1e/adv/blob/main/README.md) | [9d02f23](https://github.com/zow1e/adv/commit/9d02f23) |
| [aa](https://github.com/zow1e/aa/blob/main/README.md) | [0daa6a4](https://github.com/zow1e/aa/commit/0daa6a4) |

The review checked manifests, API/UI and ingestion/RAG code in 3monkfish; requirements/configuration, Flask inference and modeling notebooks in MLOPS; the three airline-analysis notebooks and input paths; ADL CNN/VGG16 and recurrent-text notebooks plus archive inventories; AY22 NLP, topic-modeling and scraping imports/cells; and the two HDB dashboards' HTML, aggregations, chart handlers and dataset locations. README Markdown links were checked against the checkout files.

Important corrections: 3monkfish includes an actual React UI and RAG chat route, even though its old README described the frontend as future work. Big-data-project does not contain the input CSVs its notebook references. The aa repository contains `small.csv` at its root, while code requests `data/small.csv`; its new README explains preparing that path. No application code was changed to address these gaps. Existing claims about individual/team work and experiment limitations remain qualified.

The documentation describes source-supported setup steps, but the external projects' model training, services, cloud credentials and full dependency installations were not executed. GitHub reported existing Dependabot findings for MLOPS during the documentation push; no dependency remediation was performed.

The portfolio now uses sticky top navigation, existing Open Sans body fonts paired with system monospace headings, and subtle dashed receipt rules limited to expanded technical notes. The seven project cards link directly to the refreshed READMEs. The portfolio itself was not pushed or deployed in this update.

Browser checks at 1440/768/375/320 pixels verified sticky positioning and unobscured section targets, seven cards and their skill tags, filters, legacy routes, keyboard focus, no overflow/runtime errors, and WCAG AA text contrast across the expanded page. The existing eight tests pass and the production build succeeds; inherited CRA/Babel, Node, and Browserslist warnings remain.

## Bounded desktop About receipt — 25 October 2026

The single About section is visually placed in a left receipt column at 1200px and above, while its DOM position remains after Selected Work. A shared grid contains only Experience, Selected Work, and About; Contact remains outside the sticky boundary. A viewport-height cap and overflow scrolling keep all education content reachable. The scrollable region receives a keyboard focus stop only in the expanded layout and retains its accessible section heading.

Below the breakpoint the existing section layout, content, and order are preserved, with no receipt border, internal scrolling, extra tab stop, or duplicate About instance. No new dependencies or data claims were introduced. Build and nine tests pass. Browser checks at 1440/1200/1199/375/320 pixels verified separation from the work column, sticking through both work sections, release before Contact, keyboard PageDown scrolling, normal narrow-screen flow, filter operation, no overflow/runtime errors, and AA text-contrast thresholds. Desktop and phone screenshots were inspected after rendering settled. Existing build/test warnings remain; nothing was deployed.
