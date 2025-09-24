import React from "react";
import "./TestimonialSection.css";
import Cards from "./Cards";
const TestimonialSection = () => {
  return (
    <div className="TestimonialSection" id="reviews">
      <img src="/Vector.png" className="testimonial-icon" />
      <div className="Testimonial-header">
        <h2>What Our Clients Say About Results</h2>

        <p>
          Zemalt is a premier digital marketing agency for brand-focused
          companies. We offer a full range of services to help clients increase
          their search visibility, and through smart SEO strategies, we drive
          more traffic to their websites.
        </p>
      </div>

      <Cards />
    </div>
  );
};

export default TestimonialSection;
