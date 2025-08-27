"use client";
import React from "react";
import PortfolioCards from "../portfolioCards/PortfolioCards";
import ServicePageFeatured from "../ServicePageFeatured/ServicePageFeatured";
import "./page.css";
import { useParams } from "next/navigation";

const ProjectPage = ({ featuredData }) => {
  const { slug } = useParams(); 
  // slug comes from the dynamic route: /services/designing/[slug]

  const formattedTitle = slug
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="homebg">
      <ServicePageFeatured data={featuredData} title={formattedTitle} />
      <h1>{formattedTitle}</h1>
      <PortfolioCards />
    </div>
  );
};

export default ProjectPage;
