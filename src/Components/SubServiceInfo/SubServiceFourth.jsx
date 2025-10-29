import React from "react";
import "./SubServiceFourth.css";
import { baseUrl } from "@/config/Config";
const SubServiceFourth = ({ data }) => {
  return (
    <div className="sub-service-fourth">
      <h2>
        {data.title}
      </h2>
      {data.description && (
        <div
        className="description"
          dangerouslySetInnerHTML={{
            __html: data.description,
          }}
        />
      )}
      <img src={baseUrl + data.image} alt="sub service" />
    </div>
  );
};

export default SubServiceFourth;
