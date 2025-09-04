import React from "react";
import "./GloballyTrusted.css";
import { FaStar } from "react-icons/fa6";
const GloballyTrusted = () => {
  return (
    <div
      className="globally-trusted"
      style={{
        backgroundImage: "url(/globally-trusted.svg)",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="content-parent">
        <h2>
          Trusted by over <span>2200+</span> customers globally
        </h2>
        <p>
          We've been helpingour customers with affordable Digital Marketing
          Services for
        </p>
        <div className="content-container">
          <strong>40 Years.</strong>
          <img
            className="line-img"
            src="/bottom-lines.svg"
            alt="Bottom Lines"
          />
          <div className="review-container">
            <div className="left">
              4.9 <FaStar />
            </div>
            <div className="right">
              <img className="google-icon" src="/google.png" alt="Google" />
              <span>310 reviews on</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GloballyTrusted;
