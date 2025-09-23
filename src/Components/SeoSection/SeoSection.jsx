import React from "react";
import "./SeoSection.css";
import { FaArrowRight } from "react-icons/fa6";
const SeoSection = () => {
  return (
    <div className="seo-section">
      <div className="content-container">
        <div className="left">
          <h2>
            <span>Turn Search Into a Revenue Driver</span>
            <span>with SEO marketing services</span>
          </h2>
          <p>
            Search remains the strongest growth channel for modern businesses.
            Zemalt helps you capture that growth with proven SEO strategies that
            drive results. Our experts study your market, analyze your
            competitors, and understand your audience. We position your brand
            where customers are already searching. Every click becomes an
            opportunity to build trust, attract customers, and increase revenue.
          </p>
          <ul>
            <li>
              Drive steady organic traffic that supports long-term growth.
            </li>
            <li>
              Rank higher with SEO strategies tailored to your business goals.
            </li>
            <li>
              Gain qualified leads that are ready to convert into paying
              customers.
            </li>
            <li>
              Outperform competitors with optimized campaigns and expert
              guidance.
            </li>
            <li>Improve brand visibility and authority in your industry.</li>
            <li>Build lasting results that extend beyond paid advertising.</li>
          </ul>
          <p>
            Zemalt delivers more than just search rankings. We focus on
            measurable growth that strengthens your brand over time. Our
            approach connects the search directly to revenue in a way that paid
            ads cannot. Your website evolves into the most powerful sales
            channel for your business.
          </p>
        </div>
        <div className="right">
          <strong>Table of Contents</strong>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
      </div>
      <button className="proposal-btn">
        Get Proposal
        <FaArrowRight />
      </button>
    </div>
  );
};

export default SeoSection;
