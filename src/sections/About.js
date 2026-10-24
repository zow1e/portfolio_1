import React from 'react';
import { education } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="about-section section" aria-labelledby="about-title">
      <div className="container about-grid">
        <div>
          <p className="eyebrow">ABOUT</p>
          <h2 id="about-title">Always learning<span>.</span></h2>
          <p>I’m studying Computer Science at NUS with a minor in Data Engineering and focus areas in Artificial Intelligence and Database Systems.</p>
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
