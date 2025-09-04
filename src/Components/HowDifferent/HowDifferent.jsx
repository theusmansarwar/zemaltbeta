import React from "react";
import "./HowDifferent.css";

const data = {
  heading: "Lorem ipsum, dolor sit amet consectetur",
  list: [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officiis vel et neque libero qui nam veniam eveniet sed ipsumLorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officiis vel et neque libero qui nam veniam eveniet sed ipsum",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officiis vel et neque libero qui nam veniam eveniet sed ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officiis vel et neque libero qui nam veniam eveniet sed ipsum.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officiis vel et neque libero qui nam veniam eveniet sed ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officiis vel et neque libero qui nam veniam eveniet sed ipsum.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officiis vel et neque libero qui nam veniam eveniet sed ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officiis vel et neque libero qui nam veniam eveniet sed ipsum.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officiis vel et neque libero qui nam veniam eveniet sed ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officiis vel et neque libero qui nam veniam eveniet sed ipsum.",
  ],
};
const HowDifferent = () => {
  return (
    <div className="how-different">
      <div className="card">
        <h2>{data.heading}</h2>
        <ul>
          {data.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HowDifferent;
