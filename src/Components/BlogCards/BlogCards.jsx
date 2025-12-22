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
import { FaChevronDown } from "react-icons/fa6";
import { toast } from "react-toastify";

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

  const [rowsPerPage, setRowsPerPage] = useState(12);
  const [categories, setCategories] = useState([{ _id: "all", name: "All" }]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("desc");

  //  Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetchBlogCategories();
        const data = res.categories || [];

        setCategories([{ _id: "all", name: "All" }, ...data]);
      } catch (error) {
        toast.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch blogs when filters change
useEffect(() => {
  fetchData();
}, [page, rowsPerPage, activeCategory, sortOrder]);


  const fetchData = async () => {
    setLoading(true);
    try {
      const categoryId = activeCategory === "all" ? "" : activeCategory;
      const res = await fetchallBloglist(
        categoryId,
        page,
        rowsPerPage,
        "",
        sortOrder
      );

      if (res?.blogs?.length > 0) {
        setBlogs(res.blogs);
        setTotalPages(res.totalPages || 1);
        setTotalItems(res.totalBlogs || res.blogs.length);
      } else {
        setBlogs([]);
        setTotalPages(1);
        setTotalItems(0);
      }
    } catch (error) {
      toast.error("Error fetching blogs");
      setBlogs([]);
      setTotalPages(1);
      setTotalItems(0);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePage = (event, value) => {
    setPage(value);
    router.push(`?page=${value}`);
  };

  const handleClick = (slug) => {
    router.push(`/blog/${slug}`);
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
          <CiCircleChevLeft
            onClick={scrollLeft}
            className={`scroll-btn ${!canScrollLeft ? "disabled" : ""}`}
          />
          <ul ref={ulRef} onScroll={checkScrollButtons}>
            {categories.map((cat, index) => (
              <li
                key={cat._id || "all"}
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

        <div className="right">
          <label>Sort by:</label>
          <div className="select-wrapper">
            <select
              className="sort-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="desc">Newest</option>
              <option value="asc">Oldest</option>
            </select>

            <FaChevronDown className="select-icon" />
          </div>
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
                <span className="date">{formatDate(post.publishedDate)}</span>
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
