import React from "react";
import "./PortfolioPopup.css";
import { IoCloseCircleSharp } from "react-icons/io5";

const PortfolioPopup = ({ onClose }) => {
  // ✅ Object array for data
  const portfolioData = {
    images: [
      { src: "/blog-thumbnail.jpg", alt: "Main Image" },
      { src: "/blog-thumbnail.jpg", alt: "Second Image" },
      { src: "/blog-thumbnail.jpg", alt: "Third Image" },
      { src: "/blog-thumbnail.jpg", alt: "Fourth Image" },
    ],
    title: ["SEO SUB", "SERVICE"],
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

  return (
    <div className="popup-parent">
      <div className="portfolio-popup">
        <IoCloseCircleSharp className="close-icon" onClick={onClose} />

        {/* ✅ Top images */}
        <div className="top">
          {portfolioData.images.map((img, index) => (
            <img key={index} src={img.src} alt={img.alt} />
          ))}
        </div>

        {/* ✅ Bottom Section */}
        <div className="bottom">
          <h2>
            {portfolioData.title.map((word, i) => (
              <span key={i}>{word} </span>
            ))}
          </h2>

          <p>{portfolioData.description1}</p>

          <ul>
            {portfolioData.listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <p>{portfolioData.description2}</p>
          <p>{portfolioData.description3}</p>

          <button className="proposal-btn">Get Service</button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPopup;
