"use client";
import React from "react";
import "./ProductsSkeleton.css";

const ProductsSkeleton = ({ count = 4 }) => {
  return (
    <div className="products-grid">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="products-card skeleton-products-card">
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

export default ProductsSkeleton;
