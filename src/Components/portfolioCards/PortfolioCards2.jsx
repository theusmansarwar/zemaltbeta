"use client";
import { BsArrowRightCircle } from "react-icons/bs";
import "./PortfolioCards2.css"
const PortfolioCards2 = ({ project, onClick }) => {
  return (
   <div className="eachcard"
  style={{
    backgroundImage: `url(${project.thumbnail})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="icon-wrapper">
    <BsArrowRightCircle onClick={() => onClick(project)} />
  </div>
  <h3>{project.title}</h3>
</div>

  );
};

export default PortfolioCards2;
