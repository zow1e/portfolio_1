import React from 'react';

export default function Navbar() {
  return (
    <nav className="navigation" aria-label="Main navigation">
      <a className="wordmark" href="#home" aria-label="Zowie Ong, home">zo<span>.</span></a>
      <div className="nav-links">
        <a href="#resume">Experience</a>
        <a href="#portfolio">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact <span aria-hidden="true">↗</span></a>
      </div>
    </nav>
  );
}
