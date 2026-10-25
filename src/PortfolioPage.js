import React, { useEffect } from 'react';
import Hero from './sections/Hero';
import Navbar from './layout/Navbar';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './layout/Footer';
import SectionCard from './components/SectionCard';

export default function PortfolioPage({ archive = false }) {
  useEffect(() => {
    let scrollFrame;
    const openCard = hash => {
      if (!['#resume', '#portfolio', '#about'].includes(hash)) return false;
      const card = document.getElementById(hash.slice(1))?.closest('.section-card');
      if (!card) return false;
      card.open = true;
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => card.scrollIntoView?.({ block: 'start' }));
      return true;
    };
    const followSection = event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest?.('a[href]');
      if (!link || link.target || link.hasAttribute('download')) return;
      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname !== window.location.pathname || destination.search !== window.location.search) return;
      if (openCard(destination.hash)) {
        event.preventDefault();
        if (window.location.hash !== destination.hash) window.location.hash = destination.hash;
      }
    };
    const followHash = () => openCard(window.location.hash);
    document.addEventListener('click', followSection);
    window.addEventListener('hashchange', followHash);
    followHash();
    return () => {
      cancelAnimationFrame(scrollFrame);
      document.removeEventListener('click', followSection);
      window.removeEventListener('hashchange', followHash);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="site-nav"><div className="container"><Navbar /></div></div>
      <Hero />
      <main id="main" tabIndex="-1">
        <div className="section-cards container">
          <SectionCard sectionId="resume" label="Experience" number="01">
            <Experience />
          </SectionCard>
          <SectionCard sectionId="portfolio" label="Projects" number="02" defaultOpen={archive}>
            <Projects archive={archive} />
          </SectionCard>
          <SectionCard sectionId="about" label="About" number="03">
            <About />
          </SectionCard>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
