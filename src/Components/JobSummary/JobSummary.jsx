import React from "react";
import { FaMapMarkerAlt, FaBriefcase, FaCalendarAlt, FaRegClock, FaClipboardList, FaChair } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./JobSummary.css";

const JobSummary = () => {
  return (
    <div className="job-summary-card">
      <button className="apply-btn">Apply Now</button>

      <div className="job-details">
        <h2 className="job-title">Job Summary</h2>

        <div className="job-item">
          <FaMapMarkerAlt className="icon" />
          <span>Lahore</span>
        </div>

        <div className="job-item">
          <FaBriefcase className="icon" />
          <span>Full Time</span>
        </div>

        <div className="job-item">
          <FaCalendarAlt className="icon" />
          <span>Posted 1 month ago</span>
        </div>

        <div className="job-item">
          <FaClipboardList className="icon" />
          <span>Experience: 1-3 years</span>
        </div>

        <div className="job-item">
          <FaRegClock className="icon" />
          <span>9 AM - 6 PM</span>
        </div>

        <div className="job-item">
          <FaCalendarAlt className="icon" />
          <span>Weekly: 5 days | Weekend: Sat, Sun</span>
        </div>

        <div className="job-item">
          <FaChair className="icon" />
          <span>No. of Vacancies: 3</span>
        </div>

        <a href="#" className="view-jobs">View all jobs</a>
      </div>

      <div className="social-icons">
        <FaFacebook />
        <FaTwitter />
        <FaLinkedin />
        <FaInstagram />
      </div>
    </div>
  );
};

export default JobSummary;
