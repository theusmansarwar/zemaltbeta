import React from "react";
import "./JobDescription.css";

const JobDescription = ({ description }) => {
  if (!description) return null;

  return (
    <div className="job-description">
      <h2>Job Description</h2>
      <div
        className="job-desc-content dangerously-set-data"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default JobDescription;
