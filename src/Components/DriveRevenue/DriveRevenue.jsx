import React from "react";
import "./DriveRevenue.css";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const cards = [
  {
    title: "Zemalt",
    image: "/zemalt-logo.png", 
    points: [
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, iure!",
        type: "check",
      },
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, iure!",
        type: "check",
      },
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, iure!",
        type: "check",
      },
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, iure!",
        type: "check",
      },
    ],
  },
  {
    title: "Typical Seo Agency",
    points: [
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, iure!",
        type: "check",
      },
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, iure!",
        type: "check",
      },
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, iure!",
        type: "close",
      },
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, iure!",
        type: "close",
      },
    ],
  },
  {
    title: "In-house Seo",
    points: [
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, iure!",
        type: "check",
      },
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, iure!",
        type: "check",
      },
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, iure!",
        type: "close",
      },
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, iure!",
        type: "close",
      },
    ],
  },
];

const DriveRevenue = () => {
  return (
    <div className="drive-revenue">
      <h2>
        <p>
          <span>Unmatched</span> SEO Expertise
        </p>{" "}
        to Help Your Business Drive Revenue
      </h2>

      <div className="card-list">
        {cards.map((card, index) => (
          <div key={index} className="each-card">
            {card.image ? (
              <img src={card.image} alt={card.title} className="card-logo" />
            ) : (
              <h3>{card.title}</h3>
            )}

            <ul>
              {card.points.map((point, i) => (
                <li key={i}>
                  <span
                    className={
                      point.type === "check" ? "check-icon" : "close-icon"
                    }
                  >
                    {point.type === "check" ? <FaCheck /> : <IoMdClose />}
                  </span>{" "}
                  {point.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriveRevenue;
