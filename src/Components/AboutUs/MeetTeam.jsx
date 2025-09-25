"use client";
import React, { useEffect, useState } from "react";
import "./MeetTeam.css";
import { fetchFeaturedTeam } from "@/DAL/Fetch";
import { baseUrl } from "@/config/Config";
import MeetTeamSkeleton from "../SkeletonLoaders/MeetTeamSkeleton";

const MeetTeam = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetchFeaturedTeam();
        setTeamData(res?.Members || []);
      } catch (err) {
        console.error("Error fetching team:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  if (loading) return <MeetTeamSkeleton />;
  
  return (
    <div className="meet-team" id="team">
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

      <div className="meet-team-container">
        {teamData.map((member) => (
          <div
            key={member._id || member.id}
            className={`meet-team-card ${
              hoveredId === (member._id || member.id) ? "expanded" : "collapsed"
            }`}
            onMouseEnter={() => setHoveredId(member._id || member.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="card-image">
              <img
                src={
                  member.image
                    ? `${baseUrl}${member.image}`
                    : "/placeholder.svg"
                }
                alt={member.name}
                className="card-img"
              />
            </div>
            <div className="card-content">
              <h4 className="card-name">{member.name}</h4>
              <p className="card-role">{member.role?.name || member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bottom-circle"></div>
    </div>
  );
};

export default MeetTeam;
