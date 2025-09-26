"use client";
import React from "react";
import "./GrowYourBrand.css";
import { useRouter } from "next/navigation";

const GrowYourBrand = () => {
  const router = useRouter();
  // ✅ Data array
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
      ],
    },
    {
      heading: "Development Services",
      items: [
        {
          label: "E-Commerce Development",
          slug: "/services/ecommerce-development",
        },
        { label: "CMS Development", slug: "/services/cms-development" },
        { label: "Shopify Store Development", slug: "/services/shopify-store-development" },
        {
          label: "Personal Brand Development",
          slug: "/services/personal-brand-development",
        },
        {
          label: "Customized Stores Development",
          slug: "/services/customized-stores-development",
        },
        { label: "Rebuild Website", slug: "/services/rebuild-website" },
      ],
    },
    {
      heading: "SEO / Local Services",
      items: [
        { label: "SEO Audit", slug: "/services/seo/seo-audit" },
        { label: "Local SEO", slug: "/services/seo/local-seo" },
        { label: "SEO Services", slug: "/services/seo" },
        { label: "E-commerce SEO", slug: "/services/seo/ecommerce-seo" },
        {
          label: "Social Media Marketing",
          slug: "/services/social-media-marketing",
        },
        { label: "Custom SEO Reporting", slug: "/services/seo/seo-reporting" },
        { label: "Brand Building & Ranking", slug: "/services/seo/digital-marketing" },
      ],
    },
    {
      heading: "Our Company",
      items: [
        { label: "Home", slug: "/" },
        { label: "About", slug: "/about" },
        { label: "Contact", slug: "/contact" },
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
