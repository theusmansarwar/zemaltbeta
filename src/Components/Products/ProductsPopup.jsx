"use client"
import React from "react";
import "./ProductsPopup.css";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { baseUrl } from "@/config/Config";
import { useRouter } from "next/navigation";

const ProductsPopup = ({ onClose, project }) => {
  const router = useRouter();
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("products-popup-parent")) {
      onClose();
    }
  };
  return (
    <div className="products-popup-parent" onClick={handleOverlayClick}>
      <div className="products-popup">
        {/* <IoCloseCircleSharp className="close-icon" onClick={onClose} /> */}

        <div className="top">
          <div
            className="blur-bg"
            style={{ backgroundImage: `url(${baseUrl + project.image})` }}
          ></div>
          <img src={baseUrl + project.image} alt={project.name} />
        </div>
        <div className="bottom">
          <h2>{project.name}</h2>
          {project.detail && (
            <div className="dangerously-set-data"
              dangerouslySetInnerHTML={{
                __html: project.detail,
              }}
            />
          )}

          <button className="cntct-btn" onClick={() => { router.push("/contact") }}>
            Talk to Our Expert <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPopup;
