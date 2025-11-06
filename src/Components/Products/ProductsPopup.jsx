"use client"
import React from "react";
import "./ProductsPopup.css";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { baseUrl } from "@/config/Config";
import { useRouter } from "next/navigation";

const ProductsPopup = ({ onClose, project }) => {
  const router = useRouter();

  return (
    <div className="products-popup-parent">
      <div className="products-popup">
        <IoCloseCircleSharp className="close-icon" onClick={onClose} />

        <div className="top">
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

          <button className="proposal-btn" onClick={() => { router.push("/contact") }}>
            Talk to Our Expert <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPopup;
