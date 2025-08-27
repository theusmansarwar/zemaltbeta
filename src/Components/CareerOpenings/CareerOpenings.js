'use client'
import React, { useState } from "react";
import "./CareerOpenings.css";

const CareerOpenings = () => {
  const [activeCategory, setActiveCategory] = useState("Development");

  const categories = [
    { name: "Admin" },
    { name: "Development", count: 20 },
    { name: "Support" },
    { name: "Design" },
    { name: "Digital Marketing" },
  ];

  const jobs = [
    {
      title: "Wordpress Developer",
      experience: "2 Years",
      deadline: "2021-05-08",
      category: "Development",
    },
    {
      title: "Javascript",
      experience: "1 Years",
      deadline: "2021-05-08",
      category: "Development",
    },
    {
      title: "Apps Developer",
      experience: "3 Years",
      deadline: "2021-05-08",
      category: "Development",
    },
    {
      title: "IOS Developer",
      experience: "2 Years",
      deadline: "2021-05-08",
      category: "Development",
    },
    {
      title: "Node JS Developer",
      experience: "3 Years",
      deadline: "2021-05-08",
      category: "Development",
    },
  ];

  return (
    <div className="career-container">
      <h5 className="subtitle">COME JOIN US</h5>
      <h2 className="title">Career Openings</h2>
      <p className="description">
        We're always looking for creative, talented self-starters to join the JMC family.
        <br />
        Check out our open roles below and fill out an application.
      </p>

      <div className="career-layout">
        {/* Categories */}
        <div className="career-categories">
          {categories.map((cat, i) => (
            <p
              key={i}
              className={`category ${activeCategory === cat.name ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.name)}
            >
              {cat.name} {cat.count && <span>({cat.count})</span>}
            </p>
          ))}
        </div>

        {/* Job Listings */}
        <div className="career-jobs">
          {jobs
            .filter((job) => job.category === activeCategory)
            .map((job, i) => (
              <div className="job-card" key={i}>
                <div className="job-title">{job.title}</div>
                <div className="job-info">
                  <span>
                    <strong>Experience</strong> <br /> {job.experience}
                  </span>
                  <span>
                    <strong>Deadline</strong> <br /> {job.deadline}
                  </span>
                  <span className="arrow">→</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CareerOpenings;
