"use client";
import React, { useState } from "react";
import "./MapSection.css";

const mapSectionData = {
  heading: "Contact Us",
  description: `<p>Get in touch with Zemalt and take the first step toward digital growth. Our contact page gives you direct access to our team and services. You can easily share your goals, ask questions, or request details about how we can support your business.</p>
    <p>Our experts are ready to guide you on SEO services, social media marketing, paid advertising, and graphic design. Every query matters to us, and we provide quick responses with clear solutions. Businesses choose Zemalt agency because we listen, understand, and create plans that drive real growth.</p>
        <p>Contact us today and start your journey with a trusted <a href='https://zemalt.com/'>digital marketing partner</a>. Tell us what you need, and we will build a strategy that fits your brand and delivers results. Your success is our priority, and our team is here to help you take the next step.</p>
    <p>You can use this page to request a free consultation or ask for a custom plan. Our process is simple, and we make sure you get the right answers without delay. We value every message and reply with the details that match your needs.</p>"
    <p>Zemalt believes in long-term partnerships. We are here to support your business not only today but also in the future. By contacting us, you take the first step toward better visibility, stronger online presence, and consistent digital growth.</p>`,
};
const MapSection = () => {
  // const [expanded, setExpanded] = useState(false);

  // const toggleReadMore = () => {
  //   setExpanded(!expanded);
  // };
  return (
    <div className="map-section">
      <div className="left">
        <h2 className="map-section-heading">{mapSectionData.heading}</h2>

        <div
          className="map-section-content"
          dangerouslySetInnerHTML={{
            __html: mapSectionData.description,
          }}
        />

        {/* <div className="read-more-btn" onClick={toggleReadMore}>
          {expanded ? "Read Less -" : "Read More +"}
        </div> */}
      </div>

      <div className="right">
        <img src="/location.svg" alt="Zemalt Address" />
      </div>
    </div>
  );
};

export default MapSection;
