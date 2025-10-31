import React from "react";
import "./GuestPostGuide.css";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const cards = [
  {
    title: "What We Accept",
    points: [
      {
        text: "We publish articles on SEO, digital marketing, design, branding, and online business growth.",
        type: "check",
      },
      {
        text: "We welcome content that shares useful tips, fresh ideas, and real case studies.",
        type: "check",
      },
      {
        text: "Posts should be between 1,000 and 1,500 words so readers get full value.",
        type: "check",
      },
      {
        text: "We look for articles that help readers learn, solve a problem, and gain clear knowledge.",
        type: "check",
      },
    ],
  },
  {
    title: "Submission Rules",
    points: [
      {
        text: "Write in clear and simple language to be easily understood.",
        type: "check",
      },
      {
        text: "Add good headings, subheadings, and bullet points to make the content structured.",
        type: "check",
      },
      {
        text: "Also, format your points with data, research, and examples.",
        type: "close",
      },
      {
        text: "Add an author bio with your name, background, and useful links.",
        type: "close",
      },
    ],
  },
  {
    title: "What We Don’t Accept",
    points: [
      {
        text: "Content that is copied, spun, and already published somewhere else.",
        type: "check",
      },
      {
        text: "Posts written only to get backlinks and heavy self-promotion.",
        type: "check",
      },
      {
        text: "Articles under 800 words that do not provide enough value.",
        type: "close",
      },
      {
        text: "Submissions with weak grammar, poor quality, and topics not related to our services.",
        type: "close",
      },
    ],
  },
];

const GuestPostGuide = () => {
  return (
    <div className="guestpost-guide">
      <h2>
        <span>Guest Post</span> Guide Line
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
      <div className="digital-monk">
        <h3>
          <span>Become A</span> Digital Monk
        </h3>
        <p>Get Exclusive Tips, Strategies, And Ideas On Digital Marketing</p>
      </div>
    </div>
  );
};

export default GuestPostGuide;
