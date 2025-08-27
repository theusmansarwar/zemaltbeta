'use client'
import React, { useState } from "react";
import "./JobApplicationForm.css";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    education: "Matric",
    city: "",
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
      <h2>Apply for this job</h2>

      <div className="form-row">
        <div className="form-group">
          <label>Name*</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email*</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-group">
        <label>Phone*</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Enter phone number" />
      </div>

      <div className="form-group">
        <label>CV / Resume*</label>
        <input type="file" name="resume" onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Education</label>
        <select name="education" value={formData.education} onChange={handleChange}>
          <option>Matric</option>
          <option>Intermediate</option>
          <option>Bachelor</option>
          <option>Master</option>
          <option>PhD</option>
        </select>
      </div>

      <div className="form-group">
        <label>Are you based in Lahore?*</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>What’s your current salary?*</label>
        <input type="text" name="currentSalary" value={formData.currentSalary} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>What’s your expected salary?*</label>
        <input type="text" name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>If not in LHR, are you willing to relocate?*</label>
        <input type="text" name="relocate" value={formData.relocate} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>How many years of professional experience do you have?*</label>
        <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Name of University/Institute*</label>
        <input type="text" name="university" value={formData.university} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>What was your CGPA?*</label>
        <input type="text" name="cgpa" value={formData.cgpa} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Mention your graduation year*</label>
        <input type="text" name="graduationYear" value={formData.graduationYear} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Current company name*</label>
        <input type="text" name="company" value={formData.company} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Please share your LinkedIn Profile Link*</label>
        <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Why do you want to switch from your current company?*</label>
        <textarea name="reason" value={formData.reason} onChange={handleChange} required></textarea>
      </div>

      <button type="submit" className="submit-btn">Submit Application</button>
    </form>
  );
};

export default JobApplicationForm;
