import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span>
                           <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>

         <div className="row skill">

            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

            
            {/* <ul>
                <li>{resumeData.skillsDescription.split("\n").join("")}</li>
            </ul> */}
            {/* <pre><h5>{resumeData.skillsDescription}</h5></pre> */}
            <div class="skill-category">
            <table>
              <tbody>
                <tr>
                  <td><h5>Programming Languages:</h5></td>
                  <td><h6>Python, SQL, HTML, CSS, Javascript; D3.js, React.js</h6></td>
                </tr>
                <tr>
                  <td><h5>Machine Learning Libraries:</h5></td>
                  <td><h6>Scikit-learn, Pandas, TensorFlow, Keras</h6></td>
                </tr>
                <tr>
                  <td><h5>Data Visualization tools:</h5></td>
                  <td><h6>Matplotlib, Seaborn, Tableau, Power BI</h6></td>
                </tr>
                <tr>
                  <td><h5>Database Management:</h5></td>
                  <td><h6>Oracle, AWS Cloud, Google cloud</h6></td>
                </tr>
                <tr>
                  <td><h5>Big Data Processing Platforms:</h5></td>
                  <td><h6>Databricks, SASViya, KNIME, RapidMiner</h6></td>
                </tr>
              </tbody>
            </table>
          </div>


            </div>
            </div>


        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {/* {item.Achievements} */}
                          <span>&bull;</span> Harnessed data analytics and machine learning with python to refine accuracy of test grade prediction and
                          uncover insights from data.</p><p>
                          <span>&bull;</span> Achieved through natural language processing and predictive analytics, 
                          improving the objectivity of test grade prediction and reducing human subjectivity.
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>




      </section>
    );
  }
}