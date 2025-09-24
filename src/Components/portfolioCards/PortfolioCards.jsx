"use client";
import React, { useState } from "react";
import "./PortfolioCards.css";
import { FaArrowRightLong } from "react-icons/fa6";
import PortfolioPopup from "./PortfolioPopup";
const projectsToShow = [
  {
    name: "Number of Pages",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, dolorum. Corporis impedit explicabo, reiciendis molestias, totam vitae placeat rerum qui quam itaque necessitatibus. Ipsa voluptate architecto eligendi harum non iusto illum quam at enim recusandae et, sunt dicta temporibus excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, dolorum. Corporis impedit explicabo, reiciendis molestias, totam vitae placeat rerum qui quam itaque necessitatibus. Ipsa voluptate architecto eligendi harum non iusto illum quam at enim recusandae et, sunt dicta temporibus excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at.",
    image: "/how-we-work.png",
  },
  {
    name: "Responsive Design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, dolorum. Corporis impedit explicabo, reiciendis molestias, totam vitae placeat rerum qui quam itaque necessitatibus. Ipsa voluptate architecto eligendi harum non iusto illum quam at enim recusandae et, sunt dicta temporibus excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, dolorum. Corporis impedit explicabo, reiciendis molestias, totam vitae placeat rerum qui quam itaque necessitatibus. Ipsa voluptate architecto eligendi harum non iusto illum quam at enim recusandae et, sunt dicta temporibus excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at.",
    image: "/how-we-work.png",
  },
  {
    name: "Style of Design",
    description:
      "Pick a style that matches your brand’s identityLorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, dolorum. Corporis impedit explicabo, reiciendis molestias, totam vitae placeat rerum qui quam itaque necessitatibus. Ipsa voluptate architecto eligendi harum non iusto illum quam at enim recusandae et, sunt dicta temporibus excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, dolorum. Corporis impedit explicabo, reiciendis molestias, totam vitae placeat rerum qui quam itaque necessitatibus. Ipsa voluptate architecto eligendi harum non iusto illum quam at enim recusandae et, sunt dicta temporibus excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at.",
    image: "/how-we-work.png",
  },
];

const PortfolioCards = ({title}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const handleOpen = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div>
      <div className="Portfolio-card-area">
        <h2>{title}</h2>
        {projectsToShow.map((project, index) => (
          <div className="Portfolio-card-div" key={index}>
            <div
              className="project-thumbnail"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="Project-mid">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <div className="portfolio-btn-area">
              <div
                className="visit-project-btn"
                onClick={() => handleOpen(project)}
              >
                Visit Website <FaArrowRightLong />
              </div>
            </div>
          </div>
        ))}
        <button className="see-btn">See More</button>
      </div>
      {/* ✅ Show Popup if open */}
      {isOpen && (
        <PortfolioPopup project={selectedProject} onClose={handleClose} />
      )}
    </div>
  );
};

export default PortfolioCards;
