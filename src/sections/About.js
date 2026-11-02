import React from 'react';
import { awards, certifications, education } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="about-section section" aria-labelledby="about-title">
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
        <div className="about-recognition" aria-labelledby="awards-title">
          <h3 id="awards-title">Awards</h3>
          <ul>
            {awards.map(award => (
              <li key={award.title}>
                {award.title}{award.year && <> <span className="award-year">({award.year})</span></>}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-recognition" aria-labelledby="certifications-title">
          <h3 id="certifications-title">Certifications</h3>
          <ul>
            {certifications.map(title => <li key={title}>{title}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
