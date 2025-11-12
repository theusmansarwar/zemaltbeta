"use client";
import React, { useState } from "react";
import "./PortfolioPopup.css";
import { IoCloseCircleSharp } from "react-icons/io5";
import { baseUrl } from "@/config/Config";

const PortfolioPopup = ({ project, onClose }) => {
  if (!project) return null;

  // Combine images + videos in one array
  const media = [
    ...(project.images || []).map((src) => ({ type: "image", src })),
    ...(project.videos || []).map((src) => ({ type: "video", src })),
  ];

  const [selected, setSelected] = useState(media[0] || null);

  return (
    <div className="popup-parent">
      <div className="portfolio-popup">
        <IoCloseCircleSharp className="close-icon" onClick={onClose} />

        {/*  Top Section (Gallery) */}
        <div className="gallery">
          {/* Left: Main preview */}
          <div className="gallery-preview">
            {/* Blurred background */}
            {selected?.type === "image" && (
              <div
                className="blur-bg"
                style={{
                  backgroundImage: `url(${baseUrl}/${selected.src})`,
                }}
              />
            )}

            {/* Foreground preview */}
            {selected?.type === "image" ? (
              <img src={`${baseUrl}/${selected.src}`} alt="preview" />
            ) : (
              <video src={`${baseUrl}/${selected.src}`} controls />
            )}
          </div>


          {/* Right: Thumbnails list */}
          <div className="gallery-thumbnails">
            {media.map((item, index) => (
              <div
                key={index}
                className={`thumb ${item.src === selected?.src ? "active" : ""
                  }`}
                onClick={() => setSelected(item)}
              >
                {item.type === "image" ? (
                  <img src={`${baseUrl}${item.src}`} alt={`thumb-${index}`} />
                ) : (
                  <video src={`${baseUrl}${item.src}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/*  Bottom Section */}
        <div className="bottom">
          <h2>{project.title}</h2>
          <div className="dangerously-set-data"
            dangerouslySetInnerHTML={{ __html: project.description || "" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPopup;