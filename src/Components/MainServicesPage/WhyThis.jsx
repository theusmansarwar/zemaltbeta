import React from "react";
import "./WhyThis.css";
import { baseUrl } from "@/config/Config";

const WhyThis = ({ data }) => {
  return (
    <div className="why-this">
      <div className="why-this-header">
        <div className="why-header-left">
          <h2>{data?.heading}</h2>
        </div>
        <div className="why-header-right">
          <p>{data?.description}</p>
        </div>
      </div>

      <div className="why-this-steps">
        <div className="steps-left">
          <img src={baseUrl + data?.image} alt="Why this" />
        </div>

        <div className="why-steps-container">
          {data?.items?.map((step, index) => (
            <div className="content-box" key={step._id}>
              <strong className="step-number">
                {(index + 1).toString().padStart(2, "0")}
              </strong>

              <div>
                <h3>{step.stepTitle}</h3>
                <p className="step-text">{step.stepDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyThis;
