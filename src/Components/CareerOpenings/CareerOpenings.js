"use client";
import React, { useEffect, useState } from "react";
import "./CareerOpenings.css";
import { fetchJobs } from "@/DAL/Fetch";
import { useRouter } from "next/navigation";
import { FaRightLong } from "react-icons/fa6";

const CareerOpenings = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch jobs from backend
  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);
        const res = await fetchJobs();

        if (res?.status === 200 && res?.jobs?.length > 0) {
          setJobs(res.jobs);

          // Get unique categories with count
          const uniqueCategories = res.jobs.reduce((acc, job) => {
            const cat = job.jobCategory || "Uncategorized";
            acc[cat] = (acc[cat] || 0) + 1;
            return acc;
          }, {});

          const formatted = Object.keys(uniqueCategories).map((name) => ({
            name,
            count: uniqueCategories[name],
          }));

          setCategories(formatted);
          setActiveCategory(formatted[0]?.name || "");
        } else {
          setJobs([]);
          setCategories([]);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  return (
    <div className="career-container">
      <h5 className="subtitle">COME JOIN US</h5>
      <h2 className="title">Career Openings</h2>
      <p className="description">
        We're always looking for creative, talented self-starters to join the JMC family.
        <br />
        Check out our open roles below and fill out an application.
      </p>

      {loading ? (
        <p className="loading-text">Loading job openings...</p>
      ) : (
        <div className="career-layout">
          {/* Categories */}
          <div className="career-categories">
            {categories.length > 0 ? (
              categories.map((cat, i) => (
                <p
                  key={i}
                  className={`category ${activeCategory === cat.name ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat.name)}
                >
                  {cat.name} <span>({cat.count})</span>
                </p>
              ))
            ) : (
              <p>No categories found</p>
            )}
          </div>

          {/* Job Listings */}
          <div className="career-jobs">
            {jobs
              .filter((job) => job.jobCategory === activeCategory)
              .map((job, i) => (
                <div className="job-card" key={i}>
                  <div className="job-title">{job.jobtitle}</div>
                  <div className="job-info">
                    <span>
                      <strong>Experience</strong> <br /> {job.noofyearsexperience || "N/A"}
                    </span>
                    <span>
                      <strong>Deadline</strong> <br />{" "}
                      {job.lastdatetoapply
                        ? new Date(job.lastdatetoapply).toLocaleDateString()
                        : "N/A"}
                    </span>
                    <span className="arrow" onClick={()=>{router.push(`/career/${job._id}`)}}><FaRightLong /></span>
                  </div>
                </div>
              ))}

            {jobs.filter((job) => job.jobCategory === activeCategory).length === 0 && (
              <p className="no-jobs">No jobs available in this category.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerOpenings;
