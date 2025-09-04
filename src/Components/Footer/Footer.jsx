import { FaLocationDot } from "react-icons/fa6";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
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
                <span className="contact-icon">📞</span>
                <span>+92 300 1110365</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+971 45 7B 7003 (UAE)</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>info@connect-sol.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon"><FaLocationDot /></span>
                <span>
                  Pakistan: Advance Connect Solutions Private Limited 90A, Abu
                  Bakar Block Johar Town, Lahore
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>
                  UAE: Office #1904, Metroplex Tower Business Bay Dubai.
                </span>
              </div>
            </div>
          </div>

          {/* Company Profile Column */}
          <div className="footer-column">
            <h3 className="column-title">COMPANY PROFILE</h3>
            <ul className="footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Staff Augmentation</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Our Partners</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="footer-column">
            <h3 className="column-title">PRODUCTS</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Enterprise Resource Planning</a>
              </li>
              <li>
                <a href="#">Financial Management System</a>
              </li>
              <li>
                <a href="#">Human Resource Management</a>
              </li>
              <li>
                <a href="#">Help Desk</a>
              </li>
              <li>
                <a href="#">Visitor Management System</a>
              </li>
              <li>
                <a href="#">Property Management System</a>
              </li>
              <li>
                <a href="#">Point of Sale POS</a>
              </li>
            </ul>
          </div>

          {/* Our Services Column */}
          <div className="footer-column">
            <h3 className="column-title">OUR SERVICES</h3>
            <ul className="footer-links">
              <li>
                <a href="#">App Development</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Search Engine Optimization</a>
              </li>
              <li>
                <a href="#">Social Media Marketing</a>
              </li>
              <li>
                <a href="#">Database Optimization</a>
              </li>
              <li>
                <a href="#">Application Re-Engineering</a>
              </li>
              <li>
                <a href="#">Testing & Quality Assurance</a>
              </li>
              <li>
                <a href="#">Analytics & Reporting</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-bottom-left">
              <span className="copyright">
                © 2025 Advance Connect Solutions Private Limited | All Rights
                Reserved.
              </span>
            </div>
            <div className="footer-bottom-center">
              <a href="#" className="footer-bottom-link">
                Get in Touch
              </a>
              <a href="#" className="footer-bottom-link">
                Offices
              </a>
              <a href="#" className="footer-bottom-link">
                Careers
              </a>
              <a href="#" className="footer-bottom-link">
                Legal
              </a>
              <a href="#" className="footer-bottom-link">
                Privacy Policy
              </a>
            </div>
            <div className="footer-bottom-right">
              <div className="social-icons">
                <a href="#" className="social-icon facebook">
                  f
                </a>
                <a href="#" className="social-icon twitter">
                  𝕏
                </a>
                <a href="#" className="social-icon instagram">
                  📷
                </a>
                <a href="#" className="social-icon linkedin">
                  in
                </a>
                <a href="#" className="social-icon pinterest">
                  P
                </a>
                <a href="#" className="social-icon tiktok">
                  ♪
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
