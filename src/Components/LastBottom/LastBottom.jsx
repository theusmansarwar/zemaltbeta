"use client"
import React from "react";
import "./LastBottom.css";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";

export default function LastBottom() {
  const router = useRouter();
  return (
    <section className="lastbottom">
      <div className="lastbottom-left">
        <h2>Smart Solutions for Your Brand</h2>
        <p>
          We focus on strategies that bring real growth, not just numbers. Our approach ensures better reach, stronger connections, and long-term success. You get solutions designed to adapt to changing trends.
        </p>
        <button className="lastbottom-btn" onClick={() => {
          router.push("/contact");
        }}
        >
          Schedules a call <FaArrowRight />
        </button>
      </div>

      <div className="lastbottom-right">
        <div className="lastbottom-image">
          {/* <div className="image-text">LOREMIPSUM</div> */}
        </div>
      </div>
    </section>
  );
}
