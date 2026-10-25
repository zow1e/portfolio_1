import React from 'react';
import Hero from './sections/Hero';
import Navbar from './layout/Navbar';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './layout/Footer';

export default function PortfolioPage({ archive = false }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="site-nav"><div className="container"><Navbar /></div></div>
      <Hero />
      <main id="main" tabIndex="-1">
        <div className="work-about-layout">
          <div className="work-content">
            <Experience />
            <Projects archive={archive} />
          </div>
          <About />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
