import React from "react";
import "./SubServiceFirst.css";
import { baseUrl } from "@/config/Config";
const SubServiceFirst = ({ data }) => {
  return (
    <div className="sub-service-first">
      <div className="left">
        <img src={baseUrl + data.image} alt={data.title} />
      </div>
      <div className="right">
        <h2 className="sub-service-title">{data.title}</h2>
        <div className="dangerously-set-data" dangerouslySetInnerHTML={{ __html: data?.description }} />
      </div>
    </div>
  );
};

export default SubServiceFirst;
