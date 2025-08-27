"use client";
import React, { useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import ServicesDropDown from "../DropDowns/ServicesDropDown";
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const visibleDropdown = () => {
    setShowDropdown(true);
  };
  const hidedropdown = () => {
    setShowDropdown(false);
  };
  return (
    <>
      <div className="header-area">
        <img src="/zemalt-logo.png" />

        <ul>
          <li onMouseEnter={visibleDropdown} onMouseLeave={hidedropdown}>
            Service
          </li>
          <li>Agency</li>
          <li>Case Study</li>
          <li>Resourses</li>
          <li>Contact</li>
        </ul>

        <button>Get Started</button>
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
    </>
  );
};

export default Header;
