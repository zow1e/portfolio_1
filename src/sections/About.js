import React, { useEffect, useState } from 'react';
import { education } from '../data/profile';

export default function About() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return;
    const viewport = window.matchMedia('(min-width: 1200px)');
    const update = () => setExpanded(viewport.matches);
    update();
    viewport.addEventListener('change', update);
    return () => viewport.removeEventListener('change', update);
  }, []);
  return (
    <section id="about" className="about-section section" aria-labelledby="about-title" tabIndex={expanded ? 0 : undefined}>
      <div className="container about-grid">
        <div>
          <p className="eyebrow">ABOUT</p>
          <h2 id="about-title">Always learning<span>.</span></h2>
          <p>My work spans data analysis, machine learning experiments, and the pipelines that turn raw information into useful applications.</p>
        </div>
        <div className="education">
          <h3>Education</h3>
          {education.map(item => (
            <article key={item.institution}>
              <h4>{item.institution}</h4>
              <p className="education-qualification"><strong>{item.qualification}</strong></p>
              <p className="education-dates">{item.dates}</p>
              <ul className="education-details">
                {item.detail.split(' · ').map(detail => {
                  const separator = detail.indexOf(' in ');
                  return (
                    <li key={detail}>
                      {separator === -1 ? detail : <><span className="education-label">{detail.slice(0, separator + 4)}</span><strong>{detail.slice(separator + 4)}</strong></>}
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
