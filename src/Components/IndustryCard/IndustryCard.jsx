"use client";
import React from "react";
import "./IndustryCard.css";
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

const IndustryCard = () => {
  const router = useRouter();

  const industries = [
    {
      id: 1,
      title: "Cyber Security",
      image: "/industry1.png",
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
      ],
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      image: "/industry2.png",
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
      ],
    },
    {
      id: 3,
      title: "Cyber Security",
      image: "/industry1.png",
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
      ],
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      image: "/industry2.png",
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
      ],
    },
  ];

  return (
    <div className="industry-grid">
      {industries.map((item, index) => (
        <div
          key={item.id}
          className={`industry-card ${index % 2 === 1 ? "reverse" : ""}`}
        >
          {/* Left Side (Image) */}
          <div className="left">
            <img src={item.image} alt={item.title} />
          </div>

          {/* Right Side (Content) */}
          <div className="right">
            <h2>{item.title}</h2>
            {item.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="buttons-area">
              <button
                onClick={() => {
                  router.push("/contact-us");
                }}
              >
                Schedule a call <FaArrowRightLong />
              </button>
              <p
                onClick={() => {
                  router.push("/");
                }}
              >
                View Case Study
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndustryCard;
