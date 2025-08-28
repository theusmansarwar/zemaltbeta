"use client"
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        porro quaerat est a cum dolorem, similique, molestiae natus dignissimos,
        eligendi ut commodi quae ipsam. Obcaecati necessitatibus deserunt sed
        magni esse. Odit corporis similique, excepturi quia praesentium dolores
        exercitationem dolorum in quod distinctio cum, vero sed quisquam velit
        quae consequatur voluptatem.
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
