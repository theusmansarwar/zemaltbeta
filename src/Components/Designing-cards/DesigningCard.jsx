import React from "react";
import "./DesigningCard.css";
import { FaArrowRightLong } from "react-icons/fa6";
const DesigningCard = () => {
  return (
    <div className="designing-page-grid">
      <img className="rightimage" src="/right.png" />
      <img className="leftimage" src="/left.png" />
      <div className="designing-card">
        <div className="icon-area-for-des">
          {" "}
          <img src="/hands.png" alt="" />
        </div>
        <h3>Branding & Identity Design</h3>
        <ul>
          <li>Logo Design</li>
          <li>Brand color set and font choice </li>
          <li>Style guide manual</li>
          <li>Office cards, letter papers and envelopes</li>
        </ul>
        <div className="designing-card-btn">
          View Portfolio <FaArrowRightLong />
        </div>
      </div>
      <div className="designing-card">
        <div className="icon-area-for-des">
          {" "}
          <img src="/hands.png" alt="" />
        </div>
        <h3>Marketing & Advertising Design</h3>
        <ul>
          <li>Social posts, banners, online ads</li>
          <li>Leaflets and posters</li>
          <li>Brochures and catalogs</li>
          <li>Outdoor ads and boards </li>
        </ul>
        <div className="designing-card-btn">
          View Portfolio <FaArrowRightLong />
        </div>
      </div>
      <div className="designing-card">
        <div className="icon-area-for-des">
          {" "}
          <img src="/hands.png" alt="" />
        </div>
        <h3>Packaging & Label Design</h3>
        <ul>
          <li>Product box art</li>
          <li>Bottle and jar tags</li>
          <li>Food, beauty tech pack art</li>
          <li>3D box sample</li>
        </ul>
        <div className="designing-card-btn">
          View Portfolio <FaArrowRightLong />
        </div>
      </div>
      <div className="designing-card">
        <div className="icon-area-for-des">
          {" "}
          <img src="/hands.png" alt="" />
        </div>
        <h3>Print Media Design</h3>
        <ul>
          <li>Books and magazine covers</li>
          <li>Newsprint and flyer pages</li>
          <li>Reports and company brochures</li>
        </ul>
        <div className="designing-card-btn">
          View Portfolio <FaArrowRightLong />
        </div>
      </div>
      <div className="designing-card">
        <div className="icon-area-for-des">
          {" "}
          <img src="/hands.png" alt="" />
        </div>
        <h3>UI/UX Designing</h3>
        <ul>
          <li>Website UI plan</li>
          <li>Mobile app page plan</li>
          <li>Sample pages and layouts </li>
        </ul>
        <div className="designing-card-btn">
          View Portfolio <FaArrowRightLong />
        </div>
      </div>
      <div className="designing-card">
        <div className="icon-area-for-des">
          {" "}
          <img src="/hands.png" alt="" />
        </div>
        <h3>Illustration & Creative Assets</h3>
        <ul>
          <li>Custom art pieces</li>
          <li>Brand graphic assets</li>
          <li>Digital art and icons </li>
        </ul>
        <div className="designing-card-btn">
          View Portfolio <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default DesigningCard;
