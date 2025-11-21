import React from "react";
import "./Servicefeatured.css";
import CountUp from "../animation/CountUp";
const Servicefeatured = () => {
  return (
    <div className="Servicefeatured">
      <h1>
        Zemalt <span>Services</span> helps brands grow online
      </h1>

      <div className="Servicefeatured-bottom">
        <div className="top">
          <div className="left">
            <p>
              Zemalt offers expert marketing services. Clear plans reach the
              audience fast. Focus stays on results that drive more leads.
            </p>
            <p>
              Strong skills create trust effectively. The team works carefully
              to meet each goal.
            </p>
          </div>
          <div className="right">
            <h2> <CountUp end={50} />+</h2>
            <p>Projects Done Successfully</p>
          </div>
        </div>
        <div className="progress-area">
          <div className="progress-left"></div>
        </div>
      </div>
    </div>
  );
};

export default Servicefeatured;
