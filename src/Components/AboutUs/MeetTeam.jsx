"use client";
import React, { useState } from "react";
import "./MeetTeam.css";
const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/member.jpg",
  },
  {
    id: 2,
    name: "Prabh Nair",
    role: "Program Director",
    image: "/member.jpg",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Head of Operations",
    image: "/member.jpg",
  },
  {
    id: 4,
    name: "Emily Chen",
    role: "Head of Operations",
    image: "/member.jpg",
  },
  {
    id: 5,
    name: "Emily Chen",
    role: "Head of Operations",
    image: "/member.jpg",
  },
  {
    id: 6,
    name: "Emily Chen",
    role: "Head of Operations",
    image: "/member.jpg",
  },
];
const MeetTeam = () => {
  const [hoveredId, setHoveredId] = useState();
  return (
    <div className="meet-team">
      <h2>Meet the team</h2>
      <p>
        Great work begins with the right people and institutions. Zemalt brings
        together experts who know how to turn ideas into measurable results.
        Every project starts with a clear plan, a proven strategy, and a skilled
        team that works with precision. Our specialists bring mastery in SEO,
        ads, content, and design. Each member plays a role that strengthens
        campaigns and builds momentum. Clients trust Zemalt because we listen
        carefully, plan smartly, and deliver exactly what we promise. The team
        studies your business goals and crafts strategies that match your
        industry. Zemalt gains a group of professionals who care about your
        growth as much as you do.
      </p>
      <div className="top-circle1"></div>
      <div className="top-circle2"></div>
      <div className="team-cards-container">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className={`team-card ${
              hoveredId === member.id ? "expanded" : "collapsed"
            }`}
            onMouseEnter={() => setHoveredId(member.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="card-image">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="card-img"
              />
            </div>
            <div className="card-content">
              <h4 className="card-name">{member.name}</h4>
              <p className="card-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom-circle"></div>
    </div>
  );
};

export default MeetTeam;
