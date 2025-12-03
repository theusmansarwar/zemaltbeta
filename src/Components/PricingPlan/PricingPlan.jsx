"use client";
import { useRouter } from "next/navigation";
import "./PricingPlan.css";
import { FaCheckCircle } from "react-icons/fa";

const PricingPlan = () => {
  const router = useRouter();

  return (
    <div className="pricing-wrapper">
      <h2 className="pricing-sec-heading">Complete Digital Growth Packages</h2>

      <div className="pricing-container">

        {/* ========== BASIC PLAN ========== */}
        <div className="pricing-card-wrapper">
          <div className="pricing-card">
            <div className="card-header">
              <h2 className="card-title">Basic Plan</h2>
            </div>

            <ul className="features-list">
              {[
                "Basic SEO (Audit + 5–10 Keywords)",
                "Basic Custom Website (5–7 Pages)",
                "Basic Social Media Management (2 Platforms)",
                "Basic Google Ads Setup (1 Campaign)",
                "Basic Content Writing (Blogs + Captions)",
                "Basic Graphic Designing (Posts + Banners)",
                "Monthly Performance Report",
                "Basic Website Optimization",
                "Email Support Only",
              ].map((item, i) => (
                <li key={i} className="feature">
                  <FaCheckCircle className="check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="cta-button" onClick={() => router.push("/contact")}>
              Get Started
            </button>
          </div>
        </div>

        {/* ========== PREMIUM (FEATURED) PLAN ========== */}
        <div className="pricing-card-wrapper featured-wrapper">

          {/* ✅ BANNER IS NOW INSIDE WRAPPER PROPERLY */}
          <div className="featured-outside">
            <strong>MOST POPULAR</strong>
        

          <div className="pricing-card featured">
            <div className="card-header">
              <h2 className="card-title">Premium Plan</h2>
            </div>

            <ul className="features-list">
              {[
                "Premium SEO (Advanced On/Off-page)",
                "Premium Custom Website (15+ Pages)",
                "Premium Social Media Marketing",
                "Premium Google Ads Management",
                "Premium Content Writing",
                "Advanced Graphic Designing",
                "Analytics Dashboard & Reports",
                "Website Maintenance & Security",
                "Dedicated Account Manager",
              ].map((item, i) => (
                <li key={i} className="feature">
                  <FaCheckCircle className="check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="cta-button" onClick={() => router.push("/contact")}>
              Get Started
            </button>
          </div>
        </div>
          </div>

        {/* ========== STANDARD PLAN ========== */}
        <div className="pricing-card-wrapper">
          <div className="pricing-card">
            <div className="card-header">
              <h2 className="card-title">Standard Plan</h2>
            </div>

            <ul className="features-list">
              {[
                "Standard SEO (On-page + Basic Keywords)",
                "Standard Custom Website (8–10 Pages)",
                "Standard Social Media Management (3 Platforms)",
                "Standard Google Ads Management",
                "Standard Content Writing",
                "Basic Graphic Designing",
                "Monthly Reporting & Tracking",
                "Website Optimization",
                "Support via Email & Calls",
              ].map((item, i) => (
                <li key={i} className="feature">
                  <FaCheckCircle className="check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="cta-button" onClick={() => router.push("/contact")}>
              Get Started
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PricingPlan;
