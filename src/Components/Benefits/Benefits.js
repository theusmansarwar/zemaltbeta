import React from "react";
import "./Benefits.css";

const benefits = [
  {
    icon: "👥",
    title: "Team Work",
    desc: "Join a team where every voice matters and collaboration drives success.We share knowledge, solve problems together, and celebrate each other’s expertise.",
  },
  {
    icon: "💼",
    title: "Secured Future",
    desc: "You gain career stability and clear direction. Growth stays consistent, and opportunities keep coming. Our focus remains on long-term development and job security.",
  },
  {
    icon: "🎓",
    title: "Learning Opportunity",
    desc: "You receive chances to learn every single day. Training, mentoring, and real projects prepare you for bigger challenges. Each experience adds knowledge, skills, and confidence to your role.",
  },
  {
    icon: "📈",
    title: "Upgrade Skills",
    desc: "You get support to strengthen your skills at every step. Tools, resources, and proper guidance stay within your reach. Each skill upgrade gives you more career options and stronger roles.",
  },
];

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="benefits-left">
        <p className="benefits-subtitle">BENEFITS</p>
        <h2 className="benefits-title">Why You Should Join Our Team</h2>
        <p className="benefits-text">
          You deserve respect in your workplace. You also deserve a career that helps you grow. At our company, you find more than a job. You step into a path that builds skills, offers stability, and supports balance in life. The team works together, stands strong, and celebrates every success. You gain access to programs that improve your skills and open new doors. Each step pushes you closer to your goals and your future.
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
