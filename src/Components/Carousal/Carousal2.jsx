"use client"
import React from "react";
import "./Carousal2.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Carousal2 = ({heading,link}) => {
  const router = useRouter();
  return (
    <div className="carousal2">
      <h2>{heading}</h2>
      <button
        onClick={() => {
          router.push(link);
        }}
      >
        Get Started <FaArrowRightLong />
      </button>
    </div>
  );
};

export default Carousal2;
