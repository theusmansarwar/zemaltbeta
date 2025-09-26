"use client";
import React, { useEffect, useState } from "react";
import "./CaseStudy.css";
import { FaArrowRightLong } from "react-icons/fa6";
import CaseStudyPopup from "./CaseStudyPopup";
import { baseUrl } from "@/config/Config";
import truncateTextByWords from "@/utils/TruncateByWords";
import { fetchCaseStudies } from "@/DAL/Fetch";
import CaseStudySkeleton from "../SkeletonLoaders/CaseStudySkeleton";

const CaseStudy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getCaseStudies = async () => {
      try {
        const res = await fetchCaseStudies();
        setCaseStudy(res.CaseStudies);
      } catch (err) {
        console.error("Error fetching industries:", err);
      } finally {
        setLoading(false);
      }
    };

    getCaseStudies();
  }, []);

  if (loading) {
    return <CaseStudySkeleton />;
  }

  const handleOpen = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="case-study-grid">
      {caseStudy?.map((item) => (
        <div key={item.id} className="study-card">
          {/* Left Side (Image) */}
          <div className="left">
            <div className="img-container">
              <img src={baseUrl + item.image} alt={item.title} />
            </div>
          </div>

          {/* Right Side (Content) */}
          <div className="right">
            <h2>{item.name}</h2>
            {item.description && (
              <div
                dangerouslySetInnerHTML={{
                  __html: truncateTextByWords(item.description, 300),
                }}
              />
            )}
            <button className="study-btn" onClick={() => handleOpen(item)}>
              Learn More <FaArrowRightLong />
            </button>
          </div>
        </div>
      ))}
      {/* ✅ Show Popup if open */}
      {isOpen && (
        <CaseStudyPopup project={selectedProject} onClose={handleClose} />
      )}
    </div>
  );
};

export default CaseStudy;
