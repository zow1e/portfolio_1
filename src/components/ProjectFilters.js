import React from 'react';

export const filters = [
  { label: 'All work', categories: null },
  { label: 'AI & ML', categories: ['Machine learning', 'AI engineering', 'Computer vision'] },
  { label: 'Data & visualization', categories: ['Data science', 'Data visualization'] },
  { label: 'NLP', categories: ['NLP'] },
];

export default function ProjectFilters({ value, onChange }) {
  return (
    <div className="filters" role="group" aria-label="Filter projects">
      {filters.map(filter => (
        <button key={filter.label} type="button" aria-pressed={value === filter.label} onClick={() => onChange(filter.label)}>{filter.label}</button>
      ))}
    </div>
  );
}
