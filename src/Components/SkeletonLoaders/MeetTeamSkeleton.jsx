"use client";
import React from "react";
import "./MeetTeamSkeleton.css";

const MeetTeamSkeleton = () => {
  return (
    <div className="meet-team-skeleton" id="team">
      <h2 className="mts-skeleton mts-skeleton-title"></h2>
      <p className="mts-skeleton mts-skeleton-text"></p>
      <p className="mts-skeleton mts-skeleton-text"></p>
      <p className="mts-skeleton mts-skeleton-text"></p>
      <p className="mts-skeleton mts-skeleton-text"></p>

      <div className="meet-team-skeleton-container">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="meet-team-skeleton-card">
            <div className="card-image">
              <div className="mts-skeleton mts-skeleton-img"></div>
            </div>
            <div className="card-content">
              <div className="mts-skeleton mts-skeleton-name"></div>
              <div className="mts-skeleton mts-skeleton-role"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTeamSkeleton;
