import {
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import "./Footer.css";
import { IoCall, IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="footer-container">
      {/* Footer Overlay */}
      <div className="footer-overlay"></div>
      {/* Header Section */}
      <div className="footer-header">
        <div className="header-content">
          <div className="header-left">
            <h2 className="get-in-touch">
              GET IN <span className="touch-blue">TOUCH</span>
            </h2>
            <p className="tagline">
              We are the top digital marketing agency for branding corp.
            </p>
          </div>
          <div className="header-right">
            <div className="zemalt-logo">
              <img src="/zemalt-logo.png" alt="Zemalt.com" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-content">
          {/* Office/Assistance Column */}
          <div className="footer-column">
            <h3 className="column-title">OFFICE / ASSISTANCE</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">
                  <IoCall />
                </span>
                <span>+92 123456789</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <IoCall />
                </span>
                <span>+92 123456789 (USA)</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <IoMail />
                </span>
                <span>info@dummy.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <FaLocationDot />
                </span>
                <span>
                  Pakistan: Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <FaLocationDot />
                </span>
                <span>
                  UAE: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
          </div>

          {/* Company Profile Column */}
          <div className="footer-column">
            <h3 className="column-title">COMPANY PROFILE</h3>
            <ul className="footer-links">
              <li>
                <FaAngleRight /> <a href="#">About Us</a>
              </li>
              <li>
                <FaAngleRight /> <a href="#">Staff Augmentation</a>
              </li>
              <li>
                <FaAngleRight /> <a href="#">Contact Us</a>
              </li>
              <li>
                <FaAngleRight /> <a href="#">Blogs</a>
              </li>
              <li>
                <FaAngleRight /> <a href="#">FAQs</a>
              </li>
              <li>
                <FaAngleRight /> <a href="#">Our Partners</a>
              </li>
              <li>
                <FaAngleRight /> <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="footer-column">
            <h3 className="column-title">PRODUCTS</h3>
            <ul className="footer-links">
              <li>
                <FaAngleRight /> <a href="#">Enterprise Resource Planning</a>
              </li>
              <li>
                <FaAngleRight /> <a href="#">Financial Management System</a>
              </li>
              <li>
                <FaAngleRight /> <a href="#">Human Resource Management</a>
              </li>
              <li>
                <FaAngleRight /> <a href="#">Help Desk</a>
              </li>
              <li>
                <FaAngleRight /> <a href="#">Visitor Management System</a>
              </li>
              <li>
                <FaAngleRight /> <a href="#">Property Management System</a>
              </li>
              <li>
                <FaAngleRight /> <a href="#">Point of Sale POS</a>
              </li>
            </ul>
          </div>

          {/* Our Services Column */}
          <div className="footer-column">
            <h3 className="column-title">OUR SERVICES</h3>
            <ul className="footer-links">
              <li>
                <FaAngleRight /> <a href="#">App Development</a>
              </li>
              <li>
                <FaAngleRight /> <a href="#">Web Development</a>
              </li>
              <li>
                <FaAngleRight /> <a href="#">Search Engine Optimization</a>
              </li>
              <li>
                <FaAngleRight /> <a href="#">Social Media Marketing</a>
              </li>
              <li>
                <FaAngleRight /> <a href="#">Database Optimization</a>
              </li>
              <li>
                <FaAngleRight /> <a href="#">Application Re-Engineering</a>
              </li>
              <li>
                <FaAngleRight /> <a href="#">Testing & Quality Assurance</a>
              </li>
              <li>
                <FaAngleRight /> <a href="#">Analytics & Reporting</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="top">
            {" "}
            <div className="top-left">
              <a href="#" className="footer-bottom-link">
                Get in Touch
              </a>
              <a href="#" className="footer-bottom-link">
                Offices
              </a>
              <a href="#" className="footer-bottom-link">
                Careers
              </a>
            </div>
            <div className="top-right">
              <a href="#" className="footer-bottom-link">
                Legal
              </a>
              <a href="#" className="footer-bottom-link">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-left">
              <span className="copyright">
                © 2025 Zemalt PVT LTD | All Rights Reserved.
              </span>
            </div>
            <div className="-bottom-right">
              <div className="social-icons">
                <a href="#" className="social-icon facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-icon twitter">
                  <FaXTwitter />
                </a>
                <a href="#" className="social-icon instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="social-icon linkedin">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="social-icon tiktok">
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
