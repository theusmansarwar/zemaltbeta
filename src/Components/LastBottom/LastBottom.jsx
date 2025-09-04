import React from "react";
import "./LastBottom.css";

export default function LastBottom() {
  return (
    <section className="lastbottom">
      <div className="lastbottom-left">
        <h1>Smart Solutions for Your Brand</h1>
        <p>
         We focus on strategies that bring real growth, not just numbers. Our approach ensures better reach, stronger connections, and long-term success. You get solutions designed to adapt to changing trends.
        </p>
        <button className="lastbottom-btn">
          Schedule Call <span className="arrow">→</span>
        </button>
      </div>

      <div className="lastbottom-right">
        <div className="lastbottom-image">
          <div className="image-text">LOREMIPSUM</div>
        </div>
      </div>
    </section>
  );
}
