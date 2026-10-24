import React from 'react';
import { experience } from '../data/profile';

export default function Experience() {
  return (
    <section id="resume" className="experience-section section" aria-labelledby="experience-title">
      <div className="container">
        <p className="eyebrow">EXPERIENCE</p>
        <h2 id="experience-title">Working with data, in practice<span>.</span></h2>
        <div className="experience-list">
          {experience.map(job => (
            <article className="experience-row" key={job.id}>
              <div className="experience-meta">
                <p className="experience-dates"><time dateTime={job.start}>{job.dates.split(' – ')[0]}</time> – <time dateTime={job.end}>{job.dates.split(' – ')[1]}</time></p>
                <h3>{job.title}</h3>
                <p className="employer">{job.employer}</p>
              </div>
              <div className="experience-content">
                <ul className="experience-highlights">
                  {job.highlights.map(item => <li key={item}>{item}</li>)}
                </ul>
                <ul className="internship-skills" aria-label={`${job.employer} skills and tools`}>
                  {job.skills.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
