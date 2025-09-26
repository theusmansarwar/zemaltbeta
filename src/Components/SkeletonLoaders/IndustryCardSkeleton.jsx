"use client";
import React from "react";
import "./IndustryCardSkeleton.css"; // reuse same CSS

const IndustryCardSkeleton = () => {
  const skeletons = [1, 2, 3, 4]; // render 4 dummy skeletons

  return (
    <div className="industry-grid">
      {skeletons.map((i, index) => (
        <div
          key={i}
          className={`industry-card industry-skeleton ${index % 2 === 1 ? "reverse" : ""}`}
        >
          {/* Left (image placeholder) */}
          <div className="left">
            <div className="skeleton-box skeleton-img"></div>
          </div>

          {/* Right (text placeholders) */}
          <div className="right">
            <div className="skeleton-box skeleton-title"></div>
            <div className="skeleton-box skeleton-text"></div>
            <div className="skeleton-box skeleton-text"></div>
            <div className="skeleton-box skeleton-text"></div>
            <div className="skeleton-box skeleton-text"></div>
            <div className="skeleton-box skeleton-btn"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndustryCardSkeleton;
