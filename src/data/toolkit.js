// The supplied resume is authoritative for its named technologies, including
// internship, project and certification entries. No external verification gate.
// Existing project/course entries and their source links are retained.
// Inclusion describes resume evidence or coverage, not proficiency.
const courseSources = {
  database: 'https://www.comp.nus.edu.sg/~adi-yoga/database/db_lecture/',
  algorithms: 'https://www.comp.nus.edu.sg/~stevenha/cs2040s.html',
  organisation: 'https://www.comp.nus.edu.sg/~adi-yoga/CS2100/notes/',
  software: 'https://nus-cs2103-ay2526-s2.github.io/website/admin/tools.html',
  systems: 'https://blog.nus.edu.sg/cs2106/about/',
  design: 'https://www.comp.nus.edu.sg/cug/soc-22-23/',
};
const airlineNotebook = 'https://github.com/zow1e/Big-data-project/blob/main/zowie_EDA.ipynb';

// Relevance order within each group: data science, ML, data engineering, other.
export const toolkit = [
  {
    label: 'Languages',
    items: [
      { label: 'Python', href: airlineNotebook, evidence: 'Project use: airline fare-analysis notebook' },
      { label: 'SQL', href: courseSources.database, evidence: 'CS2102 Database Systems: course coverage of queries, joins and aggregation' },
      { label: 'JavaScript' },
      { label: 'TypeScript' },
      { label: 'Java', href: courseSources.algorithms, evidence: 'CS2040S Data Structures and Algorithms: course programming language' },
      { label: 'C', href: courseSources.organisation, evidence: 'CS2100 Computer Organisation: course coverage of C programming' },
      { label: 'HTML' },
      { label: 'CSS' },
    ],
  },
  {
    label: 'Libraries & frameworks',
    items: [
      { label: 'pandas', href: airlineNotebook, evidence: 'Project use: pandas import in the airline fare-analysis notebook' },
      { label: 'Seaborn' },
      { label: 'Matplotlib', href: airlineNotebook, evidence: 'Project use: matplotlib.pyplot import in the airline fare-analysis notebook' },
      { label: 'D3.js' },
      { label: 'scikit-learn' },
      { label: 'PyCaret' },
      { label: 'PyTorch' },
      { label: 'TorchVision' },
      { label: 'TensorFlow' },
      { label: 'Keras' },
      { label: 'Albumentations' },
      { label: 'OpenCV' },
      { label: 'NLTK' },
      { label: 'LangChain' },
      { label: 'Apache Spark' },
      { label: 'Scrapy' },
      { label: 'Zod' },
      { label: 'Flask' },
      { label: 'React.js' },
    ],
  },
  {
    label: 'Tools & platforms',
    items: [
      { label: 'Power BI' },
      { label: 'Tableau' },
      { label: 'SAS Viya', evidence: 'Resume certification: Machine Learning using SAS Viya; no proficiency rating inferred' },
      { label: 'Microsoft Visual Analytics', evidence: 'Resume certification title, retained as written; no specific software product inferred' },
      { label: 'Grad-CAM', evidence: 'Explainability method explicitly named in the resume; no particular implementation library inferred' },
      { label: 'SageMaker' },
      { label: 'OpenAI/Claude APIs' },
      { label: 'AWS S3' },
      { label: 'Playwright' },
      { label: 'TinyFish' },
      { label: 'Git', href: courseSources.software, evidence: 'Listed in the resume; also required for revision control in CS2103T' },
      { label: 'GitHub', href: courseSources.software, evidence: 'Existing portfolio repositories; also required for project hosting in CS2103T' },
      { label: 'Node.js', evidence: 'JavaScript runtime explicitly listed in the resume' },
      { label: 'Linux', href: courseSources.systems, evidence: 'CS2106 Introduction to Operating Systems: course coverage using contemporary operating systems' },
      { label: 'Arduino', href: courseSources.design, evidence: 'EG1311 Design and Make: course coverage of Arduino-controlled electronics' },
      { label: 'Oracle Academy', evidence: 'Resume certification: Oracle Academy Database Design & Administration; training platform, not a claim about a specific Oracle database product' },
    ],
  },
];
