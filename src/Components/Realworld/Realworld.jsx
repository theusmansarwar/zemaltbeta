"use client";
import React, { useState, useEffect, useRef } from "react";
import "./Realworld.css";
import RealWorldPopup from "./RealWorldPopup";
import { fetchCaseStudies } from "@/DAL/Fetch";
import { baseUrl } from "@/config/Config";
import RealWorldSkeleton from "../SkeletonLoaders/RealWorldSkeleton";
import { toast } from "react-toastify";

const Realworld = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const loadCaseStudies = async () => {
      try {
        setLoading(true);
        const response = await fetchCaseStudies();

        if (response && Array.isArray(response.CaseStudies)) {
          setProjects(response.CaseStudies);
        } else {
          toast.error("No products found");
        }
      } catch (error) {
        toast.error("Error fetching case studies");
      } finally {
        setLoading(false);
      }
    };

    loadCaseStudies();
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateVisibleCards = () => {
      const cardWidth = container.children[0]?.offsetWidth || 0;
      const containerWidth = container.offsetWidth;
      const count = Math.floor(containerWidth / cardWidth) || 1;
      setVisibleCards(count);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, [projects]);

useEffect(() => {
  const container = scrollContainerRef.current;
  if (!container || projects.length === 0) return;

  const cardWidth = container.children[0]?.offsetWidth || 0;

  // Read actual gap from CSS instead of hardcoding
  const styles = window.getComputedStyle(container);
  const gap = parseInt(styles.columnGap || styles.gap || 0);

  const intervalDelay = 3000;
  let index = 0;
  const maxIndex = projects.length - visibleCards;

  const autoScroll = () => {
    index++;

    if (index > maxIndex) {
      container.scrollTo({ left: 0, behavior: "smooth" });
      index = 0;
      setCurrentPage(0);
      return;
    }

    const nextScroll = index * (cardWidth + gap);
    container.scrollTo({
      left: nextScroll,
      behavior: "smooth",
    });

    setCurrentPage(index);
  };

  const interval = setInterval(autoScroll, intervalDelay);

  return () => clearInterval(interval);
}, [visibleCards, projects.length]);


  const handleDotClick = (pageIndex) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 0;
      const gap = 24;
      const scrollPosition = pageIndex * (cardWidth + gap);
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentPage(pageIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollLeft = 0;

    const handleScroll = () => {
      const cardWidth = container.children[0]?.offsetWidth || 0;
      const gap = 24;
      const pageIndex = Math.round(container.scrollLeft / (cardWidth + gap));
      setCurrentPage(pageIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="realworld" id="marketing-objectives">
      <h3>
        Real-world examples of how we help companies in achieving their clear
        marketing objectives
      </h3>

      {loading ? (
        <RealWorldSkeleton />
      ) : (
        <>
          <div className="work-area" ref={scrollContainerRef}>
            {projects.map((project, index) => (
              <div
                className="work-div"
                key={project._id || index}
                style={{
                  backgroundImage: `url(${baseUrl + project.image || "/placeholder.png"})`,
                }}
              >
                <img
                  src={baseUrl + project.image || "/placeholder.png"}
                  alt={project.name}
                  className="work-main-img"
                />

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

          <div className="dots-wrapper">
            {Array.from({ length: Math.max(1, projects.length - visibleCards + 1) }).map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentPage ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </>
      )}

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