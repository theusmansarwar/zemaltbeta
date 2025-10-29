import React from "react";
import "./WhyZemalt.css";
const WhyZemalt = ({ data }) => {
  return (
    <div className="why-zemalt">
      <h2>{data.title}</h2>
      <div className="desc" dangerouslySetInnerHTML={{ __html: data?.description }} />
    </div>
  );
};

export default WhyZemalt;
