import React from "react";
import "./BCard.css";

const BCard = () => {
  return (
    <div className="blog-grid">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
        <div className="bcard-skeleton" key={i}>
          <div className="bcard-skeleton-image"></div>
          <div className="bcard-skeleton-meta"></div>
          <div className="bcard-skeleton-title short"></div>
          <div className="bcard-skeleton-title"></div>
        </div>
      ))}
    </div>
  );
};

export default BCard;
