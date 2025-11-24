"use client";
import React, { useEffect, useState } from "react";
import "./Featured.css";
import { FaArrowRight, FaArrowTrendUp } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import CountUp from "../animation/CountUp";
const brands = ["/plutosec.png", "/digitalaura.png", "/carteroil.png", "/smartenergy.png"]
const typingLines = [
  "Smart Moves, Big Wins",
  "Innovate, Move, Succeed",
  "Strategy, Design, Growth",
  "Ideas That Drive Results",
  "Growth Shows Success"
];

const Featured = () => {
  const router = useRouter();
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentLine = typingLines[currentLineIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentLine.length) {
          setDisplayText(currentLine.substring(0, displayText.length + 1));
          setTypingSpeed(50);
        } else {
          // Pause at end before deleting
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentLine.substring(0, displayText.length - 1));
          setTypingSpeed(50);
        } else {
          // Move to next line
          setIsDeleting(false);
          setCurrentLineIndex((prev) => (prev + 1) % typingLines.length);
          setTypingSpeed(200);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentLineIndex, typingSpeed]);

  return (
    <div className="Featured" id="zemalt">
      <div className="left">
        <h1>
          Zemalt- <br />
          <span className="typing-text">
            {displayText}
            <span className="cursor">|</span>
          </span>
        </h1>
        <p className="desc">
          You will find a top-rated SEO agency. It has expert teams in digital marketing, design, and web development. Each service aligns clearly with your goals
        </p>
        <p className="desc">
          Zemalt moves your brand forward through smart execution and measurable growth. Every strategy works with precision to deliver impact, drive performance, and build lasting digital authority.
        </p>
        <div className="buttons-area">
          <button
            onClick={() => {
              router.push("/contact");
            }}
          >
            Schedules a call <FaArrowRight />
          </button>
          <p
            onClick={() => {
              router.push("/case-study");
            }}
          >
            View Case Study
          </p>
        </div>
        <div className="trusted">
          <p className="trusted-p">Trusted by top global brands</p>{" "}
          <div className="personarea">
            {brands.map((brand, index) => (
              <div key={index} className="trusted-circle" style={{
                backgroundImage: `url(${brand})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}></div>
            ))}
            <span>+</span>
          </div>{" "}
        </div>
      </div>
      <div className="right">
        <div className="top">
          <div className="left">
            <div className="up-icon tooltip-container" onClick={() => {
              router.push("/products");
            }}>
              <FaArrowTrendUp />
              <span className="tooltip-text">Bussiness Solutions</span>
            </div>
          </div>
          <div className="right">
            <p>
              <CountUp end={150} />+
            </p>
            <p>
              Top companies choose to work with us. Trust grows through clear
              results.
            </p>
            <div className="progress-area">
              <div className="progress-left"></div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <p>
              <hr />
              Drive More Traffic and Sales{" "}
            </p>
            <p>Drive more traffic and product sales </p>
          </div>
          <div className="right">
            <div className="item1"></div>
            <div className="item2"></div>
            <div className="item3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
