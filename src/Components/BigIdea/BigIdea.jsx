import React from "react";
import "./BigIdea.css";
const BigIdea = ({ data }) => {
  return (
    <div className="BigIdea">
      <h2>{data.heading}</h2>
      <img src={data.image} />
    </div>
  );
};

export default BigIdea;
