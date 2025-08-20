import React from "react";
import "./OutBox.css";
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
const OutBox = () => {
  return (
    <div className="OutBox">
      <div className="top">
        <h2>Provide the Best Service With Unique Ideas</h2>
        <p>
         Zemalt is a skilled team of experts. Brands get full support to grow online. Each goal receives clear focus and effort. Our experts bring deep knowledge and experience. We work at the front edge of trends and tools.
        </p>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="ltop">
            <h3>
              920<span>+</span>
            </h3>
            <p>Project finish with superbly</p>
          </div>

          <div className="circleimg-area">
            <div className="circleimg"></div>
            <div className="circleimg"></div>
            <div className="circleimg"></div>
            <div className="circleimg"></div>
            <FaPlus/>
          </div>
        </div>
        <div className="right">
          <div className="overlay">
          <p>HOW WE WORK</p>
          <div className="play-box">
            <FaPlay />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutBox;
