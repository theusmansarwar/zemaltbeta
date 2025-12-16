"use client"
import React from "react";
import "./OurFormat.css";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const OurFormat = () => {
  const router = useRouter();
  return (
    <div className="our-format">
      <div className="left">
        <h2>What’s Our Format?</h2>
        <p>
          We welcome writers who share clear ideas, useful tips, and real
          knowledge. <a href="https://zemalt.com/">
          Zemalt
        </a> values content that is simple and easy to read.
          Every article must help the reader, reflect your expertise, and
          connect with the needs of business owners.
        </p>
        <p>
          We accept guides, case studies, trend reviews, and step-by-step tips.
          Each article should solve a problem, answer a question, and explain a
          strategy that works. The writing must stay focused and avoid empty
          words. Quality, relevance, and truth are always the most important
          parts.
        </p>
        <p>
          You also reach a wide audience of business owners and marketers. Your
          work helps readers learn, make better choices, and grow in their
          fields. It also builds your trust and gives long-term value to your
          name.
        </p>
        <p>
          Zemalt gives every contributor a fair chance to stand out. Your ideas
          are not lost in the crowd but placed in front of readers who want
          answers. Each post is reviewed with care to give you value.
        </p>
      </div>
      <div className="right">
        <div className="top-parent">
          <div className="top">
            <div className="content">
              <strong>
                230 <img src="/plus-icon.svg" alt="Add Icon" />
              </strong>
              <p>
                More than 230 contributors are already part of our platform. The community has marketers, writers, business owners, designers, and other professionals.
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
                  backgroundImage: `url(/blog-thumbnail.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>
        </div>
        <button className="proposal-btn" onClick={()=>{router.push("/contact")}}>
          Send Your Query Here <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default OurFormat;
