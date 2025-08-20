import React from "react";
import "./TestimonialSection.css";
import Cards from "./Cards";
import { FaQuoteRight } from "react-icons/fa6";
const TestimonialSection = () => {
  return (
    <div className="TestimonialSection">
      <img src="/Vector.png" className="testimonial-icon" />
      <div className="Testimonial-header">
        <h2>What Our Clients Say About Results</h2>

        <p>
          Zemalt is the premier digital marketing agency for brand-focused
          companies. We offer a full range of services to help clients grow
          search visibility. More traffic reaches their websites through smart
          SEO work.
        </p>
      </div>

      <Cards />
    </div>
  );
};

export default TestimonialSection;
