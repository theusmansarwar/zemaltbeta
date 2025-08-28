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
      <h2>HEADING HERE</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        porro quaerat est a cum dolorem, similique, molestiae natus dignissimos,
        eligendi ut commodi quae ipsam. Obcaecati necessitatibus deserunt sed
        magni esse. Odit corporis similique, excepturi quia praesentium dolores
        exercitationem dolorum in quod distinctio cum, vero sed quisquam velit
        quae consequatur voluptatem.
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
         
            <FaPlay  className="play-icon" onClick={handlePlayClick}/>
        
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
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
