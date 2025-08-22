import React from "react";
import "./ServicePageFeatured.css";
const DesigningCardFeatured = ({ data }) => {
  return (
    <div className="DesigningCardFeatured">
      <h1>
        {data.title} <span>{data.spanTitle}</span>
      </h1>
      <p>{data.description}</p>
    </div>
  );
};

export default DesigningCardFeatured;
