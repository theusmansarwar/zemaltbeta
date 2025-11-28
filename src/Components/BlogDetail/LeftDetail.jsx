"use client";
import React from "react";
import "./LeftDetail.css";
import { baseUrl } from "@/config/Config";

const LeftDetail = ({ blog }) => {
  if (!blog) return null;

  return (
    <div className="full-detail">
      <img className="blog-detail-thumbnail" src={baseUrl + blog.thumbnail} alt={blog.title} />
      <div
        dangerouslySetInnerHTML={{ __html: blog?.detail }}
        className="custom-html-styles px-4 sm:px-8 mt-6 text-white  dangerously-set-data"
      ></div>
    </div>
  );
};

export default LeftDetail;
