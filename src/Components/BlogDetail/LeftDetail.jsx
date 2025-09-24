"use client";
import React from "react";
import "./LeftDetail.css";

const LeftDetail = ({ blog }) => {
  if (!blog) return null;

  return (
    <div className="full-detail">
      <div
        dangerouslySetInnerHTML={{ __html: blog?.detail }}
        className="custom-html-styles px-4 sm:px-8 mt-6 text-white"
      ></div>
    </div>
  );
};

export default LeftDetail;
