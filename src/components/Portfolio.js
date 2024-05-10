import React, { Component } from 'react';
import {Link} from "react-router-dom";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Projects</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map(item =>{
              return(
                // (item.id % 2 === 0) && (
                //    <div className="portfolio-row">

                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                      <Link to="/zowie-portfolio/moreprojects">
                        <a href="#modal-01">
                          <img src={process.env.PUBLIC_URL + item.imgurl} alt="project pictures" className="item-img"/>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>


                        </a>
                        </Link>
                      </div>
                      <button class="learn-more">
                          <span class="circle" aria-hidden="true">
                          <span class="icon arrow"></span>
                          </span>
                          <span class="button-text">Learn More</span>
                        </button>
                    </div>
              //   </div>
              // )
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}