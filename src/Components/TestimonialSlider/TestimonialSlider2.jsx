"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./TestimonialSlider2.css";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    logo: "/zemalt-logo.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque tenetur rem deserunt laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque tenetur rem deserunt laborum.",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facere voluptates architecto ratione laboriosam ducimus animi quod sint nesciunt necessitatibus.",
    stars: 5,
    impact: "2X Increase in website traffic",
  },
  {
    id: 2,
    logo: "/zemalt-logo.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque tenetur rem deserunt laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque tenetur rem deserunt laborum.",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facere voluptates architecto ratione laboriosam ducimus animi quod sint nesciunt necessitatibus.",
    stars: 4,
    impact: "3X Growth in leads",
  },
  {
    id: 3,
    logo: "/zemalt-logo.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque tenetur rem deserunt laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque tenetur rem deserunt laborum.",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facere voluptates architecto ratione laboriosam ducimus animi quod sint nesciunt necessitatibus.",
    stars: 4.5,
    impact: "5X ROI in campaigns",
  },
];

const TestimonialSlider2 = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const nextSlide = () => {
    if (current < testimonials.length - 1) {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="testimonial-slider2">
      <h2>Real Revenue Impact for Our Clients</h2>

      <div className="slider-wrapper">
        {/* Left Arrow */}
        <FaCircleChevronLeft
          className={`scroll-btn left ${current === 0 ? "disabled" : ""}`}
          onClick={prevSlide}
        />

        {/* Slider track */}
        <div className="testimonial-list">
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${current * 100 }%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial2-card">
                <img src={testimonial.logo} alt="client logo" />
                <p className="description">{testimonial.description}</p>

                <div className="review-container">
                  {/* Stars */}
                  <div className="stars">
                    {Array.from({ length: Math.floor(testimonial.stars) }).map(
                      (_, i) => (
                        <FaStar key={i} className="star" />
                      )
                    )}
                  </div>
                  <p>{testimonial.review}</p>
                </div>

                <strong>
                  <span>{testimonial.impact.split(" ")[0]}</span>{" "}
                  {testimonial.impact.replace(/^\S+\s/, "")}
                </strong>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <FaCircleChevronRight
          className={`scroll-btn right ${
            current === testimonials.length - 1 ? "disabled" : ""
          }`}
          onClick={nextSlide}
        />

        {/* Mobile arrows */}
        <div className="arrows-container">
          <FaCircleChevronLeft
            className={`scroll-btn ${current === 0 ? "disabled" : ""}`}
            onClick={prevSlide}
          />
          <FaCircleChevronRight
            className={`scroll-btn ${
              current === testimonials.length - 1 ? "disabled" : ""
            }`}
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider2;
