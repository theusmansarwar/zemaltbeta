"use client";

import React, { useState } from "react";
import "./PortfolioCards.css";
import { FaArrowRightLong } from "react-icons/fa6";
import PortfolioPopup from "./PortfolioPopup";
import { baseUrl } from "@/config/Config";
import truncateTextByWords from "@/utils/TruncateByWords";

// helper: strip HTML tags (simple)
const stripHtml = (html = "") => {
  if (!html) return "";
  return html.replace(/<\/?[^>]+(>|$)/g, ""); // removes tags
};

const PortfolioCards = ({ data }) => {
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

  if (!data?.items || data.items.length === 0) return null;

  return (
    <div>
      <div className="Portfolio-card-area">
        <h2>Portfolio</h2>

        {data.items.map((project, index) => (
          <div className="Portfolio-card-div" key={project._id || index}>
            <div
              className="project-thumbnail"
              style={{
                backgroundImage: `url(${baseUrl}${project.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="Project-mid">
              <h3>{project.title}</h3>

              {/* Plain-text excerpt: strip HTML then truncate */}
              <p>
                {truncateTextByWords(stripHtml(project.description || ""), 80)}
              </p>
            </div>

            <div className="portfolio-btn-area">
              <div
                className="visit-project-btn"
                onClick={() => handleOpen(project)}
              >
                View Project <FaArrowRightLong />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup receives full project (HTML included) */}
      {isOpen && (
        <PortfolioPopup project={selectedProject} onClose={handleClose} />
      )}
    </div>
  );
};

export default PortfolioCards;