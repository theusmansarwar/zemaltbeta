import React from "react";
import "./WhyThis.css";

const data = {
  heading:
    " Lorem ipsum dolor sit amet consectetur!",
  description:
    " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, amet! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, amet!",
  image: "/blog-thumbnail.jpg",
  items: [
    {
      question: "Expert Team",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, amet! Lorem ipsum dolor sit amet consectetur",
    },
    {
      question: "Innovative Solutions",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, amet! Lorem ipsum dolor sit amet consectetur"
    },
    {
      question: "Customer Support",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, amet! Lorem ipsum dolor sit amet consectetur",
    },
  
  ],
};

const WhyThis = () => {
  return (
    <div className="why-this">
      <div className="why-this-header">
        <div className="header-left">
          <h2>{data.heading}</h2>
        </div>
        <div className="header-right">
          <p>{data.description}</p>
        </div>
      </div>
      <div className="why-this-steps">
        <div className="steps-left">
          <img src={data.image} alt="Why this" />
        </div>
        <div className="why-steps-container">
          {data?.items?.map((step, index) => (
            <div className="content-box" key={index}>
              <strong className="step-number">
                {(index + 1).toString().padStart(2, "0")}
              </strong>
              <div>
                <h3>{step.question}</h3>
                <p className="step-text">{step.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyThis;
