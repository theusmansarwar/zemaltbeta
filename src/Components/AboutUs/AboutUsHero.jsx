"use client"
import React from "react";
import "./AboutUsHero.css";
import { useRouter } from "next/navigation";
const AboutUsHero = () => {
  const router = useRouter();
  return (
    <div className="about-hero">
      <div className="left">
        <h1>ABOUT US</h1>
        <p>
          Zemalt is a digital agency that cares about results. It offers SEO,
          Google Ads, content writing, social media marketing, web development,
          and <a href="https://zemalt.com/services/ui-ux">UI/UX design</a>. It helps you grow
          and win online. The goal is to increase your visibility and provide
          real value. The team uses data, clear ideas, and full focus on
          clients. It creates work that fits your brand and builds trust. You
          can rely on honest support and strong skills. Every project is shaped
          to help you succeed.
        </p>
        <p>
          Zemalt believes in clarity, creativity, and consistent growth. Every
          strategy focuses on measurable results and lasting impact. The team
          studies your business, audience, and goals to design solutions that
          deliver real progress. Each project combines smart design with
          practical marketing to keep your brand visible and competitive.
        </p>
        <button
          className="work-btn"
          onClick={() => {
            router.push("/products");
          }}
        >
          Check Our Work
        </button>
      </div>
      <div className="right">
        <div className="box">
          <strong>
            50 <img src="/plus-icon.svg" alt="Add Icon" />
          </strong>
          <p>
            <span>Completed </span>
            <span>Projects</span>
          </p>
        </div>
        <div className="box">
          <strong>
            5 <img src="/plus-icon.svg" alt="Add Icon" />
          </strong>
          <p>
            <span>On Going</span>
            <span>Projects</span>
          </p>
        </div>
        <div className="box">
          <strong>
            200 <img src="/plus-icon.svg" alt="Add Icon" />
          </strong>
          <p>
            <span>Happy</span>
            <span>Clients</span>
          </p>
        </div>
        <div className="box">
          <strong>#1</strong>
          <p>
            <span>Talented</span>
            <span>Team</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
