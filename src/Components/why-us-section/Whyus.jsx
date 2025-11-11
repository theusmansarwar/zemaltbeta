"use client";
import React from "react";
import "./Whyus.css";
import "../BlogSection/BlogSection.css";
import { PiSpiralLight } from "react-icons/pi";
import { useRouter } from "next/navigation";
const Whyus = () => {
  const router = useRouter();
  return (
    <section className="why-us-section" id="why-choose-zemalt">
      <div className="blog-header">
        <div className="header-left2">
          <h2>
            Why You Should Choose Zemalt as Your Digital Marketing Partner
          </h2>
        </div>
        <div className="header-right2">
          <p>
            Zemalt is a top digital marketing agency for brand-focused firms,
            offering comprehensive services to enhance search rankings. Our
            expert support helps drive more traffic to client websites.
          </p>
          <button
            className="see-more"
            onClick={() => {
              router.push("/contact");
            }}
          >
            Schedules a call
          </button>
        </div>
      </div>

      <div className="whyus-area">
        <div className="why-usleft">
          <img src="/left.webp"  alt="why us"/>
          <div className="outer-area1">
            <div className="card">
              <div className="icon-area">
                <PiSpiralLight />
              </div>
              <div className="card-body">
                <h3>Proven Expertise</h3>
                <p>
                  Zemalt’s experts have years of industry experience. They apply
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
                <h3>Tailored Strategies</h3>
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
          <img src="/right.webp"  alt="why us"/>
          <div className="outer-area1">
            <div className="card">
              <div className="icon-area">
                <PiSpiralLight />
              </div>
              <div className="card-body">
                <h3>Full-Service Support</h3>
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
                <h3>Transparent Reporting</h3>
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
