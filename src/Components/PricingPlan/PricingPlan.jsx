"use client";
import React from "react";
import "./PricingPlan.css";
import { FaCircleCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    title: "Trial Plan",
    targetAudience: "Businesses wanting to test your service before committing.",
    features: [
      "Website SEO audit (basic)",
      "Keyword analysis (5 keywords)",
      "On-page SEO recommendations",
      "One backlink from a high-authority site",
      "Competitor analysis (basic)",
      "Basic technical SEO check (broken links, speed, mobile-friendliness)",
      "15-day validity",
    ],
  },
  {
    title: "Premium Plan",
    targetAudience: "Businesses that want aggressive SEO and long-term growth.",
    features: [
      "Advanced website SEO audit",
      "Keyword research & tracking (50+ keywords)",
      "Complete on-page SEO implementation",
      "15+ high-quality backlinks per month",
      "Content creation (blog posts, guest posts)",
      "Content creation (blog posts, guest posts)",
      "Content creation (blog posts, guest posts)",
    ],
  },
  { 
    title: "Basic Plan",
    targetAudience: "Small businesses looking for affordable SEO improvements.",
    features: [
      "Full website SEO audit",
      "Keyword research & tracking (15 keywords)",
      "On-page SEO (meta tags, content optimization, internal linking)",
      "5 high-quality backlinks per month",
      "Google My Business optimization",
      "Basic technical SEO fixes",
      "Monthly performance report",
      "Local SEO strategies",
     

    ],
  },
 
];

const PricingPlan = () => {
  const router = useRouter();
  return (
    <div className="pricing-container">
      {plans.map((plan, index) => (
        <div key={index} className="pricing-card">
          <h2>{plan.title}</h2>
          <ul>
            {plan.features.map((feature, idx) => (
              <li key={idx} className="feature">
                <FaCheckCircle /> {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingPlan;