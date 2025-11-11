import React from "react";
import "./SubServiceFirst.css";
import { baseUrl } from "@/config/Config";

const SubServiceFirst = ({ data }) => {
  return (
    <div className="sub-service-first">
      {/* Heading Above */}
      <h2 className="sub-first-title">{data.title}</h2>

      {/* Image + Description Side by Side */}
      <div className="sub-service-content">
        <div className="left">
          <img src={baseUrl + data.image} alt={data.title} />
        </div>
        <div
          className="right dangerously-set-data"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        />
      </div>
    </div>
  );
};

export default SubServiceFirst;
