import React from "react";
import "./Benefits.css";

const benefits = [
  {
    icon: "👥",
    title: "Team work",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
  },
  {
    icon: "💼",
    title: "Secured Future",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
  },
  {
    icon: "🎓",
    title: "Learning Opportunity",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
  },
  {
    icon: "📈",
    title: "Upgrade Skills",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
  },
];

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="benefits-left">
        <p className="benefits-subtitle">BENEFITS</p>
        <h2 className="benefits-title">Why you Should Join Our Awesome Team</h2>
        <p className="benefits-text">
          we want to feel like home when you are working at Zemalt & for that we
          have curated a great set of benefits for you it all starts with the
          free lunch!
        </p>
      </div>

      <div className="benefits-right">
        {benefits.map((item, index) => (
          <div className="benefit-card" key={index}>
            <div className="benefit-icon">{item.icon}</div>
            <h3 className="benefit-title">{item.title}</h3>
            <p className="benefit-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
