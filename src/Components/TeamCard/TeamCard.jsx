"use client";
import React, { useEffect, useState } from "react";
import "./TeamCard.css";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { fetchAllTeam } from "@/DAL/Fetch";
import { baseUrl } from "@/config/Config";
import TeamCardSkeleton from "../SkeletonLoaders/TeamCardSkeleton";

const TeamCard = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = async () => {
    try {
      setLoading(true);
      const res = await fetchAllTeam();
      if (res?.categories) {
        setCategories(res.categories);
      }
    } catch (err) {
      console.error("Error fetching team:", err);
    } finally {
      setLoading(false);
    }
  };

  const renderMember = (member) => (
    <div key={member._id} className="team-card">
      <div className="profile-left">
        <img
          src={member.image ? `${baseUrl}${member.image}` : "/dummy.png"}
          alt={member.name}
        />
        <div className="social-icons">
          {
            <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <div className="icon">
                <RiFacebookFill />
              </div>
            </a>
          }
          {
            <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <div className="icon">
                <FaLinkedinIn />
              </div>
            </a>
          }
          {
            <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <div className="icon">
                <AiFillInstagram />
              </div>
            </a>
          }
        </div>
      </div>
      <div className="profile-right">
        <strong>{member.name}</strong>
        <span className="role">{member.role.name}</span>
        {member.description && <p className="description">{member.description}</p>}
      </div>
    </div>
  );

 if (loading) {
  return <TeamCardSkeleton />;
}

  return (
    <div className="team-section">
      {categories.map((cat) => (
        <div key={cat.categoryId} className="team-category">
          <h2>{cat.categoryName}</h2>
          <div className="team-card-container">
            {cat.members && cat.members.length > 0 ? (
              cat.members.map(renderMember)
            ) : (
              <p className="no-members">No members in this category</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
