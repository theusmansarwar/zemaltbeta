import React from "react";
import "./BlogSection.css";
import { FaArrowRight } from "react-icons/fa6";

const blogs = [
  {
    title: "How a Digital Marketing Agency Can Boost Your Business",
    description:
      "We are the top digital marketing agency for branding corp. We offer a full range...",
    readTime: "5 min read",
    icon: "⬤",
    buttonStyle: "dark",
  },
  {
    title:
      "The Latest Trends and Strategies with a Digital Marketing Agency",
    description:
      "Working with this digital marketing agency has been a true partnership. They have tak...",
    readTime: "5 min read",
    icon: "⬤",
    buttonStyle: "light",
  },
  {
    title:
      "Maximizing ROI with the Expertise of a Digital Marketing Agency",
    description:
      "What sets this digital marketing agency apart is their commitment to transparency a...",
    readTime: "5 min read",
    icon: "⬤",
    buttonStyle: "light",
  },
];

const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="blog-header">
        <div className="header-left">
          <h2>
            Digital Marketing & SEO Services That Grow Traffic & Increase Revenue
          </h2>
        </div>
        <div className="header-right">
          <p>
            Zemalt is a top digital marketing agency. Our team supports brands with complete service solutions. Clients see higher search rankings through expert guidance. More visitors reach their websites through clear strategies and focused action.
          </p>
          <button className="see-more">See more</button>
        </div>
      </div>

      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <div className="card-top">
              <span className="icon-dot">{blog.icon}</span>
              <span className="read-time">{blog.readTime}</span>
            </div>
            <h4>{blog.title}</h4>
            <p className="description">{blog.description}</p>
            <button
              className={`read-button`}
            >
              <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
