import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const projectData = useSelector((state) => state.data.projectData);

  return (
    <div className="header">
      <div className="header-item">
        PROJECT NAME: {projectData.project_name}
      </div>
      <div className="header-item">
        OUTPUT DATASET NAME: {projectData.output_name}
      </div>
      <div className="header-item">
        LAST RUN: {projectData.last_run || "Not Available"}
      </div>
      <div className="header-item">Rows: {projectData.row_count}</div>
    </div>
  );
};

export default Header;
