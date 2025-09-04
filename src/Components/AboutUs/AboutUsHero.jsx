import React from "react";
import "./AboutUsHero.css";
import { FaPlus } from "react-icons/fa6";
const AboutUsHero = () => {
  return (
    <div className="about-hero">
      <div className="left">
        <h1>ABOUT US</h1>
        <p>
         Zemalt is a digital agency that cares about results. It offers SEO, Google Ads, content writing, social media marketing, web development, and UI/UX design. It helps you grow and win online. The goal is to increase your visibility and provide real value. The team uses data, clear ideas, and full focus on clients. It creates work that fits your brand and builds trust. You can rely on honest support and strong skills. Every project is shaped to help you succeed.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
          laboriosam! Explicabo deserunt magnam magni repellat dolorem
          assumenda. Est ab quasi cum vitae reiciendis odit deleniti, assumenda
          ut numquam, adipisci ipsam!
        </p>
        <button className="work-btn">Check Our Work</button>
      </div>
      <div className="right">
        <div className="box">
          <strong>
            1000 <img src="/plus-icon.svg" alt="Add Icon" />
          </strong>
          <p>
            <span>Completed </span>
            <span>Projects</span>
          </p>
        </div>
        <div className="box">
          <strong>
            250 <img src="/plus-icon.svg" alt="Add Icon" />
          </strong>
          <p>
            <span>On Going</span>
            <span>Projects</span>
          </p>
        </div>
        <div className="box">
          <strong>
            500 <img src="/plus-icon.svg" alt="Add Icon" />
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
