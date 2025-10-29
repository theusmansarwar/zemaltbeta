"use client";
import React from "react";
import "./ServiceCard.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";

const ServiceCard = ({ data }) => {
  const router = useRouter();
  const pathname = usePathname(); // gives you /services/something
  const currentpath = pathname.split("/").pop();
  return (
    <div className="designing-page-grid">
      <img className="rightimage" src="/right.png" alt="right decoration" />
      <img className="leftimage" src="/left.png" alt="left decoration" />

      {data.map((card, index) => (
        <div className="designing-card" key={index}>
          <div className="icon-area-for-des">
            <img src="/hands.png" alt="icon" />
          </div>
          <h3>{card.title}</h3>
         {card.short_description && (
            <div
              dangerouslySetInnerHTML={{
                __html: card.short_description,
              }}
            />
          )}

          <div
            className="designing-card-btn"
            onClick={() => {
              router.push(`${currentpath}/${card.slug}`);
            }}
          >
            View Portfolio <FaArrowRightLong />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
