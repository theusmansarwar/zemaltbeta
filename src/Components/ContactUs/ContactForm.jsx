"use client";
import React, { useState } from "react";
import "./ContactForm.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { FaArrowRight } from "react-icons/fa6";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };
  const handleSubmit = async (e) => {
    const payload = {
      name: formData.name,
      lastname: formData.lastname,
      phone: formData.phone,
      email: formData.email,
      query: formData.message,
    };

    console.log(payload);

    setFormData({
      name: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="contact-form">
      <div className="left">
        <h2>
          <span>DIGITIZING</span> YOUR <br />
          BUSSINESS <span>GROWTH</span>
        </h2>
        <div className="info-container">
          <div className="each-info">
            <p>
              Expert <strong>Team Members</strong>
            </p>
          </div>
          <div className="each-info">
            <p>
              <strong>Results-Driven</strong> Approach
            </p>
          </div>
          <div className="each-info">
            <p>
              <strong>Streamlined</strong> Execution
            </p>
          </div>
        </div>
        <h3 className="recog-heading">Premium Digital Agency Recognized by</h3>
        <div className="logos-container">
          <img src="/zemalt-logo.png" alt="" />
          <img src="/zemalt-logo.png" alt="" />
          <img src="/zemalt-logo.png" alt="" />
        </div>
      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <div className="fromgrouprow">
            <div className="formgroupform2">
              <input
                type="text"
                name="name"
                placeholder="First Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="formgroupform2">
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="fromgrouprow">
            <div className="formgroupform2">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="formgroupform2">
              <PhoneInput
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                countryCodeEditable={false}
              />
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Please type your enquiry and our team will get back to you..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button className="submit-btn" type="submit">
            Submit <FaArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
