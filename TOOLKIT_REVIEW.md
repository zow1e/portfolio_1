# Toolkit evidence review

## Current basis: supplied résumé and existing portfolio

The latest update uses `Zowie_resumeDS.pdf` as the source of truth for résumé entries. External sources are optional supporting links, never an inclusion requirement. All 34 named résumé technology/method/training entries are represented below, alongside nine additional labels already in Toolkit. There are **43 unique labels**, with HTML and CSS, TensorFlow and Keras, and Git and GitHub shown separately.

| Résumé location | Named entries represented in Toolkit |
| --- | --- |
| Technical Skills — Languages | Python, JavaScript, React.js, Node.js, Java, SQL, C, HTML, CSS |
| Technical Skills — Frameworks/Tools | PyTorch, TorchVision, TensorFlow, Keras, scikit-learn, OpenCV, Apache Spark, pandas, Git, Power BI, Tableau |
| Internships | Playwright, Scrapy, LangChain, TinyFish, OpenAI/Claude APIs, AWS S3, SageMaker; Power BI is not duplicated |
| TrueSight project | Albumentations and Grad-CAM, in addition to the PyTorch/OpenCV/scikit-learn/TorchVision entries above |
| 3Rabbits project | TypeScript and Zod; TinyFish is not duplicated |
| Certifications | SAS Viya; Microsoft Visual Analytics retained as the résumé's certification wording; Oracle Academy identified as the training platform from “Oracle Academy Database Design & Administration” |

Existing portfolio entries retained: Matplotlib, Seaborn, D3.js, PyCaret, NLTK, Flask, GitHub, Linux and Arduino. Seaborn, NLTK and Zod also appear in the existing project data and are now explicitly visible in Toolkit. pandas capitalization is normalized consistently with its project label. Node.js is grouped under Tools & platforms as a runtime, Apache Spark and Scrapy under Libraries & frameworks, and HTML/CSS under Languages.

The site explains that Grad-CAM is a method and that Microsoft Visual Analytics/Oracle Academy are certification or training entries. No specific Grad-CAM implementation, Microsoft application, or Oracle database product is inferred. Broad subject areas and the ConvNeXt-Tiny model architecture are not relabeled as software libraries. Certification names do not imply a proficiency rating; no new proficiency labels were introduced. The résumé PDF stays outside public assets.

The earlier transcript review below is retained as a research record. Its external-source exclusions do **not** apply to entries explicitly named in the résumé: PyTorch and TorchVision are included on résumé evidence alone. R/RStudio, NumPy and PostgreSQL are not in the résumé or existing Toolkit, so they remain absent under the latest requested scope.

## Earlier transcript research record

Reviewed 25 October 2026. Course codes and titles below were extracted from the local transcript, using PDF text coordinates to separate course names from other columns. Only course codes and titles are recorded here. The transcript itself remains untracked and outside the website's public assets; no grades, identifiers, credit totals, or personal transcript details were copied into the implementation.

Public course materials establish **course coverage**, not personal proficiency or a particular individual assignment. Public pages can change between semesters. The site describes its inventory as projects and coursework, and evidence links distinguish those sources. No new proficiency, achievement, or individual-contribution claims were added.

## Additions and ordering

| Item | Evidence | Basis shown to visitors |
| --- | --- | --- |
| SQL | [CS2102 lecturer's course index](https://www.comp.nus.edu.sg/~adi-yoga/database/db_lecture/) explicitly lists SQL queries, joins, aggregation, procedures and normalization. | Course coverage |
| Java | [CS2040S official lecturer page](https://www.comp.nus.edu.sg/~stevenha/cs2040s.html) explicitly identifies Java as the programming language. | Course language |
| C | [CS2100 official notes](https://www.comp.nus.edu.sg/~adi-yoga/CS2100/notes/) explicitly include C, pointers, arrays and MIPS. | Course coverage |
| Matplotlib | [Airline-analysis notebook](https://github.com/zow1e/Big-data-project/blob/main/zowie_EDA.ipynb) directly inspected; imports `matplotlib.pyplot`, `pandas` and `seaborn`. | Project use; not a claim about a course |
| Git/GitHub | [CS2103T official course tools, AY2025/26 S2](https://nus-cs2103-ay2526-s2.github.io/website/admin/tools.html) requires both Git and GitHub. | Course tools; combined into one label |
| Linux | [CS2106 official course description](https://blog.nus.edu.sg/cs2106/about/) discusses operating-system concepts in Unix/Linux and Windows. Retrieved directly when the research browser timed out. | Course coverage; no Linux administration claim |
| Arduino | [NUS Computing common curriculum, EG1311](https://www.comp.nus.edu.sg/cug/soc-22-23/) explicitly names Arduino-controlled electronics. | Course coverage; not an inferred C++ or CAD-package claim |

The original 17 technologies are retained; these additions bring the inventory to 24 unique labels. Within each of the three existing groups, data analysis and visualization precede ML/AI, data ingestion/storage, and other software/hardware work. Python and SQL lead Languages; pandas, Matplotlib and D3.js lead Libraries & frameworks; Power BI, SageMaker and AWS S3 lead Tools & platforms. This is relevance ordering, not a proficiency ranking. Python and pandas also link to the inspected notebook.

## Transcript courses and sources searched

Titles retain the transcript's wording, with capitalization normalized. A source listed as a catalogue fallback is secondary; it was used only to understand course topics, not to infer a named software dependency. Searches were run for every course, with university sources preferred.

| Code | Transcript title | Source checked and decision |
| --- | --- | --- |
| CFG1002 | Career Catalyst | [NUS CFG](https://nus.edu.sg/cfg/students/career-ready/career-skills/career-catalyst): career preparation. No technical-tool addition. |
| CS2100 | Computer Organisation | [Official course notes](https://www.comp.nus.edu.sg/~adi-yoga/CS2100/notes/): C, pointers, arrays, MIPS and processor architecture. C added; MIPS left out to keep the inventory focused. |
| ES1103 | English for Academic Purposes | [NUS CELC](https://www.nus.edu.sg/celc/undergraduate-courses/es1103-english-for-academic-purposes/): academic reading, writing and source use. No technical-tool addition. |
| HSI1000 | How Science Works, Why Science Works | [NUS Science](https://www.science.nus.edu.sg/blog/2024/04/innovative-educators-assoc-prof-ryan-bettens/) and [common curriculum](https://www.comp.nus.edu.sg/cug/soc-22-23/): scientific inquiry. No named programming dependency added. |
| IS2238 | Economics of IT and AI | [NUS common curriculum](https://www.comp.nus.edu.sg/cug/soc-22-23/): IT/AI economics, network effects and societal tradeoffs. No named technology established. |
| MA1301 | Introductory Mathematics | [NUS Mathematics syllabus for the proficiency test](https://www.math.nus.edu.sg/ug/prospective/ma1301test/): algebra, functions, differentiation and integration. A test outline is not evidence of a software package. No tool added. |
| CFG1003 | Financial Wellbeing-Introduction | [NUS programme announcement](https://news.nus.edu.sg/nus-cfg-playmoolah-collaborate-on-financial-wellbeing-programme/): financial wellbeing. No technical-tool addition. |
| CFG1004 | Financial Wellbeing - Art and Science of Investing | [NUS CFG](https://nus.edu.sg/cfg/students/career-ready/life-skills/financial-readiness): the current page uses the title Financial Readiness for Young Professionals. Historical title differs; no programming-tool inference. |
| CS1231S | Discrete Structures | [Official course description](https://www.comp.nus.edu.sg/~cs1231s/1_course_info/desc.html): logic, proofs, relations, counting and mathematical data models. No software dependency established. |
| CS2030S | Programming Methodology II | [NUS lecturer's Java lecture](https://www.comp.nus.edu.sg/~adi-yoga/programming/cs2_lecture/L01/) found in search; the browser exposed only its navigation. [Catalogue fallback](https://api.nusmods.com/v2/2025-2026/modules/CS2030S.json) confirms object-oriented and functional programming topics. Java is supported independently by the accessible CS2040S page. |
| CS2106 | Introduction to Operating Systems | [Official course description](https://blog.nus.edu.sg/cs2106/about/), fetched directly; [catalogue cross-check](https://api.nusmods.com/v2/2025-2026/modules/CS2106.json): processes, memory, concurrency and file systems in contemporary OSs. Linux added as course coverage. |
| ES2660 | Communicating in the Information Age | [NUS CELC](https://www.nus.edu.sg/celc/undergraduate-courses/es2660-communicating-in-the-information-age/): critical thinking, digital literacy and multimodal communication. No named development tool added. |
| MA1521 | Calculus for Computing | [NUS Mathematics course list](https://www.math.nus.edu.sg/modtt/modlist/) identifies the course and directs readers to NUSMods for descriptions. [Catalogue fallback](https://api.nusmods.com/v2/2025-2026/modules/MA1521.json): calculus, differential equations and numerical methods. No software named; none added. |
| CS2040S | Data Structures and Algorithms | [Official lecturer page](https://www.comp.nus.edu.sg/~stevenha/cs2040s.html): Java; data structures, searching, sorting and algorithm analysis. Java added. |
| CS2102 | Database Systems | [Official lecturer's course index](https://www.comp.nus.edu.sg/~adi-yoga/database/db_lecture/): SQL, relational modelling, joins, aggregation, normalization and database programming. SQL added; no database product inferred. |
| EG1311 | Design and Make | [NUS common curriculum](https://www.comp.nus.edu.sg/cug/soc-22-23/): Arduino-controlled electronics, CAD modelling and rapid prototyping. Arduino added at the end of Tools & platforms; no specific CAD application or language inferred. |
| GEC1023 | Social History of the Piano | [NUS YST official course description](https://www.ystmusic.nus.edu.sg/sem1-courses-for-nus-non-music-majors/): interdisciplinary study of piano history. No technical-tool addition. |
| ST2334 | Probability and Statistics | Official curriculum/PDF searches found probability and inference topics but no reliable R requirement. The PDF fetch failed; [catalogue fallback](https://api.nusmods.com/v2/2025-2026/modules/ST2334.json) confirms probability, distributions, estimation and hypothesis testing. No R/RStudio added. |
| UTS2831 | Global AI Innovations and Singapore Entrepreneurial Landscape | [Official Acacia offering](https://acacia.nus.edu.sg/courses/ay2025-2026-semester-2/) confirms code/title. [Catalogue fallback](https://api.nusmods.com/v2/2025-2026/modules/UTS2831.json) describes AI innovation, governance and prototypes, without naming an implementation stack. No technology inferred. |
| CS2101 | Effective Communication for Computing Professionals | [NUS CELC](https://www.nus.edu.sg/celc/undergraduate-courses/cs2101-effective-communication-for-computing-professionals/): professional communication and collaboration. Current AI-related wording does not establish a specific AI product. No tool added. |
| CS2103T | Software Engineering | [Official course tools](https://nus-cs2103-ay2526-s2.github.io/website/admin/tools.html): Git/GitHub required. Administrative communication tools are not promoted as technical skills. |
| CS2109S | Introduction to AI and Machine Learning | [Official NUS CHS description](https://chs.nus.edu.sg/programmes/common-curriculum/artificial-intelligence/): search, supervised/unsupervised learning, model validation and neural networks. [TA's course page](https://www.comp.nus.edu.sg/~mtyeung/cs2109s_2510.html) returned HTTP 403 in both browser and direct fetch. Search-index snippets and student feedback are insufficient to add NumPy or PyTorch. Existing scikit-learn/TensorFlow/Keras remain supported by project data, not attributed to this course. |
| LAK1201 | Korean 1 | [NUS Centre for Language Studies](https://fass.nus.edu.sg/cls/korean/): Korean language learning. No programming-language addition. |
| UTC2812 | Empowering AI-Ready Older Adults via Confidence, Opportunities, Design and Engagement (CODE) | [Official Acacia offering](https://acacia.nus.edu.sg/courses/ay2025-2026-semester-2/) confirms code/title. [Catalogue fallback](https://api.nusmods.com/v2/2025-2026/modules/UTC2812.json) describes community engagement and AI awareness, without naming a product. No technology inferred. |
| CP3202 | Internship II | [Official NUS Computing internship programme](https://www.comp.nus.edu.sg/industry/intern/student/sip/): programme structure, no universal technical stack. Existing internship skills remain sourced from the portfolio's experience data; this course is not mapped to a particular employer. |

## Details to confirm

- Semester-specific assignment materials could establish additional tools, especially for CS2109S, ST2334, CS2102, UTS2831 and UTC2812. Until those are available, NumPy, PyTorch, R/RStudio, PostgreSQL, and specific AI products are not added from these courses.
- Course inclusion does not establish depth of hands-on experience. If a coursework label should be presented as project use, supply the corresponding assignment or repository evidence first.
- No assumptions were made about transfer credits, courses not listed in this transcript, or which internship fulfilled CP3202.
