"use client";
import React from "react";
import "./Services.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const Services = () => {
  const router = useRouter();
  const services = [
    {
      title: "WEB DEVELOPMENT",
      slug: "web-development",
      description:
        "Zemalt designs responsive websites to boost user interaction. Clean code ensures smooth navigation and quick access. Effective sites increase visitor satisfaction.",
    },
    {
      title: "SEARCH ENGINE OPTIMIZATION",
      slug: "seo",
      description:
        "Zemalt improves online visibility using SEO. Targeted keywords and quality content build trust and boost rankings. Regular updates increase traffic and ensure clear goals guide every step",
    },
    {
      title: "CONTENT WRITING",
      slug: "content-writing",
      description:
        "Write clearly and engagingly to draw readers in. Strong writing informs the audience. It answers queries and builds trust and steady engagement.",
    },
    {
      title: "SOCIAL MEDIA MARKETING",
      slug: "social-media-marketing",
      description:
        "Zemalt creates targeted campaigns to grow audience reach. Clear posts build trust and answer common questions. Tailored ads boost engagement and conversions.",
    },
    {
      title: "UI UX DESIGN",
      slug: "designing",
      description:
        "Zemalt designs simple layouts to make things easier to use. Good design boosts retention. It answers queries and keeps user satisfied.",
    },
    {
      title: "GOOGLE ADS MANAGEMENT",
      slug: "google-ads-management",
      description:
        "You should run targeted ads to increase customer leads. Focused strategies reach prospects and address common queries to improve campaign results effectively.",
    },
  ];

  return (
    <div className="services-grid">
      {services.map((item, index) => {
        return (
          <div className="servicecard" key={index}>
            <div className="overlay1">
              <div className="overlay2">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div
                  className="btn-showmore"
                  onClick={() => router.push(`/services/${item.slug}`)}
                >
                  Learn More <FaArrowRightLong />
                </div>
              </div>
            </div>
            <div className="searchicon">
              <img src="/Search-Vector.png" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
