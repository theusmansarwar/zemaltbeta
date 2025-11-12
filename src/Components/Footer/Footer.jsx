"use client";
import {
  FaAngleRight,
  FaArrowRightLong,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
} from "react-icons/fa6";
import "./Footer.css";
import { IoCall, IoMail } from "react-icons/io5";
import { useRouter } from "next/navigation";

const companyLinks = [
  { slug: "/", label: "Home" },
  { slug: "/products", label: "Our Products" },
  { slug: "/about-us", label: "About Us" },
  { slug: "/contact", label: "Contact Us" },
  { slug: "/blog", label: "Blog" },
  { slug: "/team", label: "Team" },
  { slug: "/write-for-us", label: "Write for us" },
];

const whatWeDoBest = [
  { slug: "seo", label: "SEO ( Search Engine Optimization )" },
  { slug: "social-media-marketing", label: "Social & Paid Media" },
  { slug: "web-development", label: "Web Development" },
  { slug: "ui-ux", label: "Designing" },
  { slug: "google-ads", label: "Google Ads" },
  { slug: "content-writing", label: "Content Writing" },
];
const industries = [
  { label: "E-Commerce & Retail" },
  { label: "Real Estate & Property" },
  { label: "Healthcare & Wellness" },
  { label: "Finance & Fintech" },
  { label: "Travel & Hospitality" },
  { label: "Technology & Startups" },
  { label: "Food & Restaurants" },
];

export default function Footer() {
  const router = useRouter();
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
            <div
              className="contact-btn"
              onClick={() => {
                router.push("/contact");
              }}
            >
              Contact Us <FaArrowRightLong />
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
                <a href="tel:+923007044566">+92 3007044566</a>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <IoCall />
                </span>
                <a href="tel:+92123456789">+92 123456789 (USA)</a>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <IoMail />
                </span>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=company@zemalt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  company@zemalt.com
                </a>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <FaLocationDot />
                </span>
                <a
                  href="https://maps.app.goo.gl/owK9zDzZBdNGzWrL7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pakistan: Plaza 119, Allama Iqbal Rd, Garhi Shahu, Lahore PK
                </a>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <FaLocationDot />
                </span>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  USA: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </a>
              </div>
            </div>
          </div>

          {/* Company Profile Column */}
          <div className="footer-column">
            <h3 className="column-title">Our Company</h3>
            <ul className="footer-links">
              {companyLinks.map((link, index) => (
                <li key={index} onClick={() => router.push(link.slug)}>
                  <FaAngleRight /> <span>{link.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries We Serve */}
          <div className="footer-column">
            <h3 className="column-title">Industries We Serve</h3>
            <ul className="footer-links">
              {industries.map((industry, index) => (
                <li key={index} className="industry-item">
                  <FaAngleRight /> <span>{industry.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Column */}
          <div className="footer-column">
            <h3 className="column-title">What We Do Best</h3>
            <ul className="footer-links">
              {whatWeDoBest.map((service, index) => (
                <li key={index} onClick={() => router.push(`/services/${service.slug}`)}>
                  <FaAngleRight /> <span>{service.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="top">
            {" "}
            <div className="top-left">
              <span
                onClick={() => {
                  router.push("/contact");
                }}
                className="footer-bottom-link"
              >
                Get in Touch
              </span>
              <span
                onClick={() => {
                  router.push("/team");
                }}
                className="footer-bottom-link"
              >
                Team
              </span>
              <span
                onClick={() => {
                  router.push("/career");
                }}
                className="footer-bottom-link"
              >
                Career
              </span>
            </div>
            <div className="top-right">
              <span
                onClick={() => {
                  router.push("/terms-and-conditions");
                }}
                className="footer-bottom-link"
              >
                Terms & Conditions
              </span>
              <span
                onClick={() => {
                  router.push("/privacy-policy");
                }}
                className="footer-bottom-link"
              >
                Privacy Policy
              </span>
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
                <a
                  aria-label="Visit Zemalt on Facebook"
                  href="https://www.facebook.com/zemaltpvtltd"
                  className="social-icon facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  aria-label="Visit Zemalt on Instagram"
                  href="https://www.instagram.com/zemaltpvtltd/"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  aria-label="Visit Zemalt on Linkedin"
                  href="https://www.linkedin.com/company/zemalt/"
                  className="social-icon linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
