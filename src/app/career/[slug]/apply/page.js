import Benefits from "@/Components/Benefits/Benefits";
import CareerOpenings from "@/Components/CareerOpenings/CareerOpenings";
import JobApplicationForm from "@/Components/JobApplicationForm/JobApplicationForm";
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";
import React from "react";

const page = () => {
  const featuredData = {
    title: "JOIN",
    spanTitle: "US",
    description:
      "You need a clear design that grows your brand. Zemalt creates sharp ideas that keep your style strong. You gain trust through smart detail and clean art. Each project shows focus and clear results.",
  };
  return (
    <div className="PageBg">
      <ServicePageFeatured data={featuredData} />
      <JobApplicationForm />
    </div>
  );
};

export default page;
