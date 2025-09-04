"use client";
import React from "react";
import PortfolioCards from "../portfolioCards/PortfolioCards";
import ServicePageFeatured from "../ServicePageFeatured/ServicePageFeatured";
import "./page.css";
import { useParams } from "next/navigation";
import SubServiceFirst from "../SubServiceInfo/SubServiceFirst";
import SubServiceSecond from "../SubServiceInfo/SubServiceSecond";

const ProjectPage = ({ featuredData, subServiceData }) => {
  const { slug } = useParams();
  // slug comes from the dynamic route: /services/designing/[slug]

  const formattedTitle = slug
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="homebg">
      <ServicePageFeatured data={featuredData} title={formattedTitle} />
      <SubServiceFirst data={subServiceData} />
      <SubServiceSecond />
      <PortfolioCards title={formattedTitle} />
    </div>
  );
};

export default ProjectPage;
