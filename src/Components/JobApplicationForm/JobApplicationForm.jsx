'use client';
import React, { useState } from "react";
import "./JobApplicationForm.css";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    education: "",
    basedInLahore: "",
    currentSalary: "",
    expectedSalary: "",
    relocate: "",
    experience: "",
    university: "",
    cgpa: "",
    graduationYear: "",
    company: "",
    linkedin: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Application Submitted!");
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <h2>Apply for this Job</h2>

      {/* Row 1 */}
      <div className="form-row">
        <div className="form-group">
          <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder=" " />
          <label>Name*</label>
        </div>
        <div className="form-group">
          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder=" " />
          <label>Email*</label>
        </div>
      </div>

      {/* Row 2 */}
      <div className="form-row">
        <div className="form-group">
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder=" " />
          <label>Phone*</label>
        </div>
        <div className="form-group">
          <select name="education" value={formData.education} onChange={handleChange} required>
            <option value="">Select Education</option>
            <option>Matric</option>
            <option>Intermediate</option>
            <option>Bachelor</option>
            <option>Master</option>
            <option>PhD</option>
          </select>
          <label>Education*</label>
        </div>
      </div>

      {/* Row 3 */}
      <div className="form-row">
        <div className="form-group">
          <select name="basedInLahore" value={formData.basedInLahore} onChange={handleChange} required>
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <label>Based in Lahore?*</label>
        </div>
        <div className="form-group">
          <select name="relocate" value={formData.relocate} onChange={handleChange} required>
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <label>Willing to Relocate?*</label>
        </div>
      </div>

      {/* Row 4 */}
      <div className="form-row">
        <div className="form-group">
          <select name="experience" value={formData.experience} onChange={handleChange} required>
            <option value="">Select</option>
            <option>Less than 1 year</option>
            <option>1–2 years</option>
            <option>3–5 years</option>
            <option>6–10 years</option>
            <option>10+ years</option>
          </select>
          <label>Experience*</label>
        </div>
        <div className="form-group">
          <input type="text" name="company" value={formData.company} onChange={handleChange} required placeholder=" " />
          <label>Current Company*</label>
        </div>
      </div>

      {/* Row 5 */}
      <div className="form-row">
        <div className="form-group">
          <input type="text" name="university" value={formData.university} onChange={handleChange} required placeholder=" " />
          <label>University / Institute*</label>
        </div>
        <div className="form-group">
          <input type="text" name="cgpa" value={formData.cgpa} onChange={handleChange} required placeholder=" " />
          <label>CGPA*</label>
        </div>
      </div>

      {/* Row 6 */}
      <div className="form-row">
        <div className="form-group">
          <input type="text" name="graduationYear" value={formData.graduationYear} onChange={handleChange} required placeholder=" " />
          <label>Graduation Year*</label>
        </div>
        <div className="form-group">
          <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} required placeholder=" " />
          <label>LinkedIn Profile*</label>
        </div>
      </div>

      {/* Row 7 */}
      <div className="form-row">
        <div className="form-group">
          <input type="text" name="currentSalary" value={formData.currentSalary} onChange={handleChange} required placeholder=" " />
          <label>Current Salary*</label>
        </div>
        <div className="form-group">
          <input type="text" name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} required placeholder=" " />
          <label>Expected Salary*</label>
        </div>
      </div>

      {/* Upload Resume */}
      <div className="upload-section">
        <label className="upload-label">Upload Your Resume*</label>
        <div className="upload-box">
          <input type="file" id="resume" name="resume" onChange={handleChange} required />
          <span>Click or Drag & Drop your resume here (PDF, DOCX)</span>
        </div>
      </div>

      {/* Reason */}
      <div className="text-area-cont">
        <label className="textarea-label">Why do you want to switch from your current company?*</label>
        <textarea name="reason" value={formData.reason} onChange={handleChange} required placeholder=" " />

      </div>

      <button type="submit" className="application-submit-btn">Submit Application</button>
    </form>
  );
};

export default JobApplicationForm;