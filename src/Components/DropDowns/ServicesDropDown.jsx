"use client";
import React, { useState, useEffect } from "react";
import "./ServicesDropDown.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { useRouter, usePathname } from "next/navigation";
import { baseUrl } from "@/config/Config";

const ServicesDropDown = ({ services ,onClose }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // ✅ Automatically highlight active service based on URL
  useEffect(() => {
    if (services && pathname.includes("/services")) {
      const foundIndex = services.findIndex((s) =>
        pathname.includes(s.slug)
      );
      if (foundIndex !== -1) {
        setSelectedIndex(foundIndex);
      }
    }
  }, [pathname, services]);

  const handleMainServiceClick = (service) => {
    router.push(`/services/${service.slug}`);
    onClose?.(); //  CLOSE DROPDOWN
  };

  const handleSubServiceClick = (mainSlug, subSlug) => {
    if (mainSlug.startsWith("http")) {
      window.open(mainSlug, "_blank");
    } else {
      router.push(`/services/${mainSlug}/${subSlug}`);
        onClose?.(); //  CLOSE DROPDOWN
    }
  };

  console.log(`${baseUrl + services.menuImage} `);
  console.log(services);


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
              <li key={i}>
                <span
                  onClick={() =>
                    handleSubServiceClick(
                      services[selectedIndex].slug,
                      item.slug
                    )
                  }
                  className={
                    pathname.includes(item.slug) ? "active-sub" : ""
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
          <img
            src={baseUrl + services[selectedIndex]?.menuImage}
            alt={services[selectedIndex]?.name}
          />

          <p
            className="view-all-btn"
            onClick={() => {
              router.push("/case-study");
                onClose?.(); //CLOSE DROPDOWN
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
