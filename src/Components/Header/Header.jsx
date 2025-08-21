import React from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <div className="header-area">
      <img src="/zemalt-logo.png" />

      <ul>
        <li>Service</li>
        <li>Agency</li>
        <li>Case Study</li>
        <li>Resourses</li>
        <li>Contact</li>
      </ul>

      <button>Get Started</button>
      <GiHamburgerMenu className="menu-icon" />
    </div>
  );
};

export default Header;
