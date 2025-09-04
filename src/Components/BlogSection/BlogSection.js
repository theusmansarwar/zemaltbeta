import React from "react";
import "./BlogSection.css";
import { FaArrowRight } from "react-icons/fa6";

const blogs = [
  {
    title: "How a Digital Marketing Agency Can Boost Your Business",
    description:
      "We are the top digital marketing agency for branding corp. We offer a full range",
    readTime: "5 min read",
    icon: "⬤",
    buttonStyle: "dark",
  },
  {
    title: "The Latest Trends and Strategies with a Digital Marketing Agency",
    description:
      "Working with this digital marketing agency has been a true partnership. They have tak",
    readTime: "5 min read",
    icon: "⬤",
    buttonStyle: "light",
  },
  {
    title: "Maximizing ROI with the Expertise of a Digital Marketing Agency",
    description:
      "What sets this digital marketing agency apart is their commitment to transparency",
    readTime: "5 min read",
    icon: "⬤",
    buttonStyle: "light",
  },
];
function truncateByWords(text, wordLimit) {
  const words = text.trim().split(/\s+/); // split by spaces
  if (words.length <= wordLimit) return text; // no truncation needed
  return words.slice(0, wordLimit).join(" ") + "...";
}
const colors = ["#ff4d4d", "#4caf50", "#2196f3", "#ff9800", "#9c27b0"];

const BlogSection = ({ data }) => {
  return (
    <div className="blog-section">
      <div className="blog-header2">
        <div className="header-left">
          <h2>{data.heading}</h2>
        </div>
        <div className="header-right">
          <p>{data.description}</p>
          <button className="see-more">See more</button>
        </div>
      </div>

      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <div className="card-top">
              {/* pick color by index */}
              <span
                className="icon-dot"
                style={{ color: colors[index % colors.length] }}
              >
                {blog.icon}
              </span>
              <span className="read-time">{blog.readTime}</span>
            </div>
            <div className="card-bottom">
              <h4>{blog.title}</h4>
              <div className="desc-btn-container">
                <p className="description">
                  {truncateByWords(blog.description, 15)}
                </p>
                <button className="read-button">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
