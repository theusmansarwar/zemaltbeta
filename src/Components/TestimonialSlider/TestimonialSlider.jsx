"use client";
import React, { useState } from "react";
import "./TestimonialSlider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { useSelector, useDispatch } from "react-redux";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const Testimonials = useSelector(
    (state) => state.testimonials.TestimonialsData
  );
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === Testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const { quote, name, position, image } = Testimonials[currentIndex];

  return (
    <div className="testimonial-container">
      <p className="testimonial-quote">“ {quote} ”</p>
      <div className="testimonial-bottom">
        <div className="testimonial-user">
          <img src="/person.png" alt={name} />
          <div>
            <p className="user-name">{name}</p>
            <p className="user-position">{position}</p>
          </div>
        </div>
        <div className="testimonial-controls">
          <div
            onClick={currentIndex > 0 ? handlePrev : undefined}
            className={`optbtns ${currentIndex === 0 ? "inactive" : ""}`}
            style={{
              opacity: currentIndex === 0 ? 0.5 : 1,
              pointerEvents: currentIndex === 0 ? "none" : "auto",
            }}
          >
            <FaArrowLeft />
          </div>

          <span>
            {String(currentIndex + 1).padStart(2, "0")}/
            {String(Testimonials.length).padStart(2, "0")}
          </span>

          <div
            onClick={
              currentIndex < Testimonials.length - 1 ? handleNext : undefined
            }
            className={`optbtns ${
              currentIndex === Testimonials.length - 1 ? "inactive" : ""
            }`}
            style={{
              opacity: currentIndex === Testimonials.length - 1 ? 0.5 : 1,
              pointerEvents:
                currentIndex === Testimonials.length - 1 ? "none" : "auto",
            }}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
