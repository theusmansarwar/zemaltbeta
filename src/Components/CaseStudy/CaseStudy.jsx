"use client";
import React, { useState } from "react";
import "./CaseStudy.css";
import { FaArrowRightLong } from "react-icons/fa6";
import CaseStudyPopup from "./CaseStudyPopup";

const caseStudies = [
  {
    id: 1,
    title: "Cyber Security",
    image: "/zemalt-logo.png",
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
    ],
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    image: "/zemalt-logo.png",
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
    ],
  },
  {
    id: 3,
    title: "Cyber Security",
    image: "/zemalt-logo.png",
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
    ],
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    image: "/zemalt-logo.png",
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil est laborum laboriosam facilis repellendus similique architecto tenetur veniam dicta.",
    ],
  },
];
const CaseStudy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const handleOpen = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="case-study-grid">
      {caseStudies.map((item) => (
        <div key={item.id} className="study-card">
          {/* Left Side (Image) */}
          <div className="left">
            <div className="img-container">
              <img src={item.image} alt={item.title} />
            </div>
          </div>

          {/* Right Side (Content) */}
          <div className="right">
            <h2>{item.title}</h2>
            {item.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <button className="study-btn" onClick={() => handleOpen(item)}>
              Learn More <FaArrowRightLong />
            </button>
          </div>
        </div>
      ))}
      {/* ✅ Show Popup if open */}
      {isOpen && (
        <CaseStudyPopup project={selectedProject} onClose={handleClose} />
      )}
    </div>
  );
};

export default CaseStudy;
