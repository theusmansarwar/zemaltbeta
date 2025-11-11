import React from "react";
import "./HowDifferent.css";

const data = {
  heading: "Powering Digital Success Through Strategy and Design",
  list: [
    {
      title: "Proven Digital Expertise:",
      text: "You gain experience from SEO, paid media, and web development combined. Projects follow tested methods that bring real results. The approach helps your business reach more customers, improve online visibility, and stay ahead of competitors.",
    },
    {
      title: "Strategic Planning That Delivers:",
      text: "Every campaign works under clear direction based on market insights and data. Decisions focus on increasing engagement and conversions. The plan stays aligned with your business goals. It ensures smooth progress without confusion.",
    },
    {
      title: "Design That Inspires Action:",
      text: "Layouts remain clean, readable, and consistent across platforms. Every detail leads visitors naturally to key information. The design supports your brand identity. It encourages users to explore, trust, and connect with your message.",
    },
    {
      title: "Marketing That Builds Momentum:",
      text: "Campaigns reach real customers who are ready to act. The process combines timing, relevance, and clear offers. It creates steady engagement and builds strong connections. Ads, outreach, and updates stay relevant and personal.",
    },
    {
      title: "Content That Converts:",
      text: "Words stay clear, structured, and easy to follow. The writing explains value and builds confidence. Content answers user questions and shows benefits. It encourages readers to act quickly. Pages or posts serve a purpose in guiding customer decisions.",
    },
    {
      title: "Growth That Lasts:",
      text: "Results continue after a campaign ends. Regular updates and optimization maintain visibility and performance. Focus remains on long-term value that builds brand trust and ensures stability. You enjoy steady progress and ongoing digital success.",
    },
  ],
};

const HowDifferent = () => {
  return (
    <div className="how-different">
      <div className="card">
        <h2>{data.heading}</h2>
        <ul>
          {data.list.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HowDifferent;
