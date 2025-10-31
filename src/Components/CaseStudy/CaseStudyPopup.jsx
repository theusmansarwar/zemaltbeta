import React from "react";
import "./CaseStudyPopup.css";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";
import { baseUrl } from "@/config/Config";

const CaseStudyPopup = ({ onClose, project }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(baseUrl + project.file, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to download file");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = project.name ? `${project.name}.pdf` : "file.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();

      // Cleanup blob URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
    }
  };

  return (
    <div className="study-popup-parent">
      <div className="study-popup">
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

          <button className="proposal-btn" onClick={handleDownload}>
            <span>Download PDF</span> <FaArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPopup;
