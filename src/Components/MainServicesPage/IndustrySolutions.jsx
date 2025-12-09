"use client";
import "./IndustrySolutions.css";
import { FiZap, FiCheckCircle, FiSettings, FiCpu } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";


const services = [
  {
    id: "automation",
    icon: <FiZap size={32} />,
    title: "Automation Solutions",
    description: "Streamlining processes through cutting-edge technology.",
  },
  {
    id: "quality",
    icon: <FiCheckCircle size={32} />,
    title: "Quality Control",
    description: "Ensuring product excellence through rigorous testing.",
  },
  {
    id: "process",
    icon: <FiSettings size={32} />,
    title: "Process Engineering",
    description: "Enhancing product excellence through rigorous testing.",
  },
  {
    id: "product",
    icon: <FiCpu size={32} />,
    title: "Product Development",
    description: "Streamlining processes through cutting-edge technology.",
  },
];

export default function IndustrySolutions() {
  return (
    <div className="industry-solutions">
      <div className="hero-content">
        {/* Left Section */}
        <div className="left-section">
          {/* Heading */}
          <div className="heading-box">
            <h2 className="main-heading">
              Innovative industry solutions today
            </h2>
          </div>

          {/* Service Cards Grid */}
          <div className="solutions-grid">
            {services.map((service) => (
              <div key={service.id} className="solution-card">
                <div className="solution-icon">{service.icon}</div>
                <h3 className="solution-title">{service.title}</h3>
                <p className="solution-description">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Footer Text */}
          <p className="footer-text">
            Let's make something great work together.{" "}
            <a href="#" className="get-free-quote">
              Get Free Quote
            </a>
          </p>
        </div>

        {/* Center Circle Button */}
        <div className="circle-button">
          <GoArrowUpRight />
        </div>

        {/* Right Section - Image */}
        <div
          className="right-section"
          style={{
            backgroundImage: `url(/blog-thumbnail.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}
