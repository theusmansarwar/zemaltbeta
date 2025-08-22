import React from "react";
import "./ServiceCard.css";
import { FaArrowRightLong } from "react-icons/fa6";

const DesigningCard = ({data}) => {
  
  const cardData = [
    {
      title: "Branding & Identity Design",
      items: [
        "Logo Design",
        "Brand color set and font choice",
        "Style guide manual",
        "Office cards, letter papers and envelopes",
      ],
    },
    {
      title: "Marketing & Advertising Design",
      items: [
        "Social posts, banners, online ads",
        "Leaflets and posters",
        "Brochures and catalogs",
        "Outdoor ads and boards",
      ],
    },
    {
      title: "Packaging & Label Design",
      items: [
        "Product box art",
        "Bottle and jar tags",
        "Food, beauty tech pack art",
        "3D box sample",
      ],
    },
    {
      title: "Print Media Design",
      items: [
        "Books and magazine covers",
        "Newsprint and flyer pages",
        "Reports and company brochures",
      ],
    },
    {
      title: "UI/UX Designing",
      items: ["Website UI plan", "Mobile app page plan", "Sample pages and layouts"],
    },
    {
      title: "Illustration & Creative Assets",
      items: ["Custom art pieces", "Brand graphic assets", "Digital art and icons"],
    },
  ];

  return (
    <div className="designing-page-grid">
      <img className="rightimage" src="/right.png" alt="right decoration" />
      <img className="leftimage" src="/left.png" alt="left decoration" />

      {data.map((card, index) => (
        <div className="designing-card" key={index}>
          <div className="icon-area-for-des">
            <img src="/hands.png" alt="icon" />
          </div>
          <h3>{card.title}</h3>
          <ul>
            {card.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="designing-card-btn">
            View Portfolio <FaArrowRightLong />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesigningCard;
