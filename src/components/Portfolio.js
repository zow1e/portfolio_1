import React, { Component, useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";

const Example = ({ portfolioData }) => {
  const [showMachineLearning, setShowMachineLearning] = useState(false);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        size: 200,
      },
      {
        accessorKey: "description",
        header: "Description",
        size: 300,
      },
      {
        accessorKey: "imgurl",
        header: "Image",
        size: 200,
        Cell: ({ cell }) => (
          <img src={cell.getValue()} alt={cell.row.original.name} style={{ maxWidth: "100px" }} />
        ),
      },
      {
        accessorKey: "skill",
        header: "Skill",
        size: 200,
      },
    ],
    []
  );

  const filteredData = useMemo(() => {
    if (showMachineLearning) {
      return portfolioData.filter((project) =>
        project.skill.toLowerCase().includes("machine learning")
      );
    }
    return portfolioData;
  }, [showMachineLearning, portfolioData]);

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
        paddingY: "16px",
        lineHeight: "24px",
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

export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Projects</h1>
          </div>
        </div>
        <Example portfolioData={resumeData.portfolioData} />
      </section>
    );
  }
}