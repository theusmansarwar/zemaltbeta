import React from "react";
import "./ProvenSteps.css";

const ProvenSteps = ({ data }) => {
  if (!data?.published) return null;

  return (
    <section className="proven-steps">
      {/* Section Title */}
      {data?.title && <h2 className="proven-title">{data.title}</h2>}

      <div className="steps-container">
        {data?.items?.map((step, index) => (
          <div className="content-box" key={index}>
            <strong className="step-number">
              {(index + 1).toString().padStart(2, "0")}
            </strong>

            <div> <h3>{step.question}</h3> <p className="step-text">{step.answer}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProvenSteps;
