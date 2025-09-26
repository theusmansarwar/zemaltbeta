"use client";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import "./TestimonialSlider2.css";
import { fetchTestimonial } from "@/DAL/Fetch";
import TestimonialSliderSkeleton from "../SkeletonLoaders/TestimonialSliderSkeleton";

const TestimonialSlider2 = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch testimonials on mount
  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const res = await fetchTestimonial();
        if (res?.testimonials) {
          setTestimonials(res.testimonials);
        }
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setLoading(false);
      }
    };
    loadTestimonials();
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3000); // slide every 4s

    return () => clearInterval(interval);
  }, [testimonials]);

  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current < testimonials.length - 1) setCurrent(current + 1);
  };

  if (loading) return <TestimonialSliderSkeleton />;

  return (
    <div className="testimonial-slider2" id="revenue-impact">
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
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial2-card">
                {testimonial.logo && (
                  <img src={testimonial.logo} alt="client logo" />
                )}
                <p className="description">{testimonial.whatwedid}</p>

                <div className="review-container">
                  {/* Stars */}
                  <div className="stars">
                    {Array.from({
                      length: Math.floor(testimonial.rating || 0),
                    }).map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                  <p>{testimonial.clientsays}</p>
                </div>

                <strong>
                  <span>{testimonial.boost}</span> {testimonial.boosttext}
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
