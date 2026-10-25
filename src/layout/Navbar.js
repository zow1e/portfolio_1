import React, { useEffect, useState } from 'react';

const sections = ['resume', 'portfolio', 'about', 'contact'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(() => window.location.hash.slice(1));

  useEffect(() => {
    let frame;
    const updateSection = () => {
      const navBottom = document.querySelector('.site-nav')?.getBoundingClientRect().bottom || 0;
      const readingLine = navBottom + Math.min(180, window.innerHeight * .2);
      let current = '';
      for (const id of sections) {
        const section = document.getElementById(id);
        const card = section?.closest('.section-card');
        if (card && !card.open) continue;
        const target = card || section;
        if (target && target.getBoundingClientRect().top <= readingLine) current = id;
      }
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) current = 'contact';
      setActiveSection(current);
    };
    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateSection);
    };
    const followHash = () => setActiveSection(window.location.hash.slice(1));
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('hashchange', followHash);
    document.addEventListener('toggle', scheduleUpdate, true);
    scheduleUpdate();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('hashchange', followHash);
      document.removeEventListener('toggle', scheduleUpdate, true);
    };
  }, []);

  const sectionLink = id => ({
    href: `#${id}`,
    'aria-current': activeSection === id ? 'location' : undefined,
    onClick: event => {
      if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) setActiveSection(id);
    },
  });

  return (
    <nav className="navigation" aria-label="Main navigation">
      <a className="wordmark" href="#home" aria-label="Zowie Ong, home">zo<span>.</span></a>
      <div className="nav-links">
        <a {...sectionLink('resume')}>Experience</a>
        <a {...sectionLink('portfolio')}>Projects</a>
        <a {...sectionLink('about')}>About</a>
        <a {...sectionLink('contact')}>Contact <span aria-hidden="true">↗</span></a>
      </div>
    </nav>
  );
}
