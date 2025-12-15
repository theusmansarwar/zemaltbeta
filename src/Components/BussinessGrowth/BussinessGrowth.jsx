"use client";
import React from "react";
import "./BussinessGrowth.css";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const BussinessGrowth = () => {
  const router = useRouter();

  return (
    <div className="bussiness-growth">
      <div className="left">
        <h2>Accelerate Your Business Growth with Expert Digital Marketing</h2>
        <p>
          Leading brands have unlocked significant growth through campaigns
          crafted to reach the right audience and spark engagement. Zemalt has
          helped clients expand{" "}
          <a href="https://zemalt.com/services/seo">
            {" "}
            online visibility, strengthen brand credibility{" "}
          </a>
          , and generate real revenue. Past campaigns have delivered impressive
          results, driving traffic, qualified leads, and tangible outcomes.
          Achieve similar impact and scale your digital presence efficiently
          with strategies focused on conversions, performance, and lasting
          success.
        </p>
        <button
          className="proposal-btn"
          onClick={() => {
            router.push("/contact");
          }}
        >
          Get a Proposal
          <FaArrowRight />
        </button>
      </div>
      <div className="right">
        <img src="/services-main.webp" alt="Zemalt Services" />
      </div>
    </div>
  );
};

export default BussinessGrowth;
