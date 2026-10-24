// Experience and education transcribed from Zowie_resumeDS.pdf (September 2026).
// Concise summaries omit performance claims; do not add facts without a source.
export const profile = {
  name: 'Zowie Ong',
  email: 'zowieyx@gmail.com',
  github: 'https://github.com/zow1e',
  linkedin: 'https://www.linkedin.com/in/zowieong/',
};

export const experience = [
  {
    id: 'stb',
    skills: ['Playwright', 'Scrapy', 'LangChain', 'TinyFish', 'OpenAI/Claude APIs', 'AWS S3', 'SageMaker'],
    title: 'Data Science Intern',
    employer: 'Singapore Tourism Board (STB)',
    dates: 'May 2026 – Aug 2026',
    start: '2026-05',
    end: '2026-08',
    highlights: [
      'Built an LLM-assisted scraping pipeline for 10+ dynamic websites using Playwright, Scrapy, LangChain, TinyFish, and OpenAI/Claude APIs.',
      'Used AWS S3 and SageMaker for storage, experimentation, and processing of 170,000 records.',
    ],
  },
  {
    id: 'zpower',
    skills: ['Predictive modeling', 'Clustering', 'Anomaly detection', 'Power BI'],
    title: 'Data Analyst Intern',
    employer: 'Z-Power Automation',
    dates: 'May 2025 – July 2025',
    start: '2025-05',
    end: '2025-07',
    highlights: [
      'Built three predictive models and performed clustering and anomaly detection on three industrial datasets.',
      'Recommended automation scripts and Power BI dashboards, supporting migration to centralized databases.',
    ],
  },
  {
    id: 'dsta',
    skills: ['Machine learning', 'Sentiment classification', 'Topic classification', 'Data pipelines'],
    title: 'Data Analyst Intern',
    // Employer spelling retained from the supplied résumé; confirm preferred public name.
    employer: 'Defense Science Technology Agency (DSTA)',
    dates: 'Sep 2023 – Feb 2024',
    start: '2023-09',
    end: '2024-02',
    highlights: [
      'Designed machine learning models to automate test-grade prediction.',
      'Developed sentiment and topic classification pipelines for 500 records and contributed to structured and unstructured data pipelines.',
    ],
  },
];

export const education = [
  {
    institution: 'National University of Singapore',
    qualification: 'Bachelor of Computing in Computer Science',
    dates: 'Aug 2024 – May 2027',
    detail: 'Minor in Data Engineering · Focus areas in Artificial Intelligence and Database Systems',
  },
  {
    institution: 'Nanyang Polytechnic',
    qualification: 'Diploma in Applied Artificial Intelligence and Analytics',
    dates: 'Apr 2021 – May 2024',
    detail: 'Specialisation in Big Data',
  },
];
