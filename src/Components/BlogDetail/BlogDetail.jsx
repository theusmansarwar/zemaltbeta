"use client";

import { useEffect, useState } from "react";
import "./BlogDetail.css";
import BlogDeatilLoader from "../SkeletonLoaders/BlogDetailLoader";
import LeftDetail from "./LeftDetail";
import RecentBlogs from "../RecentBlogs/RecentBlogs";
import { fetchBlogBySlug } from "@/DAL/Fetch";

const BlogDetail = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    const fetchBlog = async () => {
      try {
        const res = await fetchBlogBySlug(slug);

        setBlog(res.blog);
      } catch (err) {
        console.error("Error fetching blog details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading) return <BlogDeatilLoader />;
  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="blog-detail">
      <div className="blog-detail-header">
        <h1>{blog.title}</h1>
      </div>
      <div className="main-section">
        <div className="left-section">
          <LeftDetail blog={blog} />
        </div>
        <div className="right-section">
          <RecentBlogs />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
