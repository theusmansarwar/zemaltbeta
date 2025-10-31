"use client";
import React, { useState } from "react";
import "./ServicesDropDown.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

const ServicesDropDown = ({ services }) => {
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMainServiceClick = (service) => {
      router.push(`/services/${service.slug}`);
  };

  const handleSubServiceClick = (mainSlug, subSlug) => {
    if (mainSlug.startsWith("http")) {
      window.open(mainSlug, "_blank");
    } else {
      router.push(`/services/${mainSlug}/${subSlug}`);
    }
  };

  return (
    <div className="maindropdown">
      <div className="top">
        <h2 className="dropdown-heading">OUR PREMIUM SERVICES</h2>
        <h2 className="dropdown-heading">WHAT WE SERVE</h2>
      </div>

      <div className="bottom">
        {/* Left Menu */}
        <div className="left">
          <ul>
            {services.map((service, index) => (
              <li
                key={index}
                onMouseEnter={() => setSelectedIndex(index)}
                onClick={() => handleMainServiceClick(service)}
                className={selectedIndex === index ? "active" : ""}
              >
                <span>{service.name}</span>
                <FaArrowRightLong />
              </li>
            ))}
          </ul>
        </div>

        {/* Center Menu */}
        <div className="mid">
          <ul>
            {services[selectedIndex]?.items?.map((item, i) => (
              <li key={i} className="active">
                <span
                  onClick={() =>
                    handleSubServiceClick(
                      services[selectedIndex].slug,
                      item.slug
                    )
                  }
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="right">
          <img src="/dropdown-img.svg" alt="" />
          <p
            className="view-all-btn"
            onClick={() => {
              router.push("/case-study");
            }}
          >
            Check Examples <FiArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropDown;
