"use client";
import { useRouter } from "next/navigation";
import "./IndustrySolutions.css";
import { GoArrowUpRight } from "react-icons/go";
import { baseUrl } from "@/config/Config";
import { FiArrowUpRight } from "react-icons/fi";

export default function IndustrySolutions({ data }) {
  const router = useRouter();
  return (
    <div className="industry-solutions">
      <div className="solutions-content">
        {/* Left Section */}
        <div className="solutions-left">
          <div className="heading-box">
            <h2 className="main-heading">{data?.heading}</h2>
          </div>

          {/* Dynamic API Cards */}
          <div className="industry-solutions-grid">
            {data?.steps?.items?.map((item) => (
              <div key={item._id} className="solution-card">
                <img
                  src={baseUrl + item.image}
                  alt={item.title}
                  className="solution-icon"
                />
                <h3 className="solution-title">{item.title}</h3>
                <p className="solution-description">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="footer-text">
            Let's make something great work together.{" "}
            <span
              className="get-free-quote"
              onClick={() => {
                router.push("/contact");
              }}
            >
              Get Free Quote
            </span>
          </p>
        </div>

        {/* Center Button */}
        <div
          className="center-btn"
          onClick={() => {
            router.push("/case-study");
          }}
        >
          <FiArrowUpRight />
        </div>

        {/*  Dynamic Right Image */}
        <div
          className="solutions-right"
          style={{
            backgroundImage: `url(${baseUrl + data?.steps?.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}
