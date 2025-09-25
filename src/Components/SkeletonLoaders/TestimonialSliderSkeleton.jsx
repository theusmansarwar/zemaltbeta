"use client"
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6"
import "./TestimonialSliderSkeleton.css"

const TestimonialSliderSkeleton = () => {
  return (
    <div className="testimonial-slider2" id="revenue-impact">
      <h2>Real Revenue Impact for Our Clients</h2>

      <div className="slider-wrapper">
        <FaCircleChevronLeft className="scroll-btn left disabled" />

        {/* Slider track with skeleton content */}
        <div className="testimonial-list">
          <div className="testimonial-track">
            <div className="testimonial2-card">
              <div className="ts2-skeleton-logo ts2-skeleton-shimmer"></div>

              <div className="ts2-skeleton-description ts2-skeleton-shimmer"></div>
              <div className="ts2-skeleton-description2 ts2-skeleton-shimmer"></div>

              <div className="review-container">
                <div className="stars">
                  <div className="ts2-skeleton-star ts2-skeleton-shimmer"></div>
                  <div className="ts2-skeleton-star ts2-skeleton-shimmer"></div>
                  <div className="ts2-skeleton-star ts2-skeleton-shimmer"></div>
                  <div className="ts2-skeleton-star ts2-skeleton-shimmer"></div>
                  <div className="ts2-skeleton-star ts2-skeleton-shimmer"></div>
                </div>

                <div className="ts2-skeleton-review-line ts2-skeleton-shimmer"></div>
                <div className="ts2-skeleton-review-line ts2-skeleton-shimmer"></div>
                <div className="ts2-skeleton-review-line-short ts2-skeleton-shimmer"></div>
              </div>

              <div className="ts2-skeleton-boost-container">
                <div className="ts2-skeleton-boost-number ts2-skeleton-shimmer"></div>
                <div className="ts2-skeleton-boost-text ts2-skeleton-shimmer"></div>
              </div>
            </div>
          </div>
        </div>

        <FaCircleChevronRight className="scroll-btn right disabled" />

        <div className="arrows-container">
          <FaCircleChevronLeft className="scroll-btn disabled" />
          <FaCircleChevronRight className="scroll-btn disabled" />
        </div>
      </div>
    </div>
  )
}

export default TestimonialSliderSkeleton
