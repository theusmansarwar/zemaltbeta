import React from "react";
import "./Whyus.css";
import "../BlogSection/BlogSection.css";
import { TiSpiral } from "react-icons/ti";
import { PiSpiralLight } from "react-icons/pi";
const Whyus = () => {
  return (
    <section className="why-us-section">
      <div className="blog-header">
        <div className="header-left2">
          <h2>
            Why You Should Choose Zemalt as Your Digital Marketing Partner
          </h2>
        </div>
        <div className="header-right2">
          <p>
            We are a top digital marketing agency for brand-focused firms. Offer
            comprehensive services to enhance search rankings. Our expert
            support drives more traffic to client websites.
          </p>
          <button className="see-more">See more</button>
        </div>
      </div>

      <div className="whyus-area">
        <div className="why-usleft">
          <img src="/left.png" />
          <div className="outer-area1">
            <div className="card">
              <div className="icon-area">
                <PiSpiralLight />
              </div>
              <div className="card-body">
                <h4>Proven Expertise</h4>
                <p>
                  Our experts have years of industry experience. They apply
                  tested methods and fresh ideas to deliver consistent results.
                  You benefit from skills that drive success.
                </p>
              </div>
            </div>
          </div>
          <div className="outer-area1">
            <div className="card">
              <div className="icon-area">
                <PiSpiralLight />
              </div>
              <div className="card-body">
                <h4>Tailored Strategies</h4>
                <p>
                  Zemalt designs every plan around your goals. Each step matches
                  your brand’s needs. You get solutions that bring the highest
                  return.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="why-usright">
          <img src="/right.png" />
          <div className="outer-area1">
            <div className="card">
              <div className="icon-area">
                <PiSpiralLight />
              </div>
              <div className="card-body">
                <h4>Full-Service Support</h4>
                <p>
                  Zemalt covers SEO, Google Ads, Social Media Marketing, Content
                  Writing, PPC, Web Development and UI/UX Design for better
                  results.
                </p>
              </div>
            </div>
          </div>
          <div className="outer-area1">
            <div className="card">
              <div className="icon-area">
              <PiSpiralLight />
              </div>
              <div className="card-body">
                <h4>Transparent Reporting</h4>
                <p>
                  We share clear reports on your progress. You see the impact of
                  each step. You make informed decisions for future growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
