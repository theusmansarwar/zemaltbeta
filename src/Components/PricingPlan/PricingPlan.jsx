"use client"
import { useRouter } from "next/navigation"
import "./PricingPlan.css"
import { FaCheckCircle } from "react-icons/fa"

const plans = [
  {
    title: "Basic Plan",
    features: [
      "Basic SEO (Audit + 5–10 Keywords)",
      "Basic Custom Website (5–7 Pages)",
      "Basic Social Media Management (2 Platforms)",
      "Basic Google Ads Setup (1 Campaign)",
      "Basic Content Writing (Blogs + Captions)",
      "Basic Graphic Designing (Posts + Banners)",
      "Monthly Performance Report",
      "Basic Website Optimization",
      "Email Support Only"
    ],
  },
   {
    title: "Premium Plan",
    features: [
      "Premium SEO (Advanced On/Off-page)",
      "Premium Custom Website (15+ Pages)",
      "Premium Social Media Marketing",
      "Premium Google Ads Management",
      "Premium Content Writing",
      "Advanced Graphic Designing",
      "Analytics Dashboard & Reports",
      "Website Maintenance & Security",
      "Dedicated Account Manager"
    ],
    featured: true,
  },

  {
    title: "Standard Plan",
    features: [
      "Standard SEO (On-page + Basic Keywords)",
      "Standard Custom Website (8–10 Pages)",
      "Standard Social Media Management (3 Platforms)",
      "Standard Google Ads Management",
      "Standard Content Writing",
      "Basic Graphic Designing",
      "Monthly Reporting & Tracking",
      "Website Optimization",
      "Support via Email & Calls"
    ],
  },

 
];


const PricingPlan = () => {
  const router = useRouter();
  return (
    <div className="pricing-wrapper">
      <h2 className="pricing-sec-heading">Complete Digital Growth Packages</h2>
      <div className="pricing-container">
        {plans.map((plan, index) => (
         <div key={index} className={`pricing-card ${plan.featured ? "featured" : ""}`}>
  {plan.featured && (
    <div className="featured-top-banner">MOST POPULAR</div>
  )}
  <div className="card-header">
    <h2 className="card-title">{plan.title}</h2>
  </div>

  <ul className="features-list">
    {plan.features.map((feature, idx) => (
      <li key={idx} className="feature">
        <FaCheckCircle className="check-icon" />
        <span>{feature}</span>
      </li>
    ))}
  </ul>

  <button className="cta-button" onClick={() => router.push("/contact")}>
    Get Started
  </button>
</div>

        ))}
      </div>
    </div>
  )
}

export default PricingPlan
