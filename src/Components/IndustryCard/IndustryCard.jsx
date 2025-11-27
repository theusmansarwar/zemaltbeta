"use client";
import React, { useEffect, useState } from "react";
import "./IndustryCard.css";
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import { fetchIndustries } from "@/DAL/Fetch";
import { baseUrl } from "@/config/Config";
import truncateTextByWords from "@/utils/TruncateByWords";
import IndustryCardSkeleton from "../SkeletonLoaders/IndustryCardSkeleton";
import { toast } from "react-toastify";

const IndustryCard = () => {
  const router = useRouter();
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getIndustries = async () => {
      try {
        const res = await fetchIndustries();
        setIndustries(res.industries);
      } catch (err) {
        toast.error("Error fetching industries:", err);
      } finally {
        setLoading(false);
      }
    };

    getIndustries();
  }, []);

  if (loading) {
    return <IndustryCardSkeleton />;
  }

  return (
    <div className="industry-grid">
      {industries.map((item, index) => (
        <div
          key={item._id || index}
          className={`industry-card ${index % 2 === 1 ? "reverse" : ""}`}
        >
          {/* Left Side (Image) */}
          <div className="left">
            <img src={baseUrl + item.image} alt={item.name} />
          </div>

          {/* Right Side (Content) */}
          <div className="right">
            <h2>{item.name}</h2>
            {item.description && (
              <p
                dangerouslySetInnerHTML={{
                  __html: truncateTextByWords(item.description, 300),
                }}
              />
            )}
            <div className="buttons-area">
              <button
                onClick={() => {
                  router.push("/contact");
                }}
              >
                Schedule a call <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndustryCard;
