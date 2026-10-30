import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioPage from './PortfolioPage';
import './styles/portfolio.css';

export default function App() {
  const publicPath = new URL(process.env.PUBLIC_URL || '/', window.location.origin).pathname.replace(/\/$/, '');
  const insidePublicPath = publicPath && (window.location.pathname === publicPath || window.location.pathname.startsWith(`${publicPath}/`));
  // Production uses the Pages base. Development also keeps localhost:3000/ working.
  const basename = process.env.NODE_ENV === 'production' || insidePublicPath ? publicPath || '/' : '/';
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/zowie-portfolio" element={<PortfolioPage />} />
        <Route path="/zowie-portfolio/moreprojects" element={<PortfolioPage archive />} />
        <Route path="/moreprojects" element={<PortfolioPage archive />} />
        <Route path="*" element={<main className="not-found"><h1>Page not found</h1><a href={process.env.PUBLIC_URL + '/'}>Back to the portfolio</a></main>} />
      </Routes>
    </BrowserRouter>
  );
}
