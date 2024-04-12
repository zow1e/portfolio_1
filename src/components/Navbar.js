import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {

    return (
      <React.Fragment>
      

         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
            <Link to="/zowie-portfolio"><li className="current"><a className="smoothscroll" href="#home">Home</a></li></Link>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>


      </React.Fragment>
    );
  }
}