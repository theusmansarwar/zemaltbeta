import React from "react";
import "./TestimonialSection.css";
import Cards from "./Cards";
import { FaQuoteRight } from "react-icons/fa6";
const TestimonialSection = () => {
  return (
    <div className="TestimonialSection">
        <img src="/Vector.png" className="testimonial-icon"/>
      <div className="Testimonial-header">
        <h2>
          Digital Marketing & SEO Services That Grow Traffic & Increase Revenue
        </h2>

        <p>
          We are the top digital marketing agency for branding corp. We offer a
          full range of services to help clients improve their search engine
          rankings and drive more traffic to their websites.
        </p>
      </div>

      <Cards />
    </div>
  );
};

export default TestimonialSection;
