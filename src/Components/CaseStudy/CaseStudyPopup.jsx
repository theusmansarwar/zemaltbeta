import React from "react";
import "./CaseStudyPopup.css";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";

const portfolioData = {
  image: { src: "/zemalt-logo.png", alt: "Zemalt" },

  title: ["CUSTOMER SUPPORT AGENCY"],
  description1:
    "nec Praesent libero, placerat nec non dignissim, viverra Lorem tempor vitae elit. viverra turpis faucibus non. sit fringilla risus Nam ex nisl. fringilla Donec sit nisi nec Quisque Vestibulum maximus Nunc ex non. volutpat vitae at, tempor ac amet, viverra tincidunt facilisis Sed orci luctus Nam odio tincidunt urna. tincidunt sollicitudin. vel at orci elit tincidunt varius Donec orci dui in at, sapien orci tincidunt Morbi eget eu non. facilisis odio luctus Nullam Morbi non.",
  listItems: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, corrupti.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, corrupti.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, corrupti.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, corrupti.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, corrupti.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, corrupti.",
  ],
  description2:
    "Nunc lacus, urna. faucibus vitae lacus dui. dui. eget lacus In faucibus non lobortis, odio sit efficitur. malesuada ex vitae eu placerat. faucibus quam massa sodales. viverra lobortis, quis nulla, non. amet, nibh cursus facilisis sit quam.",
  description3:
    "Nunc lacus, urna. faucibus vitae lacus dui. dui. eget lacus In faucibus non lobortis, odio sit efficitur. malesuada ex vitae eu placerat. faucibus quam massa sodales. viverra lobortis, quis nulla, non. amet, nibh cursus facilisis sit quam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non libero distinctio recusandae repellendus similique aliquam odio. Ducimus, minima! Ipsum, nobis?",
};
const CaseStudyPopup = ({ onClose }) => {
  return (
    <div className="study-popup-parent">
      <div className="study-popup">
        <IoCloseCircleSharp className="close-icon" onClick={onClose} />

        <div className="top">
          <img src={portfolioData.image.src} alt={portfolioData.image.alt} />
        </div>

        {/* ✅ Bottom Section */}
        <div className="bottom">
          <h2>{portfolioData.title}</h2>
          <p>{portfolioData.description1}</p>
          <ul>
            {portfolioData.listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p>{portfolioData.description2}</p>
          <p>{portfolioData.description3}</p>

          <button className="proposal-btn">
            <span>Download PDF</span> <FaArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPopup;
