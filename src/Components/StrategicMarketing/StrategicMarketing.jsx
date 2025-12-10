"use client";
import React from "react";
import "./StrategicMarketing.css";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const StrategicMarketing = ({ data }) => {
  const router = useRouter();

  return (
    <div className="strategic-marketing" id="digitalmarketing">
      <div>
        {data.title && <h2>{data.title}</h2>}

        <div
          className="dangerously-set-data"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>

      <button className="proposal-btn" onClick={() => router.push("/contact")}>
        Get a Proposal
        <FaArrowRight />
      </button>
    </div>
  );
};

export default StrategicMarketing;
