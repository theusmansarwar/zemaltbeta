"use client";
import React, { useState } from "react";
import "./RevenueCalculator.css";
import { IoMdArrowDropdown } from "react-icons/io";

const RevenueCalculator = ({ data }) => {
  const [formData, setFormData] = useState({
    pages: "",
    responsiveDesign: "",
    styleDesign: "",
    databaseIntegration: "",
    copywriting: "",
    ecommerce: "",
    seo: "",
    cms: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Calculation Done! Check console for data.");
  };

  return (
    <div className="calculator-area">
      <div className="calculator-container">
        <h2>Calculate Your Revenue</h2>
        <p className="subtext">
          Find out how much your web design package will cost. Choose the
          options that fit your project and see the estimate instantly.
        </p>
        <h4>Web Design Service Package</h4>

        <form className="calculator-form" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="form-row">
            <div className="custom-select">
              <select name="pages" value={formData.pages} onChange={handleChange}>
                <option value="">Number of Pages</option>
                <option value="1-5">1-5 Pages</option>
                <option value="6-10">6-10 Pages</option>
                <option value="10+">10+ Pages</option>
              </select>
              <IoMdArrowDropdown className="select-icon" />
            </div>

            <div className="custom-select">
              <select
                name="responsiveDesign"
                value={formData.responsiveDesign}
                onChange={handleChange}
              >
                <option value="">Responsive Design</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <IoMdArrowDropdown className="select-icon" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <div className="custom-select">
              <select
                name="styleDesign"
                value={formData.styleDesign}
                onChange={handleChange}
              >
                <option value="">Style of Design</option>
                <option value="basic">Basic</option>
                <option value="modern">Modern</option>
                <option value="premium">Premium</option>
              </select>
              <IoMdArrowDropdown className="select-icon" />
            </div>

            <div className="custom-select">
              <select
                name="databaseIntegration"
                value={formData.databaseIntegration}
                onChange={handleChange}
              >
                <option value="">Database Integration</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <IoMdArrowDropdown className="select-icon" />
            </div>
          </div>

          {/* Row 3 */}
          <div className="form-row">
            <div className="custom-select">
              <select
                name="copywriting"
                value={formData.copywriting}
                onChange={handleChange}
              >
                <option value="">Copywriting # of Pages</option>
                <option value="1-5">1-5 Pages</option>
                <option value="6-10">6-10 Pages</option>
                <option value="10+">10+ Pages</option>
              </select>
              <IoMdArrowDropdown className="select-icon" />
            </div>

            <div className="custom-select">
              <select
                name="ecommerce"
                value={formData.ecommerce}
                onChange={handleChange}
              >
                <option value="">E-Commerce Functionality</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <IoMdArrowDropdown className="select-icon" />
            </div>
          </div>

          {/* Row 4 */}
          <div className="form-row">
            <div className="custom-select">
              <select name="seo" value={formData.seo} onChange={handleChange}>
                <option value="">SEO with Placement Guarantee</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <IoMdArrowDropdown className="select-icon" />
            </div>

            <div className="custom-select">
              <select name="cms" value={formData.cms} onChange={handleChange}>
                <option value="">CMS</option>
                <option value="wordpress">WordPress</option>
                <option value="custom">Custom</option>
              </select>
              <IoMdArrowDropdown className="select-icon" />
            </div>
          </div>

          <button type="submit" className="calculate-btn">
            CALCULATE
          </button>
        </form>
      </div>

      {/* Blog header area */}
      <div className="blog-header">
        <div className="header-left">
          <h2>{data.heading}</h2>
        </div>
        <div className="header-right">
          <p>{data.description}</p>
          <button className="see-more">See more</button>
        </div>
      </div>
    </div>
  );
};

export default RevenueCalculator;
