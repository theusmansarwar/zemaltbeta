"use client";
import React from "react";
import PortfolioCards from "../portfolioCards/PortfolioCards";
import ServicePageFeatured from "../ServicePageFeatured/ServicePageFeatured";
import "./page.css";
import { useParams } from "next/navigation";
import ProvenSteps from "../SubServiceInfo/ProvenSteps";
import SubServiceFourth from "../SubServiceInfo/SubServiceFourth";
import SubServiceFirst from "../SubServiceInfo/SubServiceFirst";
import WhyZemalt from "../SubServiceInfo/WhyZemalt";
import TalkToExpert from "../SubServiceInfo/TalkToExpert";
import Faq from "../FAQ/Faq";
import OurCommitments from "../SubServiceInfo/OurCommitments";

const ProjectPage = ({
  featuredData,
  introduction,
  whySection,
  provenSteps,
  imageData,
  faqs,
  portfolio,
  cta,
}) => {
  const { subserviceslug } = useParams();

  const formattedTitle = subserviceslug
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="homebg">
      {/* Featured Header */}
      <ServicePageFeatured data={featuredData} title={formattedTitle} />

      {/* Introduction Section */}
      {introduction?.published && <SubServiceFirst data={introduction} />}

      {/* Why Choose Us */}
      {whySection?.published && <WhyZemalt data={whySection} />}

      {/* Proven Steps */}
      {provenSteps?.published && <ProvenSteps data={provenSteps} />}

      {/* CTA Section */}
      {cta?.published && <TalkToExpert data={cta} />}

      {/* Extra Section */}
      {imageData?.published && <SubServiceFourth data={imageData} />}

      {/* FAQ Section */}
      {faqs?.published && <Faq faqs={faqs} />}

      {/* Commitments Section */}
      <OurCommitments />

      {/* Portfolio */}
       {portfolio?.published && (
        <PortfolioCards data={portfolio} />
      )}
    </div>
  );
};

export default ProjectPage;
