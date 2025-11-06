
"use client"
import React from "react";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaCalendarAlt,
  FaRegClock,
  FaClipboardList,
  FaChair,
} from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./JobSummary.css";
import { formatDate } from "@/utils/FormatDate";
import { useRouter } from "next/navigation";

const JobSummary = ({ job }) => {
  const router = useRouter()
  if (!job) return null;

  // ✅ Calculate how many days ago it was posted
  const postedDate = new Date(job.createdAt);
  const daysAgo = Math.floor(
    (Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // ✅ Posted text (today or x days ago)
  const postedText =
    daysAgo === 0
      ? "Today"
      : `${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`;

  // ✅ Format working days
  const workingDaysObj = job.WorkingDaysSchema || {};
  const trueDays = Object.entries(workingDaysObj)
    .filter(([_, value]) => value)
    .map(([day]) => day.charAt(0).toUpperCase() + day.slice(1));

  const workingDays =
    trueDays.length > 0
      ? trueDays.join(", ")
      : "Monday to Friday";

  return (
    <div className="job-summary-card">
      <button
        className="apply-btn"
        onClick={() => router.push(`/career/${job._id}/apply`)}
      >
        Apply Now
      </button>


      <div className="job-details">
        <h2 className="job-title">Job Summary</h2>

        <div className="job-item">
          <FaMapMarkerAlt className="icon" />
          <span>{job.location}</span>
        </div>

        <div className="job-item">
          <FaBriefcase className="icon" />
          <span>{job.jobtype}</span>
        </div>

        {/* ✅ Posted Date */}
        <div className="job-item">
          <FaCalendarAlt className="icon" />
          <span>
            Posted: {postedText}
          </span>
        </div>

        <div className="job-item">
          <FaClipboardList className="icon" />
          <span>Experience: {job.noofyearsexperience}</span>
        </div>

        <div className="job-item">
          <FaRegClock className="icon" />
          <span>Office Timing: {job.officetiming}</span>
        </div>

        <div className="job-item">
          <FaCalendarAlt className="icon" />
          <span>Working Days: {workingDays}</span>
        </div>

        <div className="job-item">
          <FaChair className="icon" />
          <span>No. of Vacancies: {job.noofvacancies}</span>
        </div>

        <div className="job-item">
          <FaCalendarAlt className="icon" />
          <span>Last Date to Apply: {formatDate(job.lastdatetoapply)}</span>
        </div>

        <span className="view-jobs" onClick={() => { router.push("/career") }}>
          View all jobs
        </span>
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
