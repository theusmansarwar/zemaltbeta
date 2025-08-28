import React from "react";
import "./TrendingBlogs.css";
import truncateTextByWords from "@/utils/TruncateByWords";
const trendingBlogs = [
  {
    id: 1,
    date: "28 Jun 2021",
    title: "Richard Norton photorealistic rendering as real photos",
    image: "/blog-thumbnail.jpg",
  },
  {
    id: 2,
    date: "28 Jun 2021",
    title: "Richard Norton photorealistic rendering as real photos",
    image: "/blog-thumbnail.jpg",
  },
  {
    id: 3,
    date: "28 Jun 2021",
    title: "Richard Norton photorealistic rendering as real photos",
    image: "/blog-thumbnail.jpg",
  },
  {
    id: 4,
    date: "28 Jun 2021",
    title: "Richard Norton photorealistic rendering as real photos",
    image: "/blog-thumbnail.jpg",
  },
  {
    id: 5,
    date: "23 Jun 2021",
    title: "Richard Norton photorealistic rendering as real photos",
    image: "/blog-thumbnail.jpg",
  },
];
const TrendingBlogs = () => {
  return (
    <div className="trending-blogs">
      <h2 className="trending-heading">Trending</h2>
      <div className="gallery-grid">
        {trendingBlogs.map((item) => (
          <div key={item.id} className="gallery-card">
            <img src={item.image} alt={item.title} />
            <div className="gallery-overlay">
              <p className="gallery-date">{item.date}</p>
              <h3 className="gallery-title">{truncateTextByWords(item.title,6)}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingBlogs;
