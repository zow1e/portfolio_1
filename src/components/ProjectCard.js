import React from 'react';
import { repositoryUrl, sourceUrl } from '../data/projects';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card" aria-labelledby={`project-${project.id}`}>
      <p className="project-category">{project.category}</p>
      <h3 id={`project-${project.id}`}>{project.title}</h3>
      <p className="project-summary">{project.summary}</p>
      {project.ownership && <p className="contribution"><strong>My part:</strong> {project.ownership}</p>}
      <ul className="project-tools" aria-label="Technologies">
        {project.tools.map(tool => <li key={tool}>{tool}</li>)}
      </ul>
      <div className="project-actions">
        <a className="repository-link" href={repositoryUrl(project)} aria-label={`${project.title} on GitHub`}>GitHub ↗</a>
        <details className="project-details">
          <summary>Approach & sources</summary>
          <div>
            <p>{project.approach}</p>
            {!project.ownership && <p>{project.contribution}</p>}
            <p>{project.note}</p>
            <ul>
              {project.links.map(link => (
                <li key={link.path}><a href={sourceUrl(project, link.path)}>{link.label} ↗</a></li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </article>
  );
}
