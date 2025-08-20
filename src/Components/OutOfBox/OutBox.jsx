import React from "react";
import "./OutBox.css";
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
const OutBox = () => {
  return (
    <div className="OutBox">
      <div className="top">
        <h2>Provide the best service with out of the box ideas</h2>
        <p>
          we are a passionate team of digital marketing enthusiasts dedicated to
          helping businesses succeed in the digital world. With years of
          experience and a deep understanding of the ever-evolving online
          landscape, we stay at the forefront of industry trends and
          technologies.
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
