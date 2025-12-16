import React from "react";
import "./Cards.css";
import { FiArrowRight } from "react-icons/fi";

const Cards = () => {
  return (
    <div className="cards-area-testimonials">
      <div className="testimonial-card">
        <div className="testimonial-content">
          <img className="testimonial-logo" src="/google.webp" alt="Google" />
          <p>
            Google Reviews highlight the trust clients place in our work and results. Their feedback reflects improved visibility, stronger brand presence, and consistent quality.
          </p>
        </div>
        <div className="check-now-button">
          <span className="check-text">CHECK NOW</span>
          <div className="arrow-btn">
            <FiArrowRight />
          </div>
        </div>
      </div>
      <div className="testimonial-card">
        <div className="testimonial-content">
          <img
            className="testimonial-logo"
            src="/trustpilot.webp"
            alt="Trustpilot"
          />
          <p>
            Trustpilot reviews reflect the confidence businesses place in our team. Clients highlight consistent support, clear communication, and measurable improvements.
          </p>
        </div>
        <div className="check-now-button">
          <span className="check-text">CHECK NOW</span>
          <div className="arrow-btn">
            <FiArrowRight />
          </div>
        </div>
      </div>
      <div className="testimonial-card">
        <div className="testimonial-content">
          <img
            className="testimonial-logo"
            src="/clutch-logo.webp"
            alt="Clutch"
          />
          <p>
            Reviews on Clutch reflect the trust clients place in our strategy
            and execution. Their ratings showcase real growth, stronger
            engagement, and reliable performance.
          </p>
        </div>
        <div className="check-now-button">
          <span className="check-text">CHECK NOW</span>
          <div className="arrow-btn">
            <FiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
