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
      { name: "On/Off-Page SEO", slug: "on-off-page-seo" },
      { name: "Technical SEO", slug: "technical-seo" },
      { name: "Local SEO", slug: "local-seo" },
      { name: "E-commerce SEO", slug: "ecommerce-seo" },
      { name: "Brand Building & Digital Marketing", slug: "digital-marketing" },
      { name: "SEO Audit", slug: "seo-audit" },
    ],
  },
  {
    name: "Content Writing",
    slug: "seo-writing",
    items: [
      { name: "SEO Loaded Articles", slug: "seo-loaded-articles" },
      { name: "Content Writing", slug: "content-writing" },
      { name: "Copywriting", slug: "copywriting" },
      { name: "Product Descriptions", slug: "product-descriptions" },
      { name: "E-Commerce Content", slug: "ecommerce-content" },
      { name: "Website Design Structure Content", slug: "structure-content" },
    ],
  },
  {
    name: "UI UX Designing",
    slug: "ui-ux",
    items: [
      { name: "UI/UX Design", slug: "ui-ux-design" },
      { name: "Infographic Design", slug: "infographic-design" },
      {
        name: "Advertising & Marketing Graphics",
        slug: "advertising-marketing-graphics",
      },
      { name: "Packaging Designs", slug: "packaging-designs" },
      {
        name: "Catalogue, Stationery & Gifts Design",
        slug: "catalogue-stationery-gifts-design",
      },
      {
        name: "Creative Assets & Custom Art",
        slug: "creative-assets-custom-art",
      },
    ],
  },
  {
    name: "Web Development",
    slug: "web-development",
    items: [
      { name: "E-Commerce Development", slug: "ecommerce-development" },
      { name: "CMS Development", slug: "cms-development" },
      { name: "Shopify Store Development", slug: "shopify-store-development" },
      {
        name: "Personal Brand Development",
        slug: "personal-brand-development",
      },
      {
        name: "Customized Stores Development",
        slug: "customized-stores-development",
      },
      {
        name: "Rebuild the Website Development",
        slug: "rebuild-website-development",
      },
    ],
  },
  {
    name: "Social Media Marketing",
    slug: "social-media-marketing",
    items: [
      { name: "Paid Social", slug: "paid-social" },
      { name: "Meta Ads", slug: "meta-ads" },
      { name: "Managing Accounts", slug: "managing-accounts" },
      {
        name: "Managing Social Advertising",
        slug: "managing-social-advertising",
      },
      { name: "Advertising Creation", slug: "advertising-creation" },
      { name: "Creative Add-ons", slug: "creative-add-ons" },
    ],
  },
  {
    name: "Google Ads Management",
    slug: "google-ads",
    items: [
      { name: "Search Ads", slug: "search-ads" },
      { name: "Display Ads", slug: "display-ads" },
      { name: "Video Ads", slug: "video-ads" },
      { name: "Shopping Ads", slug: "shopping-ads" },
      { name: "App Campaigns", slug: "app-compaigns" },
      { name: "Local Campaigns", slug: "local-compaigns" },
    ],
  },
];
// Service taglines mapping
const serviceTaglines = {
  "SEO": "Rank Higher. Grow Faster.",
  "Content Writing": "Content That Converts.",
  "UI UX Designing": "Designs That Inspire.",
  "Web Development": "Smart Code. Smooth Performance.",
  "Social Media Marketing": "Strategies That Sell.",
  "Google Ads Management": "Ads That Drive Results.",
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
                  router.push(`/services/${services[selectedIndex].slug}`);
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
