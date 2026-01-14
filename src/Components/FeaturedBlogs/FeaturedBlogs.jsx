"use client";
import React, { useEffect, useState } from "react";
import "./FeaturedBlogs.css";
import truncateTextByWords from "@/utils/TruncateByWords";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { formatDate } from "@/utils/FormatDate";
import { fetchFeaturedBlog } from "@/DAL/Fetch";
import { baseUrl } from "@/config/Config";
import FeaturedBlogsSkeleton from "../SkeletonLoaders/FeaturedBlogsSkeleton";
import { toast } from "react-toastify";
import Link from "next/link";

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedBlogs = async () => {
      try {
        const res = await fetchFeaturedBlog(10);
        setBlogs(res?.blogs || []);
      } catch (error) {
        toast.error("Error fetching featured blogs");
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
        {blogs.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug}`}
            className="b2b-blog-card"
          >
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
                  {formatDate(post.publishedDate)}
                </span>

                <div className="icons-container">
                  {/* FACEBOOK */}
                  <button
                    type="button"
                    className="icon"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(
                        "https://www.facebook.com/zemaltpvtltd",
                        "_blank"
                      );
                    }}
                  >
                    <RiFacebookFill />
                  </button>

                  {/* LINKEDIN */}
                  <button
                    type="button"
                    className="icon"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(
                        "https://www.linkedin.com/company/zemalt/",
                        "_blank"
                      );
                    }}
                  >
                    <FaLinkedinIn />
                  </button>

                  {/* INSTAGRAM */}
                  <button
                    type="button"
                    className="icon"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(
                        "https://www.instagram.com/zemaltpvtltd/",
                        "_blank"
                      );
                    }}
                  >
                    <AiFillInstagram />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {blogs.length === 0 && <p>No featured blogs found.</p>}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
