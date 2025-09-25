import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./TalkToExpert.css";
const TalkToExpert = () => {
  return (
    <div className="talk-to-expert">
      <h2>Command Google’s First Page – With SEO Starting at $200</h2>
      <div className="expert-content">
        <div className="left">
          <p>Expert-driven strategies crafted for lasting dominance.</p>
          <button className="expert-btn">
            Talk To Expert <FaArrowRight />
          </button>
        </div>
        <img src="/expert-arrow.svg" alt="Arrow Image" />
      </div>
    </div>
  );
};

export default TalkToExpert;
