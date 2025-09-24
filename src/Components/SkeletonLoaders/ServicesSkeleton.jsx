import React from "react";
import "./ServicesSkeleton.css";

const ServicesSkeleton = ({ count = 6 }) => {
  return (
    <div className="services-cards">
      <div className="services-cards-grid">
        {Array.from({ length: count }).map((_, i) => (
          <div className="skeleton-card" key={i}>
            <div className="skeleton-icon"></div>
            <div className="skeleton-title"></div>
            <div className="skeleton-text short"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-btn"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSkeleton;
