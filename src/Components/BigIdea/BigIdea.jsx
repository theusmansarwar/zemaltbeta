import React from "react";
import "./BigIdea.css";
import { baseUrl } from "@/config/Config";
const BigIdea = ({ data }) => {
  return (
    <div className="BigIdea">
      <h2>{data.heading}</h2>
      <img className="big-idea-img" src={baseUrl + data.image} />
    </div>
  );
};

export default BigIdea;
