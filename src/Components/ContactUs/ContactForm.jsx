"use client";
import React, { useState } from "react";
import "./ContactForm.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { FaArrowRight } from "react-icons/fa6";
import { CreateLeads } from "@/DAL/Create";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    subject: [],
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  // ✅ Handle subject checkbox changes
  const handleSubjectChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedSubjects = checked
        ? [...prev.subject, value]
        : prev.subject.filter((sub) => sub !== value);

      return { ...prev, subject: updatedSubjects };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject.join(", "),
      query: formData.message,
    };

    try {
      const res = await CreateLeads(payload);

      if (res.status === 201) {
        setStatus("success");
        toast.success(res?.message || "Form submitted successfully");
        setErrors({});
        setFormData({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          subject: [],
          message: "",
        });
      } else if (res?.status === 400) {
        const fieldErrors = {};
        res.missingFields.forEach((field) => {
          fieldErrors[field.name] = field.message;
        });
        setErrors(fieldErrors);
      } else {
        setStatus("error");
      }
    } catch (err) {
      if (err.response?.status === 400 && err.response.data?.missingFields) {
        const fieldErrors = {};
        err.response.data.missingFields.forEach((field) => {
          fieldErrors[field.name] = field.message;
        });
        setErrors(fieldErrors);
      } else {
        setStatus("error");
        toast.error("Submission failed. Please try again.");
      }
    }
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
          <img src="/plutosec-nobg.png" alt="Plutosec" />
          <img src="/digitalaura-nobg.png" alt="Digital Aura" />
          <img src="/carteroil-nobg.png" alt="CarterOil" />
        </div>
      </div>

      <div className="right">
        <form onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="fromgrouprow">
            <div className="formgroupform2">
              <label htmlFor="name">First Name</label>
              {errors.name && <span className="error-msg">{errors.name}</span>}
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="formgroupform2">
              <label htmlFor="lastname">Last Name</label>
              {errors.lastName && (
                <span className="error-msg">{errors.lastName}</span>
              )}
              <input
                type="text"
                id="lastname"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="fromgrouprow">
            <div className="formgroupform2">
              <label htmlFor="email">Email</label>
              {errors.email && (
                <span className="error-msg">{errors.email}</span>
              )}
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="formgroupform2">
              <label htmlFor="phone">Phone</label>
              {errors.phone && (
                <span className="error-msg">{errors.phone}</span>
              )}
              <PhoneInput
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                countryCodeEditable={false}
              />
            </div>
          </div>

          {/* ✅ Subject Checkboxes */}
          <div className="formgroupform2 full-width">
            <label>Select Subject / Service?</label>
            {errors.subject && (
              <span className="error-msg">{errors.subject}</span>
            )}
            <div className="checkbox-grid">
              {[
                "SEO",
                "Social & Paid Media",
                "Web Development",
                "Designing",
                "Google Ads",
                "Content Writing",
                "General Inquiry",
                "Other",
              ].map((subject) => {
                const id = subject.toLowerCase().replace(/\s+/g, "-");
                return (
                  <div className="checkbox-item" key={id}>
                    <input
                      id={id}
                      type="checkbox"
                      name="subject"
                      value={subject}
                      checked={formData.subject.includes(subject)}
                      onChange={handleSubjectChange}
                    />
                    <label htmlFor={id} className="checkbox-label">
                      {subject}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Message */}
          <div className="formgroupform2 full-width">
            <label htmlFor="message">Message</label>
            {errors.query && <span className="error-msg">{errors.query}</span>}
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button className="submit-btn" type="submit">
            Submit <FaArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
