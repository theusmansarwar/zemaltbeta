import React from "react";
import "./BlogDetailLoader.css";

const BlogDeatilLoader = () => {
  return (
    <div className="skeleton-blog">
      {/* Header */}
      <div className="skeleton-header">
        <div className="skeleton-title"></div>
      </div>

      {/* Main Section */}
      <div className="skeleton-main">
        {/* Left Side (Blog Content) */}
        <div className="skeleton-left">
          <div className="skeleton-image"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
        </div>

        {/* Right Side (Sidebar) */}
        <div className="skeleton-right">
          <div className="skeleton-title"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-box"></div>
          <div className="skeleton-box"></div>
          <div className="skeleton-box"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogDeatilLoader;
