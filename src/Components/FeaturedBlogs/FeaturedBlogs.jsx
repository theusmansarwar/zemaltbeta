"use client";
import React, { useEffect, useState } from "react";
import "./FeaturedBlogs.css";
import truncateTextByWords from "@/utils/TruncateByWords";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { formatDate } from "@/utils/FormatDate";
import { fetchallBloglist } from "@/DAL/Fetch";
import { baseUrl } from "@/config/Config";
import FeaturedBlogsSkeleton from "../SkeletonLoaders/FeaturedBlogsSkeleton";

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedBlogs = async () => {
      try {
        // Fetch first 10 blogs (adjust limit if needed)
        const res = await fetchallBloglist("", 1, 10, "");
        const allBlogs = res?.blogs || [];

        // Filter blogs where featured === true
        const featuredBlogs = allBlogs.filter((blog) => blog.featured);

        setBlogs(featuredBlogs);
      } catch (error) {
        console.error("Error fetching featured blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedBlogs();
  }, []);

  if (loading) {
    return <FeaturedBlogsSkeleton count={6} />;
  }
  return (
    <div className="b2b-blogs">
      <h2 className="b2b-heading">Featured Blogs</h2>
      <div className="b2b-blog-grid">
        {blogs.length === 0 ? (
          <FeaturedBlogsSkeleton count={6} />
        ) : (
          blogs.map((post) => (
            <div className="b2b-blog-card" key={post._id}>
              {/* Blog Image */}
              <div className="blog-card-img">
                <img src={baseUrl + post.thumbnail} alt={post.title} />
              </div>

              {/* Blog Content */}
              <div className="blog-card-content">
                <span className="blog-category">
                  {post.category?.name || "Uncategorized"}
                </span>
                <h3 className="blog-title">
                  {truncateTextByWords(post.title, 5)}
                </h3>

                <p className="blog-meta">6 Min Read</p>
                <hr />
                <div className="blog-footer">
                  <span className="blog-date">
                    {formatDate(post.createdAt)}
                  </span>
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
          ))
        )}
        {blogs.length === 0 && <p>No featured blogs found.</p>}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
