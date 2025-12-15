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
            Clients appreciate the results shown on Google Reviews. Their
            feedback highlights how our work boosts visibility, strengthens
            brand presence, and delivers dependable quality.
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
            Businesses share their stories on Trustpilot as they experience
            consistent support, clear communication, and measurable improvements
            through our services.
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
