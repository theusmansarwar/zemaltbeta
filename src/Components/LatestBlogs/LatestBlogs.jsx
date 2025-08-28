"use client";
import React from "react";
import "./LatestBlogs.css";
import truncateTextByWords from "@/utils/TruncateByWords";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";

const blogs = [
  {
    _id: 1,
    slug: "react-best-practices",
    title:
      "Richard Norton photorealistic rendering as real photos Learn the top practices to write clean React code",
    author: "John Doe",
    createdAt: "2025-08-01",
    thumbnail: "/blog-thumbnail.jpg",
    description:
      "Learn the top practices to write clean React code. Learn the top practices to write clean React code Learn the top practices to write clean React code",
    category: "Technology",
  },
  {
    _id: 2,
    slug: "node-performance-tips",
    title: "Node.js Performance Tips Performance Tips",
    author: "Jane Smith",
    createdAt: "2025-07-20",
    thumbnail: "/blog-thumbnail.jpg",
    description:
      "Learn the top practices to write clean React code. Learn the top practices to write clean React code Learn the top practices to write clean React code",
    category: "Modern",
  },
  {
    _id: 3,
    slug: "node-performance-tips",
    title: "Node.js Performance Tips Performance Tips",
    author: "Jane Smith",
    createdAt: "2025-07-20",
    thumbnail: "/blog-thumbnail.jpg",
    description:
      "Learn the top practices to write clean React code. Learn the top practices to write clean React code Learn the top practices to write clean React code",
    category: "Modern",
  },
  {
    _id: 4,
    slug: "node-performance-tips",
    title: "Node.js Performance Tips Performance Tips",
    author: "Jane Smith",
    createdAt: "2025-07-20",
    thumbnail: "/blog-thumbnail.jpg",
    description:
      "Learn the top practices to write clean React code. Learn the top practices to write clean React code Learn the top practices to write clean React code",
    category: "Modern",
  },
];

const LatestBlogs = () => {
  return (
    <div className="latest-blogs">
      <h2 className="latest-heading">Latest Blogs</h2>
      <div className="latest-blog-grid">
        {blogs.map((post) => (
          <div className="latest-blog-card" key={post._id}>
            {/* Blog Image */}
            <div className="blog-card-img">
              <img src={post.thumbnail} alt={post.title} />
            </div>

            {/* Blog Content */}
            <div className="blog-card-content">
              <span className="blog-category">{post.category}</span>
              <h3 className="blog-title">
                {truncateTextByWords(post.title, 8)}
              </h3>
              <p className="blog-description">
                {truncateTextByWords(post.description, 20)}
              </p>
              <p className="blog-meta">0 Comments – 6 Min Read</p>
              <hr />
              <div className="blog-footer">
                <span className="blog-date">{post.createdAt}</span>
                <div className="icons-container">
                  <a
                    href="https://www.facebook.com/zemaltpvtltd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon">
                      <RiFacebookFill />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/zemalt/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/zemaltpvtltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon">
                      <AiFillInstagram />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
