"use client";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaCalendarAlt,
  FaRegClock,
  FaClipboardList,
  FaChair,
} from "react-icons/fa";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import { FaCheckCircle,FaLink } from "react-icons/fa";

import "./JobSummary.css";
import { formatDate } from "@/utils/FormatDate";
import { useRouter, usePathname } from "next/navigation";

const JobSummary = ({ job }) => {
  const router = useRouter();
  const pathname = usePathname(); // ✅ get current path
  const [copied, setCopied] = useState(false);

  if (!job) return null;

  const fullUrl = typeof window !== "undefined" ? window.location.origin + pathname : "";

  // ✅ Calculate how many days ago it was posted
  const postedDate = new Date(job.createdAt);
  const daysAgo = Math.floor((Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24));

  const postedText = daysAgo === 0 ? "Today" : `${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`;

  const workingDaysObj = job.WorkingDaysSchema || {};
  const trueDays = Object.entries(workingDaysObj)
    .filter(([_, value]) => value)
    .map(([day]) => day.charAt(0).toUpperCase() + day.slice(1));

  const workingDays = trueDays.length > 0 ? trueDays.join(", ") : "Monday to Friday";

  // ✅ Share Handlers
  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToFacebook = () =>
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`, "_blank");

  const shareToLinkedIn = () =>
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`, "_blank");

  const shareToWhatsApp = () =>
    window.open(`https://wa.me/?text=${encodeURIComponent(fullUrl)}`, "_blank");

  const shareToInstagram = () =>
    alert("Instagram doesn’t support direct link sharing — please copy the link instead.");

  return (
    <div className="job-summary-card">
      <button className="apply-btn" onClick={() => router.push(`/career/${job._id}/apply`)}>
        Apply Now
      </button>

      <div className="job-details">
        <h2 className="job-title">Job Summary</h2>

        <div className="job-item">
          <FaMapMarkerAlt className="job-icon" />
          <span>{job.location}</span>
        </div>

        <div className="job-item">
          <FaBriefcase className="job-icon" />
          <span>{job.jobtype}</span>
        </div>

        <div className="job-item">
          <FaCalendarAlt className="job-icon" />
          <span>Posted: {postedText}</span>
        </div>

        <div className="job-item">
          <FaClipboardList className="job-icon" />
          <span>Experience: {job.noofyearsexperience}</span>
        </div>

        <div className="job-item">
          <FaRegClock className="job-icon" />
          <span>Office Timing: {job.officetiming}</span>
        </div>

        <div className="job-item">
          <FaCalendarAlt className="job-icon" />
          <span>Working Days: {workingDays}</span>
        </div>

        <div className="job-item">
          <FaChair className="job-icon" />
          <span>No. of Vacancies: {job.noofvacancies}</span>
        </div>

        <div className="job-item">
          <FaCalendarAlt className="job-icon" />
          <span>Last Date to Apply: {formatDate(job.lastdatetoapply)}</span>
        </div>

        <span className="view-jobs" onClick={() => router.push("/career")}>
          View all jobs
        </span>
      </div>

      {/* ✅ Social Share Section */}
      <div className="social-share-section">
        <p>Share on:</p>
        <div className="social-icons">
          <a onClick={shareToFacebook} title="Share on Facebook">
            <FaFacebookF />
          </a>
          <a onClick={shareToLinkedIn} title="Share on LinkedIn">
            <FaLinkedinIn />
          </a>
          <a onClick={shareToWhatsApp} title="Share on WhatsApp">
            <FaWhatsapp />
          </a>
          <a onClick={shareToInstagram} title="Share on Instagram">
            <FaInstagram />
          </a>
          <a onClick={handleCopyLink} title="Copy Link">
            {copied ? <FaCheckCircle style={{ color: "#28a745" }} /> : <FaLink />}
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobSummary;
