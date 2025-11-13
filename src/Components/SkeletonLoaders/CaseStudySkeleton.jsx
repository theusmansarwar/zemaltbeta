"use client";
import React from "react";
import "./CaseStudySkeleton.css";

const CaseStudySkeleton = ({ count = 4 }) => {
  return (
    <div className="case-study-grid">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="study-card skeleton-study-card">
          {/* Left Side (Image Circle) */}
          <div className="left">
            <div className="skeleton-square"></div>
          </div>

          {/* Right Side (Content) */}
          <div className="right">
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-btn"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudySkeleton;
