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
        text: "Dedicated account manager and full in-house team that plan, build, and execute SEO assets.",
        type: "check",
      },
      {
        text: "All-in-one platform for optimizing, tracking, and reporting SEO ROI.",
        type: "check",
      },
      {
        text: "Built around your business goals, changing markets, and marketing efforts.",
        type: "check",
      },
      {
        text: "24/7 support, live tracking, and direct client communication.",
        type: "check",
      },
    ],
  },
  {
    title: "Typical Seo Agency",
    points: [
      {
        text: "Runs basic scans that highlight common issues.",
        type: "check",
      },
      {
        text: "Tracks limited data using standard tools and reports.",
        type: "check",
      },
      {
        text: "Uses multiple third-party tools that increase costs and create confusion.",
        type: "close",
      },
      {
        text: "Follows the same templates that ignore unique business goals and audience needs.",
        type: "close",
      },
    ],
  },
  {
    title: "In-house Seo",
    points: [
      {
        text: "Reviews content and performance on selected pages.",
        type: "check",
      },
      {
        text: "Checks progress but lacks advanced technical review.",
        type: "check",
      },
      {
        text: "Relies on outdated manual tracking tools that limit full visibility.",
        type: "close",
      },
      {
        text: "Skips tracking of algorithm changes and some updates.",
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
