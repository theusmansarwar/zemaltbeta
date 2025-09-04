"use client";
import React, { useState } from "react";
import "./MapSection.css";

const mapSectionData = {
  heading: "Lorem ipsum, dolor sit amet consectetur",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, repudiandae eius consequatur excepturi voluptatibus exercitationem, accusamus cumque, sint perspiciatis temporibus odit distinctio laudantium quisquam illo a dolorum. Nisi itaque deserunt voluptas quia ex perspiciatis molestiae. Praesentium odit consequuntur quos. Possimus aspernatur culpa, quaerat mollitia voluptates?",
  list: [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officiis vel et neque libero qui nam veniam eveniet sed ipsum.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officiis vel et neque libero qui nam veniam eveniet sed ipsum.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officiis vel et neque libero qui nam veniam eveniet sed ipsum.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officiis vel et neque libero qui nam veniam eveniet sed ipsum.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officiis vel et neque libero qui nam veniam eveniet sed ipsum.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam officiis vel et neque libero qui nam veniam eveniet sed ipsum.",
  ],
};
const MapSection = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="map-section">
      <div className="left">
        <h2 className="map-section-heading">{mapSectionData.heading}</h2>

        {mapSectionData.list.map((item, index) => (
          <p key={index}>{item}</p>
        ))}

        <div className="read-more-btn" onClick={toggleReadMore}>
          {expanded ? "Read Less -" : "Read More +"}
        </div>
      </div>

      <div className="right">
        <img src="/location.svg" alt="Zemalt Address" />
      </div>
    </div>
  );
};

export default MapSection;
