import React from "react";
import "./WhyService.css";
import "../BlogSection/BlogSection.css";
import { baseUrl } from "@/config/Config";

const WhyService = ({ data }) => {
  return (
    <div className="WhyDesign">
      <div className="left">
        <h3>{data.title}</h3>

        {data.description.map((para, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: para }} />
        ))}

      </div>

      <img src={baseUrl + data.image} alt="Why Good Design" />
    </div>
  );
};

export default WhyService;
