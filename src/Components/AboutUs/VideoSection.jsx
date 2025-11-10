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
      <h2>See How Zemalt Transforms Ideas into Digital Growth</h2>
      <p>
        See Zemalt in action and discover how we help businesses grow online. This video shows our expertise, our process, and the results we deliver. You will learn how we turn ideas into real success. Every project, campaign, and strategy is designed to build trust, visibility, and lasting impact. Watch now to understand why brands choose Zemalt and how we make digital growth simple, clear, and effective for you.
      </p>
      {!isPlaying ? (
        <div
          className="thumbnail-container"
          style={{
            backgroundImage: `url(/how-we-work.webp)`,
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
