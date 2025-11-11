import React from "react";
import "./Cards.css";
import { FiArrowRight } from "react-icons/fi";

const Cards = () => {
  return (
    <div className="cards-area-testimonials">
      <div className="testimonial-card">
        <div className="testimonial-content">
          <img className="testimonial-logo" src="/google.webp"  alt="Google"/>
          <p>
            We are the top digital marketing agency for branding corp. We offer
            a full rang engine ....
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
          <img className="testimonial-logo" src="/trustpilot.webp" alt="Trustpilot"/>
          <p>
            We are the top digital marketing agency for branding corp. We offer
            a full rang engine ....
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
          <img className="testimonial-logo" src="/clutch-logo.webp" alt="Clutch" />
          <p>
            We are the top digital marketing agency for branding corp. We offer
            a full rang engine ....
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
