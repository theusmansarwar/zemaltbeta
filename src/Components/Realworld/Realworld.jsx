"use client";
import React, { useState } from "react";
import "./Realworld.css";

const Realworld = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Work");

  const projectCategories = [
    {
      name: "UI/UX Design",
      projects: [
        {
          name: "Redesign Banking App",
          description: "A complete overhaul of a fintech app’s UX.",
          image: "/how-we-work.png",
          slug: "redesign-banking-app",
        },
        {
          name: "Ecommerce Mobile UX",
          description: "Optimized purchase flow for mobile shoppers.",
          image: "/how-we-work.png",
          slug: "ecommerce-mobile-ux",
        },
        {
          name: "Dashboard UI Kit",
          description: "Custom UI kit for a SaaS analytics dashboard.",
          image: "/how-we-work.png",
          slug: "dashboard-ui-kit",
        },
        {
          name: "Healthcare Portal Design",
          description: "Designed a patient-friendly portal interface.",
          image: "/how-we-work.png",
          slug: "healthcare-portal-design",
        },
        {
          name: "Travel Booking Flow",
          description: "Improved booking funnel for travel site.",
          image: "/how-we-work.png",
          slug: "travel-booking-flow",
        },
      ],
    },
    {
      name: "Web Development",
      projects: [
        {
          name: "Real Estate Platform",
          description: "Full-stack development of a real estate app.",
          image: "/how-we-work.png",
          slug: "real-estate-platform",
        },
        {
          name: "Job Board App",
          description: "Created a responsive MERN stack job board.",
          image: "/how-we-work.png",
          slug: "job-board-app",
        },
        {
          name: "Learning Management System",
          description: "Built a custom LMS for corporate training.",
          image: "/how-we-work.png",
          slug: "learning-management-system",
        },
        {
          name: "Crypto Wallet",
          description: "Developed a secure web wallet for crypto users.",
          image: "/how-we-work.png",
          slug: "crypto-wallet",
        },
        {
          name: "SaaS Dashboard",
          description: "Web app for managing SaaS subscription analytics.",
          image: "/how-we-work.png",
          slug: "saas-dashboard",
        },
        {
          name: "Event Booking Site",
          description: "Multi-venue event management platform.",
          image: "/how-we-work.png",
          slug: "event-booking-site",
        },
        {
          name: "Travel Guide Portal",
          description: "Developed a city-based travel content portal.",
          image: "/how-we-work.png",
          slug: "travel-guide-portal",
        },
        {
          name: "NGO Donation Site",
          description: "Secure donation portal for non-profits.",
          image: "/how-we-work.png",
          slug: "ngo-donation-site",
        },
        {
          name: "Hotel Booking Engine",
          description: "Custom backend for hotel reservation system.",
          image: "/how-we-work.png",
          slug: "hotel-booking-engine",
        },
        {
          name: "Online Grocery Store",
          description:
            "Developed grocery delivery platform with cart & checkout.",
          image: "/how-we-work.png",
          slug: "online-grocery-store",
        },
      ],
    },
    {
      name: "Digital Marketing",
      projects: [
        {
          name: "Social Media Growth",
          description: "Increased followers by 4x in 6 months.",
          image: "/how-we-work.png",
          slug: "social-media-growth",
        },
        {
          name: "Email Funnel Automation",
          description: "Automated segmented email journeys for ecomm store.",
          image: "/how-we-work.png",
          slug: "email-funnel-automation",
        },
      ],
    },
    {
      name: "SEO",
      projects: [
        {
          name: "Technical SEO Audit",
          description: "Resolved site health issues & improved page speed.",
          image: "/how-we-work.png",
          slug: "technical-seo-audit",
        },
        {
          name: "Keyword Optimization",
          description: "Boosted SERP ranking with content updates.",
          image: "/how-we-work.png",
          slug: "keyword-optimization",
        },
        {
          name: "Backlink Strategy",
          description: "Built 200+ high-quality backlinks in 3 months.",
          image: "/how-we-work.png",
          slug: "backlink-strategy",
        },
      ],
    },
  ];

  const allProjects = projectCategories.flatMap((cat) => cat.projects);

  const getProjectsToShow = () => {
    if (selectedCategory === "All Work") return allProjects;
    const found = projectCategories.find(
      (cat) => cat.name === selectedCategory
    );
    return found ? found.projects : [];
  };

  const categories = ["All Work", ...projectCategories.map((cat) => cat.name)];

  const projectsToShow = getProjectsToShow();

  return (
    <div className="realworld" id="marketing-objectives">
      <h3>
        Real-world examples of how we help companies in achieving their clear
        marketing objectives
      </h3>

      <ul className="category-list">
        {categories.map((name) => {
          const count =
            name === "All Work"
              ? allProjects.length
              : projectCategories.find((c) => c.name === name)?.projects
                  .length || 0;
          return (
            <li
              key={name}
              className={selectedCategory === name ? "active" : ""}
              onClick={() => setSelectedCategory(name)}
            >
              {name} [{count}]
            </li>
          );
        })}
      </ul>

      <div className="work-area">
        {projectsToShow.map((project, index) => (
          <div
            className="work-div"
            key={index}
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="work-overlay">
              <p>
                <span />
                {project.name}
              </p>
              <p className="desc">{project.description}</p>
              <div className="detail-btn">See More</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realworld;
