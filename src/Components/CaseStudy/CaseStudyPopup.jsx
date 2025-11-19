import React, { useState } from "react";
import "./CaseStudyPopup.css";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";
import { baseUrl } from "@/config/Config";
import { toast } from "react-toastify";

const CaseStudyPopup = ({ onClose, project }) => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100

  const handleDownload = async () => {
    if (downloading) return; // prevent multiple clicks
    setDownloading(true);
    setProgress(0);

    try {
      const response = await fetch(baseUrl + project.file);
      if (!response.ok) throw new Error("Failed to download file");

      const contentLength = response.headers.get("content-length");
      if (!contentLength) {
        throw new Error("Cannot determine file size");
      }

      const total = parseInt(contentLength, 10);
      let loaded = 0;

      const reader = response.body.getReader();
      const chunks = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        loaded += value.length;
        setProgress(Math.round((loaded / total) * 100));
      }

      const blob = new Blob(chunks);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = project.name ? `${project.name}.pdf` : "file.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      toast.error("Download error: " + error.message);
    } finally {
      setDownloading(false);
      setProgress(0);
    }
  };
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("study-popup-parent")) {
      onClose();
    }
  };

  return (
    <div className="study-popup-parent" onClick={handleOverlayClick}>
      <div className="study-popup">
        <IoCloseCircleSharp className="close-icon" onClick={onClose} />
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
            <div
              className="dangerously-set-data"
              dangerouslySetInnerHTML={{ __html: project.detail }}
            />
          )}

          <button
            className="proposal-btn"
            onClick={handleDownload}
            disabled={downloading}
          >
            <span>
              {downloading ? `Downloading ${progress}%` : "Download PDF"}
            </span>{" "}
            <FaArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPopup;
