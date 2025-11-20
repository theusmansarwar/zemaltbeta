"use client";
import React, { useState, useEffect, useRef } from "react";
import "./OutBox.css";
import { FaPlay } from "react-icons/fa";
import CountUp from "../animation/CountUp";

const brands = ["/sim.png", "/moawin.png", "/broadium.png"];

const OutBox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const rightSectionRef = useRef(null);

  const fullText = "HOW  WE  WORK";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // 👇 RESET so animation can restart next time
            setIsVisible(false);
            setDisplayedText(""); 
          }
        });
      },
      { threshold: 0.4 } // smoother trigger
    );

    if (rightSectionRef.current) observer.observe(rightSectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    setDisplayedText(""); 

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div className="OutBox" id="unique-ideas">
      <div className="top">
        <h2>Delivering the Best Services with Unique Ideas</h2>
        <p>
          Zemalt is a skilled team of experts. Brands get full support to grow
          online. Each goal receives clear focus and effort. Our experts bring
          deep knowledge and experience. We work at the front edge of trends and
          tools.
        </p>
      </div>

      <div className="bottom">
        <div className="left">
          <div className="ltop">
            <h3>
              <strong><CountUp end={50} /></strong>
              <span> +</span>
            </h3>
            <p>Projects finished superbly</p>
          </div>

          <div className="circleimg-area">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="circleimg"
                style={{
                  backgroundImage: `url(${brand})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            ))}
            <span className="plus">+</span>
          </div>
        </div>

        <div className="right" ref={rightSectionRef}>
          <div className="overlay">
            <p className="animated-text">
              {/* {displayedText.split("").map((char, i) => (
                <span key={i} className="char" style={{ animationDelay: `${i * 0.07}s` }}>
                  {char}
                </span>
              ))} */}
              HOW WE WORK
            </p>

            <div className="play-box">
              <FaPlay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutBox;
