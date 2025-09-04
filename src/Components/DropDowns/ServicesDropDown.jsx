"use client";
import React, { useState } from "react";
import "./ServicesDropDown.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

const services = [
  {
    name: "SEO",
    slug: "seo",
    items: [
      { name: "SEO Services", slug: "seo-services" },
      { name: "Local SEO", slug: "local-seo" },
      { name: "SEO AUDIT", slug: "seo-audit" },
      { name: "E-commerce SEO", slug: "ecommerce-seo" },
      { name: "Digital Marketing", slug: "digital-marketing" },
      { name: "SEO Reporting", slug: "seo-reporting" },
      { name: "Brand Building", slug: "brand-building" },
    ],
  },
  {
    name: "Content Writing",
    slug: "content-writing",
    items: [
      { name: "SEO Loaded Articles", slug: "seo-loaded-articles" },
      { name: "Copywriting", slug: "copywriting" },
      { name: "Product Descriptions", slug: "product-descriptions" },
      { name: "Thin Content", slug: "thin-content" },
      { name: "Website Design Structure Content", slug: "structure-content" },
    ],
  },
  {
    name: "UI UX Designing",
    slug: "designing",
    items: [
      { name: "Branding & Identity Design", slug: "branding-identity-design" },
      {
        name: "Marketing & Advertising Design",
        slug: "marketing-advertising-design",
      },
      { name: "Packaging & Label Design", slug: "packaging-label-design" },
      { name: "Print Media Design", slug: "print-media-design" },
      { name: "UI/UX Designing", slug: "ui-ux-designing" },
      {
        name: "Illustration & Creative Assets",
        slug: "illustration-creative-assets",
      },
    ],
  },
  {
    name: "Web Development",
    slug: "web-development",
    items: [
      { name: "Web Development", slug: "web-development" },
      { name: "Mobile App Development", slug: "mobile-app-development" },
      { name: "E-Commerce Development", slug: "ecommerce-development" },
    ],
  },
  {
    name: "Social Media Marketing",
    slug: "social-media-marketing",
    items: [
      { name: "Social Media Advertising", slug: "social-media-advertising" },
      { name: "Meta Ads", slug: "meta-ads" },
      { name: "Managing Accounts", slug: "managing-accounts" },
      { name: "Social Advertising", slug: "social-advertising" },
      { name: "Advertising Creation", slug: "advertising-creation" },
    ],
  },
  {
    name: "Google Ads Management",
    slug: "google-ads-management",
    items: [
      { name: "Display Ads", slug: "display-ads" },
      { name: "Video Ads", slug: "video-ads" },
      { name: "App Campaigns", slug: "app-compaigns" },
      { name: "Local Campaigns", slug: "local-compaigns" },
    ],
  },
];
// ✅ Service taglines mapping
const serviceTaglines = {
  SEO: "Rank Higher. Grow Faster.",
  Writing: "Content That Converts.",
  Designing: "Designs That Inspire.",
  Development: "Smart Code. Smooth Performance.",
  Marketing: "Strategies That Sell.",
  Cybersecurity: "Security That Protects.",
};
const ServicesDropDown = () => {
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="maindropdown">
      <div className="top">
        <h2 className="dropdown-heading">OUR PREMIUM SERVICES</h2>
        {/* ✅ Dynamic Heading */}
        <h2 className="dropdown-heading">
          {serviceTaglines[services[selectedIndex].name] || "WHAT WE SERVE"}
        </h2>
      </div>
      <div className="bottom">
        {/* Left Menu */}
        <div className="left">
          <ul>
            {services.map((service, index) => (
              <li
                onClick={() => {
                  router.push(
                    `/services/${services[selectedIndex].slug}`
                  );
                }}
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
        <div className="mid">
          <ul>
            {services[selectedIndex]?.items?.map((item, i) => (
              <li key={i} className="active">
                <span
                  onClick={() => {
                    router.push(
                      `/services/${services[selectedIndex].slug}/${item.slug}`
                    );
                  }}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section with Background Image */}
        <div className="right">
          <img src="/dropdown-img.svg" alt="" />
          <p className="view-all-btn">
            Check Examples <FiArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropDown;
