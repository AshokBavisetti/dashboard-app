import React from "react";
import Header from "./Header";
import DataTable from "./DataTable";
import WorkflowSidebar from "./WorkflowSidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="content-area">
        <DataTable />
        <WorkflowSidebar />
      </div>
    </div>
  );
};

export default Dashboard;
