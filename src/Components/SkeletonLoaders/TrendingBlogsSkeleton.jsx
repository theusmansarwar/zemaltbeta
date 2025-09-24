"use client";
import React from "react";
import "./TrendingBlogsSkeleton.css";

const TrendingBlogsSkeleton = ({ count = 4 }) => {
  return (
    <div className="latest-blogs">
      <h2 className="latest-heading">Trending Blogs</h2>
      <div className="latest-blog-grid">
        {Array.from({ length: count }).map((_, index) => (
          <div className="latest-blog-card skeleton" key={index}>
            {/* Blog Image Skeleton */}
            <div className="blog-card-img skeleton-box"></div>

            {/* Blog Content Skeleton */}
            <div className="blog-card-content">
              <span className="skeleton-box small"></span>
              <h3 className="skeleton-box medium"></h3>
              <p className="skeleton-box large"></p>
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

export default TrendingBlogsSkeleton;
