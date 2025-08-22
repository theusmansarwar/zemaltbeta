import React from "react";
import "./WhyService.css";
import "../BlogSection/BlogSection.css";

const WhyService = ({ data }) => {
  return (
    <div className="WhyDesign">
      <div className="left">
        <h3>{data.title}</h3>

        {data.description.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>

      <img src={data.image} alt="Why Good Design" />
    </div>
  );
};

export default WhyService;
