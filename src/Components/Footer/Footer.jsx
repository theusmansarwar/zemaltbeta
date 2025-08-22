"use client"; // Ensure the component is a Client Component

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./Footer.css";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    setError(null);

    const response = await Subscribe({ email: email });

    if (response.status === 201) {
      setEmail("");
      setLoading(false);
      toast.success(response?.message || "Subscribed successfully");
    } else {
      setError(response.message || "Subscription failed.");
      setLoading(false);
    }
  };

  const menuItems = [
    { label: "Service", path: "/services" },
    { label: "Agency", path: "/" },
    { label: "Case Study", path: "/" },
    { label: "Resource", path: "/" },
    { label: "Contact", path: "/contact" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Copyright", path: "/" },
    { label: "Email Address", path: "/" },
  ];

  const handleNavClick = (item) => {
    router.push(item.path);
  };

  return (
    <footer className="footer">
      <div className="footer-upper">
        <h2>Ready to work with us?</h2>
        <button>
          Get Started <FaArrowRightLong />
        </button>
      </div>

      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img src="/zemalt-logo.png" className="logo" />
          <p className="footer-description">
            Zemalt is a full-service digital marketing agency specializing in
            SEO, social media marketing, content writing, PPC, and web solutions
            to help brands grow and strengthen their online presence.
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/zemaltpvtltd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <RiFacebookFill />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/zemalt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://www.instagram.com/zemaltpvtltd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <AiFillInstagram />
              </div>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          {/* Company Links */}
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              {menuItems.slice(0, 5).map((item) => (
                <li key={item.label} onClick={() => handleNavClick(item)}>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div className="footer-section">
            <h4>Licence</h4>
            <ul>
              {menuItems.slice(5).map((item) => (
                <li key={item.label} onClick={() => handleNavClick(item)}>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <p>
                <CiMail />{" "}
                <a href="mailto:company@zemalt.com">company@zemalt.com</a>
              </p>
              <p>
                <IoCallOutline />{" "}
                <a href="tel:+923007044566">+92-(300)-7044-566</a>
              </p>
              <p>
                <IoLocationOutline />{" "}
                <a
                  href="https://maps.app.goo.gl/owK9zDzZBdNGzWrL7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plaza 119, Allama Iqbal Rd, Garhi Shahu, Lahore PK
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
