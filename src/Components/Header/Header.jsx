"use client";
import React, { useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import ServicesDropDown from "../DropDowns/ServicesDropDown";
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
const Header = () => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false); // desktop dropdown
  const [mobileMenu, setMobileMenu] = useState(false); // mobile nav
  // Add these states
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const visibleDropdown = () => setShowDropdown(true);
  const hidedropdown = () => setShowDropdown(false);

  return (
    <div className="main-wrapper-fixed-width">
      <div className="header-area">
        <img
          src="/zemalt-logo.png"
          onClick={() => router.push("/")}
          alt="Logo"
        />

        {/* Desktop Nav */}
        <ul>
          <li
            onClick={() => router.push("/services")}
            onMouseEnter={visibleDropdown}
            onMouseLeave={hidedropdown}
          >
            Services <FaAngleDown />
          </li>
          <li onClick={() => router.push("/case-study")}>Case Study</li>
          <li onClick={() => router.push("/industries")}>
            Industries We Serve
          </li>
          <li onClick={() => router.push("/blog")}>Content Library</li>
          <li onClick={() => router.push("/about-us")}>About Us</li>
          <li onClick={() => router.push("/contact")}>Contact</li>
        </ul>

        <button onClick={() => router.push("/contact")}>Get Started</button>

        {/* Hamburger / Cross */}
        {mobileMenu ? (
          <FaTimes className="menu-icon" onClick={() => setMobileMenu(false)} />
        ) : (
          <GiHamburgerMenu
            className="menu-icon"
            onClick={() => setMobileMenu(true)}
          />
        )}
      </div>

      {/* Desktop Services Dropdown */}
      {showDropdown && (
        <div className="maindropdown-area"  >
          <div className="maindropdown-area-flex " onMouseLeave={hidedropdown}>
            <div className="left" onMouseEnter={hidedropdown}></div>
            <div className="center" onMouseEnter={visibleDropdown}>
              <ServicesDropDown />
            </div>
            <div className="right" onMouseEnter={hidedropdown}></div>
          </div>
        </div>
      )}

      {/* Mobile Nav */}
      <div className={`mobile-menu ${mobileMenu ? "open" : ""}`}>
        <ul>
          {/* Main Services */}
          <li>
            <div className="mobile-services-row">
              <span
                className="mobile-link"
                onClick={() => {
                  router.push("/services");
                  setMobileMenu(false); // close menu after navigation
                }}
              >
                Services
              </span>
              <FaAngleDown
                className="expand-icon"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              />
            </div>

            {isServicesOpen && (
              <ul className="mobile-submenu">
                {services.map((service, idx) => (
                  <li key={idx}>
                    <div className="mobile-services-row">
                      <span
                        className="mobile-link"
                        onClick={() => {
                          router.push(`/services/${service.slug}`);
                          setMobileMenu(false); // close after navigation
                        }}
                      >
                        {service.name}
                      </span>
                      <FaAngleDown
                        className="expand-icon"
                        onClick={() =>
                          setActiveService((prev) =>
                            prev === service.slug ? null : service.slug
                          )
                        }
                      />
                    </div>

                    {/* Subservices */}
                    {activeService === service.slug && (
                      <ul className="mobile-submenu">
                        {service.items.map((sub, subIdx) => (
                          <li
                            key={subIdx}
                            onClick={() => {
                              router.push(
                                `/services/${service.slug}/${sub.slug}`
                              );
                              setMobileMenu(false);
                            }}
                          >
                            {sub.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Other menu items */}
          <li
            onClick={() => {
              router.push("/case-study");
              setMobileMenu(false);
            }}
          >
            Case Study
          </li>
          <li
            onClick={() => {
              router.push("/industries");
              setMobileMenu(false);
            }}
          >
            Industries We Serve
          </li>
          <li
            onClick={() => {
              router.push("/blog");
              setMobileMenu(false);
            }}
          >
            Content Library
          </li>
          <li
            onClick={() => {
              router.push("/about-us");
              setMobileMenu(false);
            }}
          >
            About Us
          </li>
          <li
            onClick={() => {
              router.push("/contact");
              setMobileMenu(false);
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
