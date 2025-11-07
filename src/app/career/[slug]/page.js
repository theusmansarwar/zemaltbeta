import JobDescription from "@/Components/JobDescription/JobDescription";
import JobSummary from "@/Components/JobSummary/JobSummary";
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";
import { fetchJobById } from "@/DAL/Fetch";
import React from "react";
import styles from "./apply/page.module.css";


const Page = async ({ params }) => {
  const { slug } = params;

  // Fetch job details
  const response = await fetchJobById(slug);
  const job = response?.job || null;

  const featuredData = {
    title: "JOIN",
    spanTitle: "US",
    description:
      "You need a clear design that grows your brand. Zemalt creates sharp ideas that keep your style strong. You gain trust through smart detail and clean art. Each project shows focus and clear results.",
  };

  return (
    <div className="PageBg">
      <ServicePageFeatured data={featuredData} />
      {job ? (
        <div className={styles.jobpage}>
          <JobDescription description={job.description} />
          <JobSummary job={job} />
        </div>
      ) : (
        <p style={{ textAlign: "center", margin: "2rem 0" }}>
          Job not found or something went wrong.
        </p>
      )}
    </div>
  );
};

export default Page;
