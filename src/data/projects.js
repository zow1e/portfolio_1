const github = 'https://github.com/zow1e';
export const projects = [
  {
    "id": "copilot",
    "title": "3Rabbits Copilot",
    "category": "AI engineering",
    "ownership": "TinyFish scraping, anti-bot fallbacks, and JSON normalization and validation.",
    "summary": "Extract and structure e-commerce product listings for downstream RAG and AI search.",
    "approach": "TinyFish requests extract product listings. The ingestion pipeline handles blocked responses and normalizes and validates JSON with shared schemas for downstream retrieval workflows.",
    "contribution": "The supplied résumé identifies the web scraping and data ingestion work as my contribution.",
    "tools": [
      "TypeScript",
      "TinyFish",
      "Zod"
    ],
    "repo": "3monkfish",
    "branch": "main",
    "links": [
      {
        "label": "Scraping pipeline",
        "path": "packages/listings-ingestion/src/pipelines/runSiteScrape.ts"
      },
      {
        "label": "Normalization code",
        "path": "packages/listings-ingestion/src/normalizers/productListing.ts"
      },
      {
        "label": "Project README",
        "path": "README.md"
      }
    ],
    "note": "Prototype · Some services remain scaffolds; no production or evaluation claims."
  },
  {
    "id": "expenses",
    "title": "Expense anomaly detection",
    "category": "Machine learning",
    "ownership": "Transaction input, preprocessing, and saved-model prediction route.",
    "summary": "Flag unusual expense records through a web application.",
    "approach": "A Flask form transforms transaction inputs into a pandas DataFrame and passes them to a saved PyCaret anomaly model.",
    "contribution": "My contribution: the source marks the transaction input and prediction route with my name.",
    "tools": [
      "Python",
      "PyCaret",
      "Flask"
    ],
    "repo": "MLOPS",
    "branch": "main",
    "links": [
      {
        "label": "Inference code",
        "path": "webApp/main.py"
      },
      {
        "label": "Project README",
        "path": "README.md"
      }
    ],
    "note": "Course project · Saved-model inference through a Flask interface."
  },
  {
    "id": "airlines",
    "title": "What shapes airline fares?",
    "category": "Data science",
    "ownership": "Fare analysis, reference-data joins, and visualization; the broader pipeline was team work.",
    "summary": "Explore fare-per-mile patterns across American, Delta, and United airlines.",
    "approach": "Join carrier and holiday reference data, derive fare-per-mile and route features, then compare seasonal patterns with exploratory plots.",
    "contribution": "My contribution: fare analysis, data transformations, and visual exploration in zowie_EDA.ipynb and my individual report. The broader big data pipeline was team work.",
    "tools": [
      "Python",
      "pandas",
      "Seaborn"
    ],
    "repo": "Big-data-project",
    "branch": "main",
    "links": [
      {
        "label": "My EDA notebook",
        "path": "zowie_EDA.ipynb"
      },
      {
        "label": "Individual report",
        "path": "zowie_appendixD.docx"
      },
      {
        "label": "Project README",
        "path": "README.md"
      }
    ],
    "note": "Team project · Larger source datasets are omitted from the repository."
  },
  {
    "id": "vision",
    "title": "Agricultural pest classification",
    "category": "Computer vision",
    "summary": "Classify images of ants, bees, and beetles with deep learning.",
    "approach": "Compare a custom convolutional network with frozen VGG16 features and a task-specific classifier. Notebooks explore augmentation and discuss overfitting.",
    "contribution": "Coursework notebooks document the experiments; individual authorship is not explicitly recorded.",
    "tools": [
      "Python",
      "TensorFlow",
      "Keras"
    ],
    "repo": "ADL",
    "branch": "main",
    "links": [
      {
        "label": "CNN notebook",
        "path": "assignment23aug/part1normal.ipynb"
      },
      {
        "label": "VGG16 notebook",
        "path": "assignment23aug/part1Transfer.ipynb"
      },
      {
        "label": "Project README",
        "path": "README.md"
      }
    ],
    "note": "Course project · Notebooks discuss overfitting and dataset limitations."
  },
  {
    "id": "sentiment",
    "title": "From reviews to sentiment",
    "category": "NLP",
    "summary": "Compare text representations for positive and negative product-review classification.",
    "approach": "Clean and tokenize reviews with NLTK, extract unigram and bigram count or TF-IDF features, and evaluate logistic regression and Naive Bayes.",
    "contribution": "Coursework notebooks show preprocessing and model comparisons; individual ownership is not explicitly recorded.",
    "tools": [
      "Python",
      "NLTK",
      "scikit-learn"
    ],
    "repo": "AY22-y2",
    "branch": "main",
    "links": [
      {
        "label": "Modelling notebook",
        "path": "NLP - modelling.ipynb"
      },
      {
        "label": "Preprocessing",
        "path": "NLP - preprocessing.ipynb"
      },
      {
        "label": "Project README",
        "path": "README.md"
      }
    ],
    "note": "Course project · Notebook discusses class imbalance and per-class performance."
  },
  {
    "id": "adv",
    "title": "HDB resale explorer",
    "category": "Data visualization",
    "repo": "adv",
    "branch": "main",
    "summary": "Explore HDB resale prices, floor area, and transaction counts through linked D3 charts.",
    "approach": "The task1 dashboard loads a resale CSV, groups records by town and time, and updates line, bar, stacked, and pie charts from shared controls. It demonstrates data aggregation and interactive visual exploration.",
    "contribution": "Coursework repository containing tutor examples as well as assignment code. Individual contribution is not documented.",
    "tools": [
      "JavaScript",
      "D3.js",
      "HTML/CSS"
    ],
    "links": [
      {
        "label": "Dashboard source",
        "path": "task1/index.html"
      },
      {
        "label": "Data & filter logic",
        "path": "task1/js/main.js"
      },
      {
        "label": "Project README",
        "path": "README.md"
      }
    ],
    "note": "Coursework assignment; no live demo or performance results were independently verified."
  },
  {
    "id": "aa",
    "title": "HDB dashboard experiments",
    "category": "Data visualization",
    "repo": "aa",
    "branch": "main",
    "summary": "Compare HDB resale trends and flat categories in a D3 dashboard prototype.",
    "approach": "JavaScript groups CSV records by year, town, flat type, and flat model for line, bar, pie, and stacked chart experiments. Metric and time controls illustrate chart updates.",
    "contribution": "Repository-level prototype; individual ownership is not documented. Several chart comments reference tutorial material.",
    "tools": [
      "JavaScript",
      "D3.js",
      "HTML/CSS"
    ],
    "links": [
      {
        "label": "Dashboard source",
        "path": "index.html"
      },
      {
        "label": "Aggregation code",
        "path": "js/main.js"
      },
      {
        "label": "Project README",
        "path": "README.md"
      }
    ],
    "note": "The sample CSV is stored at the repository root; code requests data/small.csv. The README explains the local path setup. Filter logic includes inconsistencies. No working-demo or model-training claim is made."
  }
];
export const repositoryUrl = project => `${github}/${project.repo}`;
export const sourceUrl = (project, path) => `${repositoryUrl(project)}/blob/${project.branch}/${path.split('/').map(encodeURIComponent).join('/')}`;
export const otherProjects = [{
  title: 'Kiwi task manager',
  repo: 'ip',
  description: 'Java / JavaFX task manager with command parsing, local persistence, and tests. Parser source credits zow1e.'
}, {
  title: 'GradeBookPlus',
  repo: 'tp',
  description: 'Team Java desktop application for student assessment records. Individual contribution needs confirmation.'
}, {
  title: 'Overflowz',
  repo: 'overflowz',
  description: 'Flask website with a household carbon-footprint calculator. Individual contribution needs confirmation.'
}];
