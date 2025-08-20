"use client";
import React, { useState } from "react";
import "./TestimonialSlider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaArrowCircleLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting–edge techniques have helped us stay ahead of the competition.",
    name: "Michael Kaizer",
    position: "CEO of Basecamp Corp",
    image: "/images/michael.png",
  },
  {
    quote:
      "Their expertise in digital marketing helped us increase our traffic by 300% in just 4 months. Truly outstanding results and a great team to work with.",
    name: "Sarah Kim",
    position: "CMO at TechBoost",
    image: "/images/sarah.png",
  },
  {
    quote:
      "Thanks to their data-driven strategy, our customer acquisition cost dropped significantly, and our ROI tripled. Highly recommended!",
    name: "John Lee",
    position: "Marketing Director, Zephyr",
    image: "/images/john.png",
  },
  {
    quote:
      "We saw a real transformation in our brand visibility after partnering with them. Their dedication and insight is unmatched.",
    name: "Priya Nair",
    position: "Founder, UrbanNest",
    image: "/images/priya.png",
  },
  {
    quote:
      "Our experience with their team has been phenomenal. They turned our scattered digital efforts into a streamlined, high-performing campaign.",
    name: "David Chen",
    position: "VP Growth, CloudEdge",
    image: "/images/david.png",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const { quote, name, position, image } = testimonials[currentIndex];

  return (
    <div className="testimonial-container">
      <p className="testimonial-quote">“ {quote} ”</p>
      <div className="testimonial-bottom">
        <div className="testimonial-user">
          <img src='/person.png' alt={name} />
          <div>
            <p className="user-name">{name}</p>
            <p className="user-position">{position}</p>
          </div>
        </div>
        <div className="testimonial-controls">
  <div
    onClick={currentIndex > 0 ? handlePrev : undefined}
    className={`optbtns ${currentIndex === 0 ? 'inactive' : ''}`}
    style={{ opacity: currentIndex === 0 ? 0.5 : 1, pointerEvents: currentIndex === 0 ? 'none' : 'auto' }}
  >
    <FaArrowLeft />
  </div>

  <span>
    {String(currentIndex + 1).padStart(2, "0")}/
    {String(testimonials.length).padStart(2, "0")}
  </span>

  <div
    onClick={currentIndex < testimonials.length - 1 ? handleNext : undefined}
    className={`optbtns ${currentIndex === testimonials.length - 1 ? 'inactive' : ''}`}
    style={{ opacity: currentIndex === testimonials.length - 1 ? 0.5 : 1, pointerEvents: currentIndex === testimonials.length - 1 ? 'none' : 'auto' }}
  >
    <FaArrowRight />
  </div>
</div>

      </div>
    </div>
  );
};

export default TestimonialSlider;
