"use client";
import React, { useState } from "react";
import "./ServicesDropDown.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";

const ServicesDropDown = () => {
  const services = [
    {
      name: "SEO",
      slug: "seo",
      items: [
        { name: "On-Page SEO", slug: "on-page-seo" },
        { name: "Off-Page SEO", slug: "off-page-seo" },
        { name: "Technical SEO", slug: "technical-seo" },
        { name: "Local SEO", slug: "local-seo" },
      ],
    },
    {
      name: "Writing",
      slug: "writing",
      items: [
        { name: "Blog Writing", slug: "blog-writing" },
        { name: "Copywriting", slug: "copywriting" },
        { name: "Technical Writing", slug: "technical-writing" },
      ],
    },
    {
      name: "Designing",
      slug: "designing",
      items: [
        { name: "UI/UX Design", slug: "ui-ux-design" },
        { name: "Logo Design", slug: "logo-design" },
        { name: "Graphic Design", slug: "graphic-design" },
      ],
    },
    {
      name: "Development",
      slug: "development",
      items: [
        { name: "Web Development", slug: "web-development" },
        { name: "Mobile App Development", slug: "mobile-app-development" },
        { name: "E-Commerce Development", slug: "ecommerce-development" },
      ],
    },
    {
      name: "Marketing",
      slug: "marketing",
      items: [
        { name: "Social Media Marketing", slug: "social-media-marketing" },
        { name: "Email Marketing", slug: "email-marketing" },
        { name: "PPC Campaigns", slug: "ppc-campaigns" },
      ],
    },
    {
      name: "Cybersecurity",
      slug: "cybersecurity",
      items: [
        { name: "Penetration Testing", slug: "penetration-testing" },
        { name: "SOC Services", slug: "soc-services" },
        { name: "Risk Assessments", slug: "risk-assessments" },
      ],
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="maindropdown">
      {/* Left Menu */}
      <div className="left">
        <p className="dropdown-heading">OUR PREMIUM SERVICES</p>
        <ul>
          {services.map((service, index) => (
            <li
              key={index}
              onMouseEnter={() => setSelectedIndex(index)}
              className={selectedIndex === index ? "active" : ""}
            >
              <span>{service.name}</span>
              <FaArrowRightLong />
            </li>
          ))}
        </ul>
      </div>

      {/* Center Menu */}

      <div className="center">
        <p className="dropdown-heading">WHAT WE SERVE</p>

        <ul>
          {services[selectedIndex]?.items?.map((item, i) => (
            <li key={i} className="active">
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section with Background Image */}
      <div
        className="right"
        style={{
          backgroundImage: "url(/dropdown-img.png)",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="view-all-btn">
          Check Examples <FiArrowRight />
        </p>
      </div>
    </div>
  );
};

export default ServicesDropDown;
