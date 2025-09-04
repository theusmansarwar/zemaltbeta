"use client";
import React, { useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown, FaChevronDown } from "react-icons/fa6";
import ServicesDropDown from "../DropDowns/ServicesDropDown";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const visibleDropdown = () => {
    setShowDropdown(true);
  };
  const hidedropdown = () => {
    setShowDropdown(false);
  };
  return (
    <div className="main-wrapper-fixed-width">
      <div className="header-area">
        <img
          src="/zemalt-logo.png"
          onClick={() => {
            router.push("/");
          }}
        />

        <ul>
          <li
            onClick={() => {
              router.push("/services");
            }}
            onMouseEnter={visibleDropdown}
            onMouseLeave={hidedropdown}
          >
            Services <FaAngleDown />
          </li>
          <li
            onClick={() => {
              router.push("/services/seo");
            }}
          >
            SEO
          </li>
          <li
            onClick={() => {
              router.push("/services/designing");
            }}
          >
            UI/UX
          </li>
          <li>Case Study</li>
          <li>Industries We Serve</li>
          <li
            onClick={() => {
              router.push("/blogs");
            }}
          >
            Content Library
          </li>
          <li
            onClick={() => {
              router.push("/about-us");
            }}
          >
            About Us
          </li>
          <li
            onClick={() => {
              router.push("/contact-us");
            }}
          >
            Contact
          </li>
        </ul>

        <button
          onClick={() => {
            router.push("/contact-us");
          }}
        >
          Get Started
        </button>
        <GiHamburgerMenu className="menu-icon" />
      </div>
      {showDropdown && (
        <div className="maindropdown-area">
          <div className="maindropdown-area-flex ">
            <div className="left" onMouseEnter={hidedropdown}></div>
            <div className="center" onMouseEnter={visibleDropdown}>
              <ServicesDropDown />
            </div>
            <div className="right" onMouseEnter={hidedropdown}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
