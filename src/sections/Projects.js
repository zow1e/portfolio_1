import React, { useState } from 'react';
import { projects, otherProjects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectFilters, { filters } from '../components/ProjectFilters';
import { profile } from '../data/profile';

export default function Projects({ archive = false }) {
  const [filter, setFilter] = useState('All work');
  const active = filters.find(item => item.label === filter);
  const visible = active.categories
    ? projects.filter(project => active.categories.includes(project.category))
    : projects;

  return (
    <section id="portfolio" className="projects-section section" aria-labelledby="projects-title">
      <div className="container">
        <p className="eyebrow">SELECTED WORK</p>
        <h2 id="projects-title">From questions to applications<span>.</span></h2>
        <ProjectFilters value={filter} onChange={setFilter} />
        <p className="result-count" role="status" aria-live="polite">{visible.length} {visible.length === 1 ? 'project' : 'projects'} shown</p>
        <div className="project-grid">
          {visible.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
        <details className="other-work" open={archive || undefined}>
          <summary>Other software projects</summary>
          <div className="archive-grid">
            {otherProjects.map(project => (
              <article key={project.repo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={`${profile.github}/${project.repo}`}>Repository ↗</a>
              </article>
            ))}
          </div>
        </details>
        <a className="all-repos" href={`${profile.github}?tab=repositories`}>All repositories on GitHub ↗</a>
      </div>
    </section>
  );
}
