"use client";
import React, { useEffect, useState } from "react";
import "./BlogSection.css";
import { FaArrowRight } from "react-icons/fa6";
import { fetchallBloglist } from "@/DAL/Fetch";
import truncateTextByWords from "@/utils/TruncateByWords";
import { useRouter } from "next/navigation";
import BCard2 from "../SkeletonLoaders/BCard2";

const colors = ["#ff4d4d", "#4caf50", "#2196f3", "#ff9800", "#9c27b0"];

const BlogSection = ({ data }) => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await fetchallBloglist("", 1, 3, "");
        setBlogs(res?.blogs || []);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  return (
    <div className="blog-section" id="increase-revenue">
      <div className="blog-header2">
        <div className="header-left">
          <h2>{data.heading}</h2>
        </div>
        <div className="header-right">
          <p>{data.description}</p>
          <button
            className="see-more"
            onClick={() => router.push("/services/seo")}
          >
            See more
          </button>
        </div>
      </div>

      <div className="blog-cards">
        {loading ? (
          <>
            <BCard2 />
            <BCard2 />
            <BCard2 />
          </>
        ) : (
          blogs.map((blog, index) => (
            <div className="blog-card" key={blog._id || index}>
              <div className="card-top">
                <span
                  className="icon-dot"
                  style={{ color: colors[index % colors.length] }}
                >
                  ⬤
                </span>
                <span className="read-time">
                  {blog.readTime || "5 min read"}
                </span>
              </div>
              <div className="card-bottom">
                <h4>{truncateTextByWords(blog.title, 10)}</h4>
                <div className="desc-btn-container">
                  <p className="description">
                    {truncateTextByWords(blog.description, 15)}
                  </p>
                  <button
                    className="read-button"
                    onClick={() => router.push(`/blog/${blog.slug}`)}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogSection;
