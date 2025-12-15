"use client";
import React from "react";
import "./GrowYourBrand.css";
import { useRouter } from "next/navigation";

const GrowYourBrand = () => {
  const router = useRouter();
  // Data array
  const servicesData = [
    {
      heading: "Main Services",
      items: [
        { label: "SEO Optimization", slug: "/services/seo" },
        { label: "Content Writing", slug: "/services/content-writing" },
        { label: "UI/UX Designing", slug: "/services/ui-ux" },
        { label: "Web Development", slug: "/services/web-development" },
        {
          label: "Social Media Marketing",
          slug: "/services/social-media-marketing",
        },
        { label: "Google Ads Management", slug: "/services/google-ads" },
        { label: "Video Editing", slug: "/services/video-editing" },
      ],
    },
    {
      heading: "Development Services",
      items: [
        {
          label: "E-Commerce Development",
          slug: "/services/web-development/ecommerce",
        },
        { label: "CMS Development", slug: "/services/web-development/cms-development" },
        { label: "Shopify Store Development", slug: "/services//web-development/shopify-store-development" },
        {
          label: "Brand Website Development",
          slug: "/services/web-development/brand-website-development",
        },

        { label: "Website Rebuilding", slug: "/services//web-development/website-rebuilding" },
      ],
    },
    {
      heading: "SEO / Local Services",
      items: [
        { label: "SEO Audit", slug: "/services/seo/audit" },
        { label: "Local SEO", slug: "/services/seo/local-seo" },
        { label: "On/Off-Page SEO", slug: "/services/seo/on-page-and-off-page-seo" },
        { label: "E-commerce SEO", slug: "/services/seo/ecommerce-seo" },
        {
          label: "Technical SEO",
          slug: "/services/seo/technical-seo",
        },
        { label: "Brand Building", slug: "/services/seo/brand-building" },
      ],
    },
    {
      heading: "Our Company",
      items: [
        { label: "Home", slug: "/" },
        { label: "Services", slug: "/services" },
        { label: "About Us", slug: "/about-us" },
        { label: "Blog", slug: "/blog" },
        { label: "Team", slug: "/team" },
        { label: "Career", slug: "/career" },
        { label: "Write for us", slug: "/write-for-us" },
      ],
    },
  ];

  return (
    <div className="grow-brand">
      <h2>
        Let's <span>Grow</span> Your Brand
      </h2>

      <div className="service-list">
        {servicesData.map((service, index) => (
          <React.Fragment key={index}>
            <div className="card">
              <div className="top">
                <h3>{service.heading}</h3>
              </div>
              <div className="bottom">
                <ul>
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => {
                        router.push(`${item.slug}`);
                      }}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {index !== servicesData.length - 1 && (
              <div className="vertical-line"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default GrowYourBrand;
