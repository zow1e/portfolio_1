import React, { Component, useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";


 // Machine Learning, Natural Language Processing, Deep Learning, Web development, Data Visualisation

const Example = ({ portfolioData }) => {
  const [showMachineLearning, setShowMachineLearning] = useState(false);
  const [showDeepLearning, setShowDeepLearning] = useState(false);
  const [showNLP, setShowNLP] = useState(false);
  const [showWebdev, setShowWebdev] = useState(false);
  const [showDatav, setShowDatav] = useState(false);

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
      // {
      //   accessorKey: "imgurl",
      //   header: "Image",
      //   size: 200,
      //   Cell: ({ cell }) => (
      //     <img src={cell.getValue()} alt={cell.row.original.name} style={{ maxWidth: "100px" }} />
      //   ),
      // },
      {
        accessorKey: "skill",
        header: "Skill",
        size: 200,
      },
      {
        accessorKey: "ghLink",
        header: "Link",
        Cell: props => <a href={props.row.original.ghLink}>GitHub</a>, 
        size: 200,
      },
    ],
    []
  );

  const filteredData = useMemo(() => {
    const filters = [
      { condition: showMachineLearning, keyword: "machine learning" },
      { condition: showDeepLearning, keyword: "deep learning" },
      { condition: showNLP, keyword: "natural language processing" },
      { condition: showWebdev, keyword: "web development" },
      { condition: showDatav, keyword: "data visualisation" },
    ];

    const hasActiveFilters = filters.some((filter) => filter.condition);

    if (hasActiveFilters) {
      return portfolioData.filter((project) =>
        filters.some(
          (filter) =>
            filter.condition && project.skill.toLowerCase().includes(filter.keyword)
        )
      );
    } else {
      return portfolioData;
    }
  }, [
    showMachineLearning,
    showDeepLearning,
    showNLP,
    showWebdev,
    showDatav,
    portfolioData,
  ]);

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
            <input
              type="checkbox"
              checked={showNLP}
              onChange={() => setShowNLP(!showNLP)}
            />
            <span className="slider"></span>
          </label>
          <p className="slider-label">Natural Language Processing</p>
        </div>

        <div className="sliding">
          <label className="switch">
            <input
              type="checkbox"
              checked={showWebdev}
              onChange={() => setShowWebdev(!showWebdev)}
            />
            <span className="slider"></span>
          </label>
          <p className="slider-label">Web Development</p>
        </div>

        <div className="sliding">
          <label className="switch">
            <input
              type="checkbox"
              checked={showDatav}
              onChange={() => setShowDatav(!showDatav)}
            />
            <span className="slider"></span>
          </label>
          <p className="slider-label">Data Visualisation</p>
        </div>
        
        <div className="sliding">
          <label className="switch">
            <input
              type="checkbox"
              checked={showDeepLearning}
              onChange={() => setShowDeepLearning(!showDeepLearning)}
            />
            <span className="slider"></span>
          </label>
          <p className="slider-label">Deep Learning</p>
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