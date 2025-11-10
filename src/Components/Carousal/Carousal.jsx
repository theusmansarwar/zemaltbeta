import React from "react";
import "./Carousal.css";
const Carousal = () => {
  return (
    <div
      className="carousal"
      style={{
        backgroundImage: `url("/drive-card-img.webp")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h2>
        Designing <span>Carousal</span>
      </h2>
    </div>
  );
};

export default Carousal;
