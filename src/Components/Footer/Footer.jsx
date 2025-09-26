"use client";
import {
  FaAngleRight,
  FaArrowRightLong,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import "./Footer.css";
import { IoCall, IoMail } from "react-icons/io5";
import { useRouter } from "next/navigation";

const companyLinks = [
  { slug: "/", label: "Home" },
  { slug: "/about-us", label: "About" },
  { slug: "/contact", label: "Contact" },
  { slug: "/blog", label: "Blog" },
  { slug: "/team", label: "Team" },
  { slug: "/career", label: "Career" },
  { slug: "/write-for-us", label: "Write for us" },
];

const whatWeDoBest = [
  { slug: "seo", label: "SEO ( Search Engine )" },
  { slug: "social-media-marketing", label: "Social Media Marketing" },
  { slug: "web-development", label: "Web Development" },
  { slug: "ui-ux", label: "Graphic Design" },
  { slug: "google-ads", label: "Google Ads" },
  { slug: "seo-writing", label: "Content Writing" },
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

          {/* Products Column */}
          <div className="footer-column">
            <h3 className="column-title">Industries We Serve</h3>
            <ul className="footer-links">
              <li>
                <FaAngleRight /> <span>E-Commerce & Retail</span>
              </li>
              <li>
                <FaAngleRight /> <span>Real Estate & Property</span>
              </li>
              <li>
                <FaAngleRight />
                <span>Healthcare & Wellness</span>
              </li>
              <li>
                <FaAngleRight /> <span>Finance & Fintech</span>
              </li>
              <li>
                <FaAngleRight /> <span>Travel & Hospitality</span>
              </li>
              <li>
                <FaAngleRight /> <span>Technology & Startups</span>
              </li>
              <li>
                <FaAngleRight /> <span>Food & Restaurants</span>
              </li>
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
                  router.push("/contact");
                }}
                className="footer-bottom-link"
              >
                Offices
              </span>
              <span
                onClick={() => {
                  router.push("/career");
                }}
                className="footer-bottom-link"
              >
                Careers
              </span>
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
                <a
                  href="https://www.facebook.com/zemaltpvtltd"
                  className="social-icon facebook"
                >
                  <FaFacebookF />
                </a>
                <a href="#" className="social-icon twitter">
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.instagram.com/zemaltpvtltd/"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/zemalt/"
                  className="social-icon linkedin"
                >
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
