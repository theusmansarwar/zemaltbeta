import React from "react";
import "./ServicePageFeatured.css";
const ServicePageFeatured = ({ data }) => {
  return (
    <div className="servicepage-featured">
      <h1>
        {data.title} <span>{data.spanTitle}</span>
      </h1>
      <p className="featured-desc">{data.description}</p>
    </div>
  );
};

export default ServicePageFeatured;
