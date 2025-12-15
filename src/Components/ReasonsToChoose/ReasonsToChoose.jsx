import React from "react";
import "./ReasonsToChoose.css";

const ReasonsToChoose = ({ data }) => {
  return (
    <section className="reasons" id="why-choose-zemalt">
      {/* Dynamic Heading */}
      <h2 className="reasons-title">{data.heading}</h2>

      {/* Dynamic Steps */}
      <div className="steps-container">
        {data.steps.map((step, index) => (
          <div className="content-box" key={index}>
            <strong className="step-number">
              {(index + 1).toString().padStart(2, "0")}
            </strong>

            <div>
              <h3>{step.question}</h3>
              <p
                className="dangerously-set-data"
                dangerouslySetInnerHTML={{ __html: step.answer }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsToChoose;
