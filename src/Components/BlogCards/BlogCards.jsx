"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./BlogCards.css";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import truncateTextByWords from "@/utils/TruncateByWords";
import { PaginationItem } from "@mui/material";

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
    slug: "mongodb-scaling",
    title: "Scaling MongoDB",
    author: "Mike Johnson",
    createdAt: "2025-07-15",
    thumbnail: "/blog-thumbnail.jpg",
    description: "A guide on scaling MongoDB for high traffic applications.",
    category: "Modern",
  },
  {
    _id: 4,
    slug: "mongodb-scaling",
    title: "Scaling MongoDB",
    author: "Mike Johnson",
    createdAt: "2025-07-15",
    thumbnail: "/blog-thumbnail.jpg",
    description: "A guide on scaling MongoDB for high traffic applications.",
    category: "Art Moderne",
  },
  {
    _id: 5,
    slug: "mongodb-scaling",
    title: "Scaling MongoDB",
    author: "Mike Johnson",
    createdAt: "2025-07-15",
    thumbnail: "/blog-thumbnail.jpg",
    description: "A guide on scaling MongoDB for high traffic applications.",
    category: "Industrial",
  },
  {
    _id: 6,
    slug: "mongodb-scaling",
    title: "Scaling MongoDB",
    author: "Mike Johnson",
    createdAt: "2025-07-15",
    thumbnail: "/blog-thumbnail.jpg",
    description: "A guide on scaling MongoDB for high traffic applications.",
    category: "Technology",
  },
  {
    _id: 7,
    slug: "mongodb-scaling",
    title: "Scaling MongoDB",
    author: "Mike Johnson",
    createdAt: "2025-07-15",
    thumbnail: "/blog-thumbnail.jpg",
    description: "A guide on scaling MongoDB for high traffic applications.",
    category: "Designs",
  },
  {
    _id: 8,
    slug: "mongodb-scaling",
    title: "Scaling MongoDB",
    author: "Mike Johnson",
    createdAt: "2025-07-15",
    thumbnail: "/blog-thumbnail.jpg",
    description: "A guide on scaling MongoDB for high traffic applications.",
    category: "Designs",
  },
  {
    _id: 9,
    slug: "mongodb-scaling",
    title: "Scaling MongoDB",
    author: "Mike Johnson",
    createdAt: "2025-07-15",
    thumbnail: "/blog-thumbnail.jpg",
    description: "A guide on scaling MongoDB for high traffic applications.",
    category: "Minimalist",
  },
  {
    _id: 10,
    slug: "mongodb-scaling",
    title: "Scaling MongoDB",
    author: "Mike Johnson",
    createdAt: "2025-07-15",
    thumbnail: "/blog-thumbnail.jpg",
    description: "A guide on scaling MongoDB for high traffic applications.",
    category: "Minimalist",
  },
];

const links = [
  "All",
  "Modern",
  "Industrial",
  "Art Moderne",
  "Technology",
  "Designs",
  "Minimalist",
  "Minimalist",
  "Minimalist",
  "Minimalist",
];

const BlogCards = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialPage = parseInt(searchParams.get("page")) || 1;
  const [page, setPage] = useState(initialPage);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [activeLink, setActiveLink] = useState(0);
  const ulRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const itemsPerPage = 9;

  useEffect(() => {
    fetchData();
  }, [page, activeLink]);
  useEffect(() => {
    checkScrollButtons(); // check scroll status on mount & when links change
  }, [links]);

  const fetchData = () => {
    setLoading(true);

    // ✅ Filter blogs by category
    let filteredBlogs =
      activeLink === 0
        ? blogData
        : blogData.filter((blog) => blog.category === links[activeLink]);

    // ✅ Slice blogs for current page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedBlogs = filteredBlogs.slice(startIndex, endIndex);
    setBlogs(paginatedBlogs);

    setTotalPages(Math.ceil(filteredBlogs.length / itemsPerPage));
    setLoading(false);
  };

  const handleChange = (event, value) => {
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

  return (
    <div className="blog-cards-container">
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
            {links.map((tab, index) => (
              <li
                key={index}
                className={activeLink === index ? "active" : ""}
                onClick={() => {
                  setActiveLink(index);
                  setPage(1); // reset to page 1 on tab change
                }}
              >
                {tab}
              </li>
            ))}
          </ul>
          <CiCircleChevRight
            onClick={scrollRight}
            className={`scroll-btn ${!canScrollRight ? "disabled" : ""}`}
          />
        </div>
      </div>

      <div className="blog-grid">
        {blogs?.map((post) => (
          <div
            key={post._id}
            className="blog-post-card"
            onClick={() => handleClick(post.slug)}
          >
            <div
              className="post-image"
              style={{
                backgroundImage: `url(${post.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
            />
            <div className="post-content">
              <span className="date">{post.createdAt}</span>
              <h2 className="post-title">
                {truncateTextByWords(post.title, 10)}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <Stack spacing={2} sx={{ alignItems: "center", mb: "30px" }}>
        <Pagination
          siblingCount={1}
          boundaryCount={2}
          count={totalPages}
          page={page}
          onChange={handleChange}
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              components={{
                previous: () => <span>Previous</span>,
                next: () => <span>Next</span>,
              }}
              sx={{
                // ✅ For numbers
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
                    "&:hover": { backgroundColor: "var(--text-color4)" }, // 🚫 No hover change
                  },
                }),

                // ✅ For "Previous"
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
                  "&:hover": {
                    backgroundColor: "#f6efefff",
                    color: "var(--main-color)",
                  },
                }),

                // ✅ For "Next"
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
                  "&:hover": {
                    backgroundColor: "#222",
                    color: "var(--text-color4)",
                  },
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
