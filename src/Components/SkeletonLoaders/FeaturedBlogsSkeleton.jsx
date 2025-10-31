"use client";
import React from "react";
import "./FeaturedBlogsSkeleton.css";

const FeaturedBlogsSkeleton = ({ count = 4 }) => {
  return (
    <div className="b2b-blogs">
      <div className="b2b-blog-grid">
        {Array.from({ length: count }).map((_, index) => (
          <div className="b2b-blog-card skeleton" key={index}>
            {/* Blog Image Skeleton */}
            <div className="blog-card-img skeleton-box"></div>

            {/* Blog Content Skeleton */}
            <div className="blog-card-content">
              <span className="skeleton-box small"></span>
              <h3 className="skeleton-box medium"></h3>
              <p className="skeleton-box small"></p>
              <hr />
              <div className="blog-footer">
                <span className="skeleton-box tiny"></span>
                <div className="icons-container">
                  <div className="icon skeleton-circle"></div>
                  <div className="icon skeleton-circle"></div>
                  <div className="icon skeleton-circle"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogsSkeleton;
