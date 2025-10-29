"use client"
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./TalkToExpert.css";
import { useRouter } from "next/navigation";
const TalkToExpert = ({ data }) => {
  const router = useRouter();
  return (
    <div className="talk-to-expert">
      <h2>{data.title}</h2>
      <div className="expert-content">
        <div className="left">
          <p>{data.description}</p>
          <button className="expert-btn" onClick={() => { router.push("/contact") }}>
            Talk To Expert <FaArrowRight />
          </button>
        </div>
        <img src="/expert-arrow.svg" alt="Arrow Image" />
      </div>
    </div>
  );
};

export default TalkToExpert;
