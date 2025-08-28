import React from "react";
import "./AboutUsHero.css";
const AboutUsHero = () => {
  return (
    <div className="about-hero">
      <div className="left">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
          laboriosam! Explicabo deserunt magnam magni repellat dolorem
          assumenda. Est ab quasi cum vitae reiciendis odit deleniti, assumenda
          ut numquam, adipisci ipsam!
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
          <strong>1000 +</strong>
          <span>Completed Projects</span>
        </div>
        <div className="box">
          <strong>250 +</strong>
          <span>On Going Projects</span>
        </div>
        <div className="box">
          <strong>500 +</strong>
          <span>Happy Clients</span>
        </div>
        <div className="box">
          <strong>#1</strong>
          <span>Talented Team</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
