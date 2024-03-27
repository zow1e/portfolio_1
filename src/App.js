import React, { Component } from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
// import Header from './components/Header';
// import About from './components/About';
// import Resume from './components/Resume';
// import Portfolio from './components/Portfolio';
// import Testimonials from  './components/Testimonials';
// import ContactUs from './components/ContactUs';
// import Footer from './components/Footer';
// import resumeData from './resumeData';
import './App.css';
import Home from './components/Home';
import Moreprojs from './components/Moreprojs';



export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/zowie-portfolio' element={<Home />} />
          <Route path="/zowie-portfolio/moreprojects" element={<Moreprojs />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}




// export default Home;