import React from 'react';
import { profile } from '../data/profile';

export default function Contact() {
  return (
    <section id="contact" className="contact-section section" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2 id="contact-title">Let’s connect<span>.</span></h2>
          <p>Have an opportunity in data science, ML, or AI engineering? I’d love to hear from you.</p>
        </div>
        <div className="contact-links">
          <a className="email-link" href={`mailto:${profile.email}`}>{profile.email} ↗</a>
          <div><a href={profile.linkedin}>LinkedIn ↗</a><a href={profile.github}>GitHub ↗</a></div>
        </div>
      </div>
    </section>
  );
}
