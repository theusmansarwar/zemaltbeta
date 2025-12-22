"use client";
import React, { useEffect, useState } from "react";
import "./TrendingBlogs.css";
import truncateTextByWords from "@/utils/TruncateByWords";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { formatDate } from "@/utils/FormatDate";
import { fetchPopularBlogs } from "@/DAL/Fetch";
import { baseUrl } from "@/config/Config";
import TrendingBlogsSkeleton from "../SkeletonLoaders/TrendingBlogsSkeleton";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

const TrendingBlogs = () => {
  const router = useRouter();
  const [trendingBlogs, setTrendingBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrending = async () => {
      try {
        const res = await fetchPopularBlogs(6);
        setTrendingBlogs(res?.blogs || []);
      } catch (error) {
        toast.error("Error fetching trending blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTrending();
  }, []);

  if (loading) {
    return <TrendingBlogsSkeleton count={6} />;
  }

  return (
    <div className="latest-blogs">
      <h2 className="latest-heading">Trending Blogs</h2>
      <div className="latest-blog-grid">
        {trendingBlogs.map((post) => (
          <Link
            className="latest-blog-card"
            key={post._id}
            href={`/blog/${post.slug}`}
          >
            {/* Blog Image */}
            <div className="blog-card-img">
              <img src={baseUrl + post.thumbnail} alt={post.title} />
            </div>

            {/* Blog Content */}
            <div className="blog-card-content">
              <span className="blog-category">{post.category.name}</span>
              <h3 className="blog-title">
                {truncateTextByWords(post.title, 8)}
              </h3>
              <p className="blog-description">
                {truncateTextByWords(post.description, 20)}
              </p>
              <p className="blog-meta">6 Min Read</p>
              <hr />
              <div className="blog-footer">
                <span className="blog-date">
                  {formatDate(post.publishedDate)}
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
          </Link>
        ))}

        {trendingBlogs.length === 0 && <p>No blogs found.</p>}
      </div>
    </div>
  );
};

export default TrendingBlogs;
