import React from "react";
import "./Services.css";
import { FaArrowRightLong } from "react-icons/fa6";
const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web apps built with modern frameworks for speed, security, and scalability.",
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications with intuitive designs and powerful performance.",
    },
    {
      title: "UI/UX Design",
      description:
        "User-focused designs that blend aesthetics with functionality for optimal engagement.",
    },
    {
      title: "Digital Marketing",
      description:
        "SEO, social media, and PPC campaigns to grow your online presence and reach your target audience.",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Complete online store setups with secure payment gateways and seamless shopping experiences.",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Cloud migration, deployment automation, and infrastructure optimization services.",
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
              <div className="btn-showmore">
                Learn More <FaArrowRightLong />
              </div>
            </div>
          </div>
          <div className="searchicon">
            <img src="/Search-Vector.png" />
          </div>
        </div>)
      })}
    </div>
  );
};

export default Services;
