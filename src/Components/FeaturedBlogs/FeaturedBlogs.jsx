"use client";
import React, { useEffect, useState } from "react";
import "./FeaturedBlogs.css";
import truncateTextByWords from "@/utils/TruncateByWords";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { formatDate } from "@/utils/FormatDate";
import { fetchallBloglist, fetchFeaturedBlog } from "@/DAL/Fetch";
import { baseUrl } from "@/config/Config";
import FeaturedBlogsSkeleton from "../SkeletonLoaders/FeaturedBlogsSkeleton";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

const FeaturedBlogs = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedBlogs = async () => {
      try {
        const res = await fetchFeaturedBlog("", 1, 10, "");
        const featuredBlogs = res?.blogs || [];
        setBlogs(featuredBlogs);
      } catch (error) {
        toast.error("Error fetching featured blogs:", error);
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
        {
          blogs.map((post) => (
            <Link
              className="b2b-blog-card"
              key={post._id}
              onClick={() => {
                router.push(`/blog/${post.slug}`);
              }}
              href={`/blog/${post.slug}`}
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
          ))
        }
        {blogs.length === 0 && <p>No featured blogs found.</p>}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
