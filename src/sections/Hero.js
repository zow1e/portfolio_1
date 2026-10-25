import React from 'react';
import { profile } from '../data/profile';

export default function Hero() {
  return (
    <header id="home">
      <div className="container">
        <div className="hero">
          <div>
            <p className="eyebrow">DATA · MACHINE LEARNING · AI</p>
            <h1>Hi, I’m Zowie<span className="name-dot">.</span><br /><span className="hero-accent">Curious by nature.</span></h1>
            <p className="intro">Computer Science undergraduate at NUS, pursuing opportunities in <strong>data science, machine learning, and AI engineering.</strong></p>
            <div className="hero-actions">
              <a className="button primary" href="#portfolio">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="text-link" href={profile.github}>GitHub ↗</a>
            </div>
          </div>
          <aside className="desktop-note" aria-label="My approach">
            <div className="window-bar" aria-hidden="true"><span /><span /><span /></div>
            <p>Good questions.<br />Thoughtful experiments.<br /><em>Useful applications.</em></p>
          </aside>
        </div>
      </div>
    </header>
  );
}
