import React, { Component, useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";

// Dummy data for the table
const initialData = [
  {
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Joe",
      lastName: "Doe",
    },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Kevin",
      lastName: "Vandy",
    },
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
];

const Example = () => {
  const [showMachineLearning, setShowMachineLearning] = useState(false);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address",
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 150,
      },
    ],
    []
  );

  const filteredData = useMemo(() => {
    if (showMachineLearning) {
      return initialData.filter((row) => row.name.lastName === "Doe");
    }
    return initialData;
  }, [showMachineLearning]);

  const table = useMaterialReactTable({
    columns,
    data: filteredData,
    enableColumnActions: false,
    enableSorting: false,
    enableTopToolbar: false,
    layoutMode: "grid",
    enablePagination: false,
    muiTableHeadCellProps: {
      sx: {
        fontFamily: "opensans-bold",
        fontWeight: "normal",
        fontSize: "17px",
        paddingLeft: "30px",
        paddingY: "20px",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        fontWeight: "normal",
        fontSize: "15px",
        padding: "20px",
        paddingLeft: "30px",
      },
    },
  });

  return (
    <div className="rowtable">
      <div className="five columns">
        <div className="sliding">
          <label className="switch">
            <input
              type="checkbox"
              checked={showMachineLearning}
              onChange={() => setShowMachineLearning(!showMachineLearning)}
            />
            <span className="slider"></span>
          </label>
          <p className="slider-label">Machine Learning</p>
        </div>
        <div className="sliding">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
              <p className="slider-label">Deep Learning</p>
            </div>
            <div className="sliding">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
              <p className="slider-label">Natural Language Processing</p>
            </div>
            <div className="sliding">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
              <p className="slider-label">Computer Vision</p>
            </div>
            <div className="sliding">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
              <p className="slider-label">Reinforcement Learning</p>
            </div>
      </div>
      <div className="seven columns">
        <MaterialReactTable table={table} />
      </div>
    </div>
  );
};

export default class Porfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Projects</h1>
            
          </div>
        </div>
        <Example />
      </section>
    );
  }
}