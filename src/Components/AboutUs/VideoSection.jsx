"use client";
import React, { useState } from "react";
import "./VideoSection.css";
import { HiOutlinePlay } from "react-icons/hi2";
import { FaPlay } from "react-icons/fa6";
const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  return (
    <div className="video-section">
      <img className="smoke-bg" src="/smoke-bg.jpg" alt="background image" />
      <h2>How can I get started with Zemalt?</h2>
      <p>
        Getting started is simple. Contact us through our website, and our team will set up a consultation. We’ll learn about your goals, discuss your challenges, and create a digital marketing plan that fits your budget and objectives.
      </p>
      {!isPlaying ? (
        <div
          className="thumbnail-container"
          style={{
            backgroundImage: `url(/how-we-work.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <FaPlay className="play-icon" onClick={handlePlayClick} />
          <h3 className="thumbnail-text">WHO WE ARE</h3>
        </div>
      ) : (
        <div className="thumbnail-container">
          <iframe
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            allow="autoplay; encrypted-media"
            title="Who We Are"
            width="100%"
            height="100%"
            allowFullScreen
            frameBorder={0}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
