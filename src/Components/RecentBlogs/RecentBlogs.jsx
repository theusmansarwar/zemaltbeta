"use client";
import React, { useEffect, useState } from "react";
import "./RecentBlogs.css";
import truncateTextByWords from "@/utils/TruncateByWords";
import { useRouter } from "next/navigation";
import { fetchallBloglist, fetchBlogCategories } from "@/DAL/Fetch"; // ✅ use new API
import { baseUrl } from "@/config/Config";

export default function RecentBlogs() {
  const router = useRouter();
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRecentPosts();
    loadCategories();
  }, []);

  //  Load recent posts using new API
  const loadRecentPosts = async () => {
    try {
      setLoading(true);
      const res = await fetchallBloglist("", 1, 4, "");
      if (res?.blogs) {
        setRecentPosts(res.blogs);
      }
    } catch (error) {
      console.error("Error fetching recent posts:", error);
    } finally {
      setLoading(false);
    }
  };

  //  Load categories
  const loadCategories = async () => {
    try {
      const res = await fetchBlogCategories();
      if (res?.categories) {
        setCategories(res.categories);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <div className="blog-sidebar-container">
      {/*  Categories Section */}
      <div className="categories-section">
        <h3 className="categories-title">Categories</h3>
        <ul className="categories-list">
          {categories.length > 0 ? (
            categories.map((cat) => (
              <li
                key={cat._id}
                onClick={() => router.push(`/blogs/category/${cat.slug}`)}
              >
                {cat.name}
              </li>
            ))
          ) : (
            <li>No categories found</li>
          )}
        </ul>
      </div>

      {/* Recent Posts Section */}
      <div className="popular-posts-section">
        <h2 className="section-title">Recent Blogs</h2>
        <div className="posts-list">
          {loading ? (
            <p>Loading...</p>
          ) : recentPosts.length > 0 ? (
            recentPosts.map((post) => (
              <React.Fragment key={post._id}>
                <div
                  className="post-item"
                  onClick={() => router.push(`/blogs/${post.slug}`)}
                >
                  <div
                    className="post-image"
                    style={{
                      backgroundImage: `url(${
                        post.thumbnail ? baseUrl + post.thumbnail : "/dummy.png"
                      })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>

                  <div className="post-content">
                    <div className="post-categories">
                      {post.category?.name ? (
                        <span className="category-tag">
                          {post.category.name}
                        </span>
                      ) : (
                        <span className="category-tag">Uncategorized</span>
                      )}
                    </div>

                    <h3 className="post-title">
                      {truncateTextByWords(post.title, 15)}
                    </h3>
                  </div>
                </div>

                <div className="divider-line"></div>
              </React.Fragment>
            ))
          ) : (
            <p>No blogs found</p>
          )}
        </div>
      </div>
    </div>
  );
}
