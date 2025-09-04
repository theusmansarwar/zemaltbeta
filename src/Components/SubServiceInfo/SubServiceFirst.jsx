import React from "react";
import "./SubServiceFirst.css";

const SubServiceFirst = ({ data }) => {
  return (
    <div className="sub-service-first">
      {data.map((item, index) =>
        item.type === "heading" ? (
          <h2 key={index}>{item.text}</h2>
        ) : (
          <div className="content-box" key={index}>
            <strong>{item.number}</strong>
            <p>
              <span>{item.title}</span>
              {item.description}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default SubServiceFirst;
