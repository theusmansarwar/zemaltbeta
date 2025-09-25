import React from "react";
import "./OurCommitments.css";

const commitments = [
  {
    img: "/strategic-solutions.svg",
    alt: "Strategic Solutions",
    title: "Delivering Strategic Solutions",
    desc: "Discover effective solutions tailored to assist you in successfully completing your online tasks, prioritizing timely completion to meet your deadlines with precision.",
  },
  {
    img: "/subject-specialist.svg",
    alt: "Experienced Subject Specialists",
    title: "Ensuring Quality Assurance",
    desc: "The experts are recruited after a strict screening process. So, you can be confident that your examination paper is in safe hands.",
  },
  {
    img: "/assistance.svg",
    title: "24/7 Assistance",
    desc: "We are available in the mid of the night or early as well. We will respond to your needs and ensure that you get your examinations done with the best scores",
  },
  {
    img: "/non-palagrized.svg",
    title: "Non-Plagiarized Content",
    desc: "We guarantee that all our content is plagiarism-free, and our team conducts thorough research on every topic to ensure uniqueness.",
  },
];

const OurCommitments = () => {
  return (
    <div className="our-commitments">
      <h2 className="commitment-title">Our Commitments</h2>
      <p className="commitment-desc">
        Our team of skilled online assignment helpers and subject experts offer
        a variety of services to ensure your academic success.
      </p>

      <div className="commitment-cards-contianer">
        {commitments.map((item, index) => (
          <div key={index} className="commitment-card">
            <img src={item.img} alt={item.alt} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCommitments;
