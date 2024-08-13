import React from "react";
import { useSelector } from "react-redux";

const DataTable = () => {
  const tableData = useSelector((state) => state.data.projectData.table_data);
  const tableHeaders = useSelector(
    (state) => state.data.projectData.table_headers
  );

  return (
    <div className="data-table">
      <table className="table table-striped">
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index}>{header.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
