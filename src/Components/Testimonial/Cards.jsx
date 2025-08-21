import React from "react";
import "./Cards.css";
import { FiArrowRight } from "react-icons/fi";

const Cards = () => {
  return (
    <div className="cards-area-testimonials">
      <div class="testimonial-card">
        <div class="testimonial-content">
          <img class="testimonial-logo" src="/google.png" />
          <p>
            We are the top digital marketing agency for branding corp. We offer
            a full rang engine ....
          </p>
        </div>
        <div class="check-now-button">
          <span class="check-text">CHECK NOW</span>
          <div class="arrow-btn">
            <FiArrowRight />
          </div>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-content">
          <img class="testimonial-logo" src="/trustpilot.png" />
          <p>
            We are the top digital marketing agency for branding corp. We offer
            a full rang engine ....
          </p>
        </div>
        <div class="check-now-button">
          <span class="check-text">CHECK NOW</span>
          <div class="arrow-btn">
            <FiArrowRight />
          </div>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-content">
          <img class="testimonial-logo" src="/clutch.png" />
          <p>
            We are the top digital marketing agency for branding corp. We offer
            a full rang engine ....
          </p>
        </div>
        <div class="check-now-button">
          <span class="check-text">CHECK NOW</span>
          <div class="arrow-btn">
            <FiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
