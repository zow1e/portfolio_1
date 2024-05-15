// import React, { Component, useMemo } from 'react';
// import Navbar from './Navbar.js';
// import ContactUs from './ContactUs';
// import Footer from './Footer';
// import resumeData from '../resumeData';
// import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
// import { Margin } from '@mui/icons-material';

// // Dummy data for the table
// const data = [
//   {
//     name: {
//       firstName: 'John',
//       lastName: 'Doe',
//     },
//     address: '261 Erdman Ford',
//     city: 'East Daphne',
//     state: 'Kentucky',
//   },
//   {
//     name: {
//       firstName: 'Jane',
//       lastName: 'Doe',
//     },
//     address: '769 Dominic Grove',
//     city: 'Columbus',
//     state: 'Ohio',
//   },
//   {
//     name: {
//       firstName: 'Joe',
//       lastName: 'Doe',
//     },
//     address: '566 Brakus Inlet',
//     city: 'South Linda',
//     state: 'West Virginia',
//   },
//   {
//     name: {
//       firstName: 'Kevin',
//       lastName: 'Vandy',
//     },
//     address: '722 Emie Stream',
//     city: 'Lincoln',
//     state: 'Nebraska',
//   },
//   {
//     name: {
//       firstName: 'Joshua',
//       lastName: 'Rolluffs',
//     },
//     address: '32188 Larkin Turnpike',
//     city: 'Charleston',
//     state: 'South Carolina',
//   },
// ];

// const Example = () => {
//   const columns = useMemo(
//     () => [
//       {
//         accessorKey: 'name.firstName',
//         header: 'First Name',
//         size: 150,
//       },
//       {
//         accessorKey: 'name.lastName',
//         header: 'Last Name',
//         size: 150,
//       },
//       {
//         accessorKey: 'address',
//         header: 'Address',
//         size: 200,
//       },
//       {
//         accessorKey: 'city',
//         header: 'City',
//         size: 150,
//       },
//       {
//         accessorKey: 'state',
//         header: 'State',
//         size: 150,
//       },
//     ],
//     [],
//   );

//   const table = useMaterialReactTable({
//     columns,
//     data,
//     enableColumnActions: false,
//     enableSorting: false,
//     enableTopToolbar: false,
//     layoutMode: "grid",
//     enablePagination: false, // Disable pagination
//     muiTableHeadCellProps: {
//       sx: {
//         fontWeight: 'normal',
//         fontSize: '15px',
//         paddingTop: '20px',
//         paddingBottom: '20px',
//       },
//     },
//     muiTableBodyCellProps: {
//       sx: {
//         fontWeight: 'normal',
//         fontSize: '15px',
//         padding: '20px',
//       },
//     },
//   });


//   return <MaterialReactTable table={table} />;
// };

// export default class Moreprojs extends Component {
//   render() {
//     let Data = resumeData;
//     let projs = Data.MLprojects.reverse();

//     return (
//       <section id="moreprojs">
//         <Navbar />

//         <div className="row" style={{marginBottom: 5 + 'em'}}>
//           <div className="twelve columns collapsed">
//             <h1>Machine Learning Projects</h1>
//             <h2>from newest to oldest</h2>
//             {/* Render the table with the dummy data */}
//             <Example />
//           </div>
//         </div>

//         <ContactUs resumeData={resumeData} />
//         <Footer resumeData={resumeData} />
//       </section>
//     );
//   }
// }




// import React, { Component, useMemo } from "react";
// import { Link } from "react-router-dom";
// import resumeData from "../resumeData";
// import {
//   MaterialReactTable,
//   useMaterialReactTable,
// } from "material-react-table";
// import { Margin } from "@mui/icons-material";

// // Dummy data for the table
// const data = [
//   {
//     name: {
//       firstName: "John",
//       lastName: "Doe",
//     },
//     address: "261 Erdman Ford",
//     city: "East Daphne",
//     state: "Kentucky",
//   },
//   {
//     name: {
//       firstName: "Jane",
//       lastName: "Doe",
//     },
//     address: "769 Dominic Grove",
//     city: "Columbus",
//     state: "Ohio",
//   },
//   {
//     name: {
//       firstName: "Joe",
//       lastName: "Doe",
//     },
//     address: "566 Brakus Inlet",
//     city: "South Linda",
//     state: "West Virginia",
//   },
//   {
//     name: {
//       firstName: "Kevin",
//       lastName: "Vandy",
//     },
//     address: "722 Emie Stream",
//     city: "Lincoln",
//     state: "Nebraska",
//   },
//   {
//     name: {
//       firstName: "Joshua",
//       lastName: "Rolluffs",
//     },
//     address: "32188 Larkin Turnpike",
//     city: "Charleston",
//     state: "South Carolina",
//   },
// ];

// const Example = () => {
//   const columns = useMemo(
//     () => [
//       {
//         accessorKey: "name.firstName",
//         header: "First Name",
//         size: 150,
//       },
//       {
//         accessorKey: "name.lastName",
//         header: "Last Name",
//         size: 150,
//       },
//       {
//         accessorKey: "address",
//         header: "Address",
//         size: 200,
//       },
//       {
//         accessorKey: "city",
//         header: "City",
//         size: 150,
//       },
//       {
//         accessorKey: "state",
//         header: "State",
//         size: 150,
//       },
//     ],
//     []
//   );

//   const [filteredData, setFilteredData] = React.useState(data);

//   const table = useMaterialReactTable({
//     columns,
//     data,
//     enableColumnActions: false,
//     enableSorting: false,
//     enableTopToolbar: false,
//     layoutMode: "grid",
//     enablePagination: false, // Disable pagination
//     muiTableHeadCellProps: {
//       sx: {
//         fontFamily: 'opensans-bold',
//         fontWeight: "normal",
//         fontSize: "17px",
//         paddingLeft: '30px',
//         paddingY: "20px",
//       },
//     },
//     muiTableBodyCellProps: {
//       sx: {
//         fontWeight: "normal",
//         fontSize: "15px",
//         padding: "20px",
//         paddingLeft: '30px',
//       },
//     },
//   });


//   const handleMachineLearningSlider = (event) => {
//     if (event.target.checked) {
//       setFilteredData(data.filter((item) => item.name.lastName === "Doe"));
//     } else {
//       setFilteredData(data);
//     }
//   };

// };

// export default class Porfolio extends Component {
//   render() {
//     let resumeData = this.props.resumeData;
//     return (
//       <section id="portfolio">
//         <div className="row">
//           <div className="twelve columns collapsed">
//             <h1>Projects</h1>
//             {/* <div
//               id="portfolio-wrapper"
//               className="bgrid-quarters s-bgrid-thirds cf"
//             >
//               {resumeData.portfolio &&
//                 resumeData.portfolio.map((item) => {
//                   return (
//                     // (item.id % 2 === 0) && (
//                     //    <div className="portfolio-row">

//                     <div className="columns portfolio-item">
//                       <div className="item-wrap">
//                         <Link to="/zowie-portfolio/moreprojects">
//                           <a href="#modal-01">
//                             <img
//                               src={process.env.PUBLIC_URL + item.imgurl}
//                               alt="project pictures"
//                               className="item-img"
//                             />
//                             <div className="overlay">
//                               <div className="portfolio-item-meta">
//                                 <h5>{item.name}</h5>
//                                 <p>{item.description}</p>
//                               </div>
//                             </div>
//                           </a>
//                         </Link>
//                       </div>
//                       <button class="learn-more">
//                         <span class="circle" aria-hidden="true">
//                           <span class="icon arrow"></span>
//                         </span>
//                         <span class="button-text">Learn More</span>
//                       </button>
//                     </div>
//                     //   </div>
//                     // )
//                   );
//                 })}
//             </div> */}
//           </div>
//         </div>

        

//         <div className="rowtable">
//           <div className="five columns">
//             <div className="sliding">
//               <label className="switch">
//                 <input type="checkbox" />
//                 <span className="slider"></span>
//               </label>
//               <p className="slider-label">Machine Learning</p>
//             </div>
//             <div className="sliding">
//               <label className="switch">
//                 <input type="checkbox" />
//                 <span className="slider"></span>
//               </label>
//               <p className="slider-label">Deep Learning</p>
//             </div>
//             <div className="sliding">
//               <label className="switch">
//                 <input type="checkbox" />
//                 <span className="slider"></span>
//               </label>
//               <p className="slider-label">Natural Language Processing</p>
//             </div>
//             <div className="sliding">
//               <label className="switch">
//                 <input type="checkbox" />
//                 <span className="slider"></span>
//               </label>
//               <p className="slider-label">Computer Vision</p>
//             </div>
//             <div className="sliding">
//               <label className="switch">
//                 <input type="checkbox" />
//                 <span className="slider"></span>
//               </label>
//               <p className="slider-label">Reinforcement Learning</p>
//             </div>
//           </div>
//           <div className="seven columns">
//             <Example />
//           </div>
//         </div>


//       </section>
//     );
//   }
// }
