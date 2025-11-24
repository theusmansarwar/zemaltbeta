"use client";
import { BsArrowRightCircle } from "react-icons/bs";
import "./PortfolioCards2.css"
import { baseUrl } from "@/config/Config";
import { FaArrowRight } from "react-icons/fa6";
const PortfolioCards2 = ({ project, onClick }) => {
  return (
   <div className="eachcard"
  style={{
    backgroundImage: `url(${baseUrl + project.thumbnail})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="word-wrapper">
    <span onClick={() => onClick(project)}>View</span>
    <FaArrowRight /> 
  </div>
  <h3>{project.title}</h3>
</div>

  );
};

export default PortfolioCards2;
