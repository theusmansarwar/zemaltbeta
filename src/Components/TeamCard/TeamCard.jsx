"use client";
import React, { useEffect, useState } from "react";
import "./TeamCard.css";
import { RiFacebookFill } from "react-icons/ri";
import { FaGithub, FaGlobe, FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { fetchAllTeam } from "@/DAL/Fetch";
import { baseUrl } from "@/config/Config";
import TeamCardSkeleton from "../SkeletonLoaders/TeamCardSkeleton";
import { toast } from "react-toastify";

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
      toast.error("Error fetching team:", err);
    } finally {
      setLoading(false);
    }
  };
  const formatUrl = (url) => {
    if (!url) return null;

    // If URL already contains http or https, return it
    if (url.startsWith("http://") || url.startsWith("https://")) return url;

    // If URL starts with www → prepend https
    if (url.startsWith("www.")) return `https://${url}`;

    return url;
  };


  const renderMember = (member) => (
    <div key={member._id} className="team-card">
      <div className="profile-left">
        <img
          src={member.image ? `${baseUrl}${member.image}` : "/person.webp"}
          alt={member.name}
        />

      </div>
      <div className="profile-right">
        <strong>{member.name}</strong>
        <span className="role">{member.role.name}</span>
        {member.description && <p className="description">{member.description}</p>}
        <div className="social-icons">
          {member.socialLinks.facebook && (
            <a href={formatUrl(member.socialLinks.facebook)} target="_blank" rel="noopener noreferrer">
              <div className="icon">
                <RiFacebookFill />
              </div>
            </a>
          )}

          {member.socialLinks.linkedin && (
            <a href={formatUrl(member.socialLinks.linkedin)} target="_blank" rel="noopener noreferrer">
              <div className="icon">
                <FaLinkedinIn />
              </div>
            </a>
          )}

          {member.socialLinks.instagram && (
            <a href={formatUrl(member.socialLinks.instagram)} target="_blank" rel="noopener noreferrer">
              <div className="icon">
                <AiFillInstagram />
              </div>
            </a>
          )}

          {member.socialLinks.github && (
            <a href={formatUrl(member.socialLinks.github)} target="_blank" rel="noopener noreferrer">
              <div className="icon">
                <FaGithub />
              </div>
            </a>
          )}

          {member.socialLinks.portfolio && (
            <a href={formatUrl(member.socialLinks.portfolio)} target="_blank" rel="noopener noreferrer">
              <div className="icon">
                <FaGlobe />
              </div>
            </a>
          )}
        </div>

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
