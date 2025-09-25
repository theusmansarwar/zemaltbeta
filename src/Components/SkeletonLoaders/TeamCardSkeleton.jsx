"use client";
import React from "react";
import "./TeamCardSkeleton.css";

const TeamCardSkeleton = () => {
  return (
    <div className="team-section team-skeleton">
      <div className="team-category">
        <h2 className="skeleton skeleton-title"></h2>
        <div className="team-card-container">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="team-card">
              <div className="profile-left">
                <div className="skeleton skeleton-img"></div>
                <div className="social-icons">
                  <div className="icon skeleton skeleton-icon"></div>
                  <div className="icon skeleton skeleton-icon"></div>
                  <div className="icon skeleton skeleton-icon"></div>
                </div>
              </div>
              <div className="profile-right">
                <div className="skeleton skeleton-text short"></div>
                <div className="skeleton skeleton-badge"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCardSkeleton;
