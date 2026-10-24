import React from 'react';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './layout/Footer';

export default function PortfolioPage({ archive = false }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Hero />
      <main id="main" tabIndex="-1">
        <Experience />
        <Projects archive={archive} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
