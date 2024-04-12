import React, { Component } from 'react';
import Navbar from './Navbar.js';
import ContactUs from './ContactUs';
import Footer from './Footer';
import resumeData from '../resumeData';


export default class Moreprojs extends Component {
  render() {
    let Data = resumeData;
    let projs = Data.MLprojects.reverse()
    return (
      <section id="moreprojs">
        <Navbar />


      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Machine Learning Projects</h1>
          <h2>from newest to oldest</h2>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            projs && projs.map(item =>{
              return(
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                      <p>{item.id}</p>
                        <a href="#modal-01">
                          <img src={process.env.PUBLIC_URL + item.imgurl} alt="project pictures" className="item-img"/>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>

                        </a>
                      </div>
                    </div>
              //   </div>
              // )
              )
            })
          }
          </div>
        </div>
      </div>
      <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
  </section>
        );
  }
}