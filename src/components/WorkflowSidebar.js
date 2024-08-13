import React from "react";
import { useSelector } from "react-redux";

const WorkflowSidebar = () => {
  const workflowSteps = useSelector(
    (state) => state.data.projectData.workflow_steps
  );

  return (
    <div className="workflow-sidebar">
      <ul>
        {workflowSteps?.map((step, index) => (
          <li key={index}>{step.name_title}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkflowSidebar;
