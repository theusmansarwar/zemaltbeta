import React from "react";
import "./OutBox.css";
import { FaPlay } from "react-icons/fa";


const brands = ["/sim.png", "/moawin.png", "/broadium.png"]
const OutBox = () => {
  return (
    <div className="OutBox" id="unique-ideas">
      <div className="top">
        <h2>Delivering the Best Services with Unique Ideas</h2>
        <p>
          Zemalt is a skilled team of experts. Brands get full support to grow
          online. Each goal receives clear focus and effort. Our experts bring
          deep knowledge and experience. We work at the front edge of trends and
          tools.
        </p>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="ltop">
            <h3>
              50<span>+</span>
            </h3>
            <p>Project finish with superbly</p>
          </div>

          <div className="circleimg-area">
            {brands.map((brand, index) => (
              <div key={index} className="circleimg" style={{
                backgroundImage: `url(${brand})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}></div>
            ))}
            <span className="plus">+</span>
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
