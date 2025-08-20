"use client";
import React, { useState } from "react";
import "./TestimonialSlider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaArrowCircleLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "They study the market fully and check our target users. They create campaigns with a clear goal. Each plan aims to attract the right people. Their sharp ideas support our growth. Smart tools keep us ahead always.",
    name: "Michael Kaizer",
    position: "CEO of Basecamp Corp",
    image: "/images/michael.png",
  },
  {
    quote:
      "They understood our brand vision clearly and turned it into a powerful logo. Each detail reflected our identity and values. The designs created lasting recognition in our market. Every option showed deep research and creativity. Zemalt delivered far more than just a logo; they gave us a symbol of trust.",
    name: "Sarah Kim",
    position: "CMO at TechBoost",
    image: "/images/sarah.png",
  },
  {
    quote:
      "Our website looked outdated before we partnered with Zemalt. The team transformed it into a modern, user-friendly site. Navigation became simple, and customers now spend more time browsing. Every section looks sharp and professional. Performance improved, and loading times dropped.",
    name: "John Lee",
    position: "Marketing Director, Zephyr",
    image: "/images/john.png",
  },
  {
    quote:
      "They designed our app interface with clarity and purpose. Every screen felt natural and easy to use. Customers praised the simple flow and stylish layouts. The designs cut confusion and improved engagement. Zemalt guided us through each stage and explained choices clearly.",
    name: "Priya Nair",
    position: "Founder, UrbanNest",
    image: "/images/priya.png",
  },
  {
    quote:
      "We relied on Zemalt for digital marketing, and the results were impressive. Campaigns targeted the right audience at the right time. Each ad carried a clear message that boosted response. Our traffic increased within weeks, and sales grew steadily.",
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
            {String(testimonials.length).padStart(2, "0")}
          </span>

          <div
            onClick={
              currentIndex < testimonials.length - 1 ? handleNext : undefined
            }
            className={`optbtns ${
              currentIndex === testimonials.length - 1 ? "inactive" : ""
            }`}
            style={{
              opacity: currentIndex === testimonials.length - 1 ? 0.5 : 1,
              pointerEvents:
                currentIndex === testimonials.length - 1 ? "none" : "auto",
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
