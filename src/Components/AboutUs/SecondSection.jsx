"use client"
import React from "react";
import "./SecondSection.css";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const SecondSection = () => {
  const router = useRouter();
  return (
    <div className="second-section">
      <div className="left">
        <h2>Grow Your Brand Online</h2>
        <p>
          Your business needs clear steps to grow. A strong online presence
          gives you reach and trust. People look for brands that show value and
          stay easy to find. It is hard to stand out if your message looks weak.
          You need design that looks sharp and words that connect.
        </p>
        <p>
          Our work stays simple and clear. Each project aims to give you results
          that last. Our team studies your market and shapes a plan that fits.
          You get designs that guide users. You get content that speaks in a
          human tone.
        </p>
        <p>
          Each step keeps focus on results. We create pages that guide users
          from start to goal. The aim is to keep every click smooth and simple.
          Your site gets more reach when users stay longer. Search engines also
          notice and reward your brand.
        </p>
        <p>
          A fresh brand look builds trust fast. Your clients see that your work
          is authentic. Your online presence feels solid and ready. Our team
          provides expertise in design, SEO, and ads. Your growth remains steady
          when every part works together. You can move your brand forward today.
          A smart plan will put you ahead.
        </p>
      </div>
      <div className="right">
        <div className="top-parent">
          <div className="top">
            <div className="content">
              <strong>
                50 <img src="/plus-icon.svg" alt="Add Icon" />
              </strong>
              <p>
                We have worked on many projects. Our work is always focused on
                results. Clients trust us because we care for each detail. Every
                task holds value. You get work that feels clear and true. Your
                project gets the same effort and focus.
              </p>

              <div className="progress-area">
                <div className="progress-left"></div>
              </div>
            </div>
            <div className="img-section">
              <div
                className="box1"
                style={{
                  backgroundImage: `url(/blog-thumbnail.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div
                className="box2"
                style={{
                  backgroundImage: `url(/top.webp)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>
        </div>
        <button className="proposal-btn" onClick={()=>{router.push("/contact")}}>Get Proposal <FaArrowRight /></button>
      </div>
    </div>
  );
};

export default SecondSection;
