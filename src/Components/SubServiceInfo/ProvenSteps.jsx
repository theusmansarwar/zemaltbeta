import React from "react";
import "./ProvenSteps.css";

const ProvenSteps = ({ data }) => {
  if (!data?.published) return null;

  return (
    <section className="proven-steps">
      {/* Section Title */}
      {data?.title && <h2 className="proven-title">{data.title}</h2>}

      <div className="steps-container">
        {data?.steps?.map((step, index) => (
          <div className="content-box" key={index}>
            <strong className="step-number">
              {(index + 1).toString().padStart(2, "0")}
            </strong>
            <p className="step-text">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProvenSteps;
