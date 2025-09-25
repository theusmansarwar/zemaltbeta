import React from "react";
import "./ProvenSteps.css";

const ProvenSteps = ({ data }) => {
  return (
    <div className="proven-steps">
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

export default ProvenSteps;
