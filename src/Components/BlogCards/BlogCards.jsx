"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./BlogCards.css";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import truncateTextByWords from "@/utils/TruncateByWords";
import { PaginationItem } from "@mui/material";
import { fetchBlogCategories, fetchallBloglist } from "@/DAL/Fetch";
import { baseUrl } from "@/config/Config";
import BCard from "../SkeletonLoaders/BCard";
import { formatDate } from "@/utils/FormatDate";

// ✅ Dummy Data (fallback if API fails)
const blogData = [
  {
    _id: 1,
    slug: "react-best-practices",
    title: "Richard Norton photorealistic rendering as real photos",
    author: "John Doe",
    createdAt: "2025-08-01",
    thumbnail: "/blog-thumbnail.jpg",
    description: "Learn the top practices to write clean React code.",
    category: "Technology",
  },
  {
    _id: 2,
    slug: "node-performance-tips",
    title: "Node.js Performance Tips",
    author: "Jane Smith",
    createdAt: "2025-07-20",
    thumbnail: "/blog-thumbnail.jpg",
    description: "Boost your Node.js apps with these performance hacks.",
    category: "Modern",
  },
  {
    _id: 3,
    slug: "mongodb-scaling-1",
    title: "Scaling MongoDB",
    author: "Mike Johnson",
    createdAt: "2025-07-15",
    thumbnail: "/blog-thumbnail.jpg",
    description: "A guide on scaling MongoDB for high traffic applications.",
    category: "Industrial",
  },
  {
    _id: 4,
    slug: "mongodb-scaling-2",
    title: "Scaling MongoDB Again",
    author: "Mike Johnson",
    createdAt: "2025-07-16",
    thumbnail: "/blog-thumbnail.jpg",
    description: "Another MongoDB scaling approach.",
    category: "Minimalist",
  },
];

const BlogCards = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialPage = parseInt(searchParams.get("page")) || 1;

  const [page, setPage] = useState(initialPage);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const ulRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeLink, setActiveLink] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(9);
  const [categories, setCategories] = useState([{ _id: "all", name: "All" }]);
  const [activeCategory, setActiveCategory] = useState("all");

  // ✅ Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetchBlogCategories();
        const data = res.categories || [];

        setCategories([{ _id: "all", name: "All" }, ...data]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // ✅ Fetch blogs when filters change
  useEffect(() => {
    fetchData();
  }, [page, rowsPerPage, activeCategory]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const categoryId = activeCategory === "all" ? "" : activeCategory;
      const res = await fetchallBloglist(categoryId, page, rowsPerPage, "");

      if (res?.blogs?.length > 0) {
        setBlogs(res.blogs);
        setTotalPages(res.totalPages || 1);
        setTotalItems(res.totalBlogs || res.blogs.length);
      } else {
        // ✅ fallback to dummy data
        setBlogs(blogData);
        setTotalPages(1);
        setTotalItems(blogData.length);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs(blogData); // fallback
      setTotalPages(1);
      setTotalItems(blogData.length);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePage = (event, value) => {
    setPage(value);
    router.push(`?page=${value}`);
  };

  const handleClick = (slug) => {
    router.push(`/blogs/${slug}`);
  };

  const scrollLeft = () => {
    if (ulRef.current) {
      ulRef.current.scrollBy({ left: -200, behavior: "smooth" });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    if (ulRef.current) {
      ulRef.current.scrollBy({ left: 200, behavior: "smooth" });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const checkScrollButtons = () => {
    if (!ulRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = ulRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const start = totalItems > 0 ? (page - 1) * rowsPerPage + 1 : 0;
  const end = Math.min(page * rowsPerPage, totalItems);

  return (
    <div className="blog-cards-container">
      {/* ---------- Header with categories ---------- */}
      <div className="header">
        <div className="left">
          <h2>
            <span>Design is not just what it looks</span>{" "}
            <span>like and feels like.</span>
          </h2>
        </div>
        <div className="right">
          <CiCircleChevLeft
            onClick={scrollLeft}
            className={`scroll-btn ${!canScrollLeft ? "disabled" : ""}`}
          />
          <ul ref={ulRef} onScroll={checkScrollButtons}>
            {categories.map((cat, index) => (
              <li
                key={cat._id || `cat-${index}`}
                className={activeCategory === cat._id ? "active" : ""}
                onClick={() => {
                  setActiveCategory(cat._id);
                  setActiveLink(index);
                  setPage(1);
                }}
              >
                {cat.name}
              </li>
            ))}
          </ul>
          <CiCircleChevRight
            onClick={scrollRight}
            className={`scroll-btn ${!canScrollRight ? "disabled" : ""}`}
          />
        </div>
      </div>

      {/* ---------- Blog Grid ---------- */}
      <div className="blog-grid">
        {loading ? (
          <BCard />
        ) : blogs.length > 0 ? (
          blogs.map((post, index) => (
            <div
              key={post._id || `blog-${index}`}
              className="blog-post-card"
              onClick={() => handleClick(post.slug)}
            >
              <div
                className="post-image"
                style={{
                  backgroundImage: `url(${baseUrl + post.thumbnail})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                }}
              />
              <div className="post-content">
                <span className="date">{formatDate(post.createdAt)}</span>
                <h2 className="post-title">
                  {truncateTextByWords(post.title, 10)}
                </h2>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>

      {/* ---------- Pagination ---------- */}
      <Stack spacing={2} sx={{ alignItems: "center", mb: "30px" }}>
        <Pagination
          siblingCount={1}
          boundaryCount={2}
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              slots={{
                previous: () => <span>Previous</span>,
                next: () => <span>Next</span>,
              }}
              sx={{
                ...(item.type === "page" && {
                  color: "var(--text-color4)",
                  border: "none",
                  fontWeight: 500,
                  minWidth: "40px",
                  height: "40px",
                  margin: "0 4px",
                  borderRadius: "50%",
                  "&.Mui-selected": {
                    backgroundColor: "var(--text-color4)",
                    color: "var(--main-color)",
                    border: "none",
                    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)",
                    "&:hover": { backgroundColor: "var(--text-color4)" },
                  },
                }),
                ...(item.type === "previous" && {
                  backgroundColor: "var(--text-color4)",
                  color: "var(--main-color)",
                  borderRadius: "25px",
                  padding: "0 15px",
                  minWidth: "80px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  fontSize: "0.75rem",
                  letterSpacing: "0.05em",
                  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)",
                }),
                ...(item.type === "next" && {
                  backgroundColor: "var(--main-color)",
                  color: "var(--text-color4)",
                  borderRadius: "25px",
                  padding: "0 15px",
                  minWidth: "80px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  fontSize: "0.75rem",
                  letterSpacing: "0.05em",
                  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)",
                }),
              }}
            />
          )}
          sx={{
            backgroundColor: "var(--primary-color)",
            padding: "5px",
            borderRadius: "30px",
          }}
        />
      </Stack>
    </div>
  );
};

export default BlogCards;
