"use client";
import React, { useState, useEffect } from "react";
import "./Realworld.css";
import RealWorldPopup from "./RealWorldPopup";
import { fetchCaseStudies } from "@/DAL/Fetch";
import { baseUrl } from "@/config/Config";
import RealworldSkeleton from "../SkeletonLoaders/RealWorldSkeleton";
import RealWorldSkeleton from "../SkeletonLoaders/RealWorldSkeleton";

const Realworld = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCaseStudies = async () => {
      try {
        setLoading(true);
        const response = await fetchCaseStudies();

        if (response && Array.isArray(response.CaseStudies)) {
          setProjects(response.CaseStudies);
        } else {
          console.error("Unexpected API response:", response);
        }
      } catch (error) {
        console.error("Error fetching case studies:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCaseStudies();
  }, []);


  return (
    <div className="realworld" id="marketing-objectives">
      <h3>
        Real-world examples of how we help companies in achieving their clear
        marketing objectives
      </h3>

      {/* Show skeletons while loading */}
      {loading ? (
        <RealWorldSkeleton />
      ) : (
        <div className="work-area">
          {projects.map((project, index) => (
            <div
              className="work-div"
              key={project._id || index}
              style={{
                backgroundImage: `url(${baseUrl + project.image || "/placeholder.png"})`,
              }}
            >
              <div className="work-overlay">
                <p>
                  <span />
                  {project.name}
                </p>
                <p className="desc">{project.shortdescription}</p>
                <div
                  className="detail-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  See More
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Popup */}
      {selectedProject && (
        <RealWorldPopup
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );

};

export default Realworld;
