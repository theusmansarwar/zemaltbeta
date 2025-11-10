"use client";
import React, { useState } from "react";
import "./JobApplicationForm.css";
import { createApplication } from "@/DAL/Create";
import UploadFile from "../UploadFile/UploadFile";
import { Typography } from "@mui/material";
import { toast } from "react-toastify";

const JobApplicationForm = ({ jobId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "", // stores uploaded path
    education: "",
    basedInLahore: "",
    currentSalary: "",
    expectedSalary: "",
    willingToRelocate: "",
    experience: "",
    university: "",
    cgpa: "",
    graduationYear: "",
    currentCompany: "",
    linkedinProfile: "",
    whyDoYouWantToSwitch: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "basedInLahore") {
      newValue = value === "Yes" ? true : value === "No" ? false : "";
      if (newValue) setFormData((prev) => ({ ...prev, willingToRelocate: "" }));
    }

    if (name === "willingToRelocate") {
      newValue = value === "Yes" ? true : value === "No" ? false : "";
    }


    setFormData((prev) => ({ ...prev, [name]: newValue }));
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      setLoading(true);

      const dataToSend = new FormData();

      // Always send these fields
      const alwaysFields = [
        "name", "email", "phone", "resume", "education",
        "basedInLahore", "currentSalary", "expectedSalary",
        "experience", "university", "cgpa", "graduationYear",
        "currentCompany", "linkedinProfile", "whyDoYouWantToSwitch"
      ];

      alwaysFields.forEach((key) => {
        dataToSend.append(key, formData[key]);
      });

      // Only send willingToRelocate if basedInLahore is false
      if (formData.basedInLahore === false) {
        dataToSend.append("willingToRelocate", formData.willingToRelocate);
      }

      dataToSend.append("jobId", jobId);
      for (let [key, value] of dataToSend.entries()) {
        console.log(`${key}:`, value);
      }


      const response = await createApplication(dataToSend);

      if (response?.status === 200) {
        toast.success(" Application submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          resume: "",
          education: "",
          basedInLahore: "",
          currentSalary: "",
          expectedSalary: "",
          willingToRelocate: "",
          experience: "",
          university: "",
          cgpa: "",
          graduationYear: "",
          currentCompany: "",
          linkedinProfile: "",
          whyDoYouWantToSwitch: "",
        });
      } else if (response.status === 400 && response?.missingFields) {
        const fieldErrors = {};
        response.missingFields.forEach((field) => {
          fieldErrors[field.name] = field.message;
        });
        setErrors(fieldErrors);
        toast.error("Please fill in all fields correctly.");
      } else {
        toast.error("Failed to submit application. Try again later.");
      }
    } catch (err) {
      console.error("Application error:", err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };


  const showRelocateField = formData.basedInLahore === false;

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <h2>Apply for this Job</h2>

      {/* Row 1: Name & Email */}
      <div className="form-row">
        <div className="form-group">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=""
          />
          <label>Name*</label>
          {errors.name && <span className="error-message">{errors.name}</span>}

        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}

            placeholder=" "
          />
          <label>Email*</label>
          {errors.email && <span className="error-message">{errors.email}</span>}

        </div>
      </div>

      {/* Row 2: Phone & Education */}
      <div className="form-row">
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}

            placeholder=" "
          />
          <label>Phone*</label>
          {errors.phone && <span className="error-message">{errors.phone}</span>}

        </div>
        <div className="form-group">

          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
          >
            <option value="">Select Education</option>
            <option>Matric</option>
            <option>Intermediate</option>
            <option>Bachelor</option>
            <option>Master</option>
            <option>PhD</option>
          </select>
          <label>Education*</label>
          {errors.education && (
            <span className="error-message">{errors.education}</span>
          )}
        </div>
      </div>

      {/* Row 3: Based in Lahore & Willing to Relocate */}
      <div className="form-row">
        <div className="form-group">

          <select
            name="basedInLahore"
            value={
              formData.basedInLahore === true
                ? "Yes"
                : formData.basedInLahore === false
                  ? "No"
                  : ""
            }
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <label>Based in Lahore?*</label>
          {errors.basedInLahore && (
            <span className="error-message">{errors.basedInLahore}</span>
          )}
        </div>

        {showRelocateField && (
          <div className="form-group">

            <select
              name="willingToRelocate"
              value={
                formData.willingToRelocate === true
                  ? "Yes"
                  : formData.willingToRelocate === false
                    ? "No"
                    : ""
              }
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <label>Willing to Relocate?*</label>
            {errors.willingToRelocate && (
              <span className="error-message">{errors.willingToRelocate}</span>
            )}
          </div>
        )}
      </div>

      {/* Row 4: Experience & Current Company */}
      <div className="form-row">
        <div className="form-group">

          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option>Less than 1 year</option>
            <option>1–2 years</option>
            <option>3–5 years</option>
            <option>6–10 years</option>
            <option>10+ years</option>
          </select>
          <label>Experience*</label>
          {errors.experience && (
            <span className="error-message">{errors.experience}</span>
          )}
        </div>

        <div className="form-group">

          <input
            type="text"
            name="currentCompany"
            value={formData.currentCompany}
            onChange={handleChange}
            placeholder=""
          />
          <label>Current Company*</label>
          {errors.currentCompany && (
            <span className="error-message">{errors.currentCompany}</span>
          )}
        </div>
      </div>

      {/* Row 5: University & CGPA */}
      <div className="form-row">
        <div className="form-group">

          <input
            type="text"
            name="university"
            value={formData.university}
            onChange={handleChange}
            placeholder=" "
          />
          <label>University / Institute*</label>
          {errors.university && (
            <span className="error-message">{errors.university}</span>
          )}
        </div>

        <div className="form-group">

          <input
            type="number"
            name="cgpa"
            value={formData.cgpa}
            onChange={handleChange}
            placeholder=" "
            step="0.01"
            min="0"
            max="4"
          />
          <label>CGPA*</label>
          {errors.cgpa && <span className="error-message">{errors.cgpa}</span>}
        </div>
      </div>

      {/* Row 6: Graduation Year & LinkedIn */}
      <div className="form-row">
        <div className="form-group">

          <input
            type="number"
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleChange}

            placeholder=""
          />
          <label>Graduation Year*</label>
          {errors.graduationYear && (
            <span className="error-message">{errors.graduationYear}</span>
          )}
        </div>

        <div className="form-group">

          <input
            type="url"
            name="linkedinProfile"
            value={formData.linkedinProfile}
            onChange={handleChange}
            placeholder=""
          />
          <label>LinkedIn Profile*</label>
          {errors.linkedinProfile && (
            <span className="error-message">{errors.linkedinProfile}</span>
          )}
        </div>
      </div>

      {/* Row 7: Current & Expected Salary */}
      <div className="form-row">
        <div className="form-group">

          <input
            type="number"
            name="currentSalary"
            value={formData.currentSalary}
            onChange={handleChange}
            placeholder=" "
            min="0"
          />
          <label>Current Salary*</label>
          {errors.currentSalary && (
            <span className="error-message">{errors.currentSalary}</span>
          )}
        </div>

        <div className="form-group">

          <input
            type="number"
            name="expectedSalary"
            value={formData.expectedSalary}
            onChange={handleChange}
            placeholder=" "
            min="0"
          />
          <label>Expected Salary*</label>
          {errors.expectedSalary && (
            <span className="error-message">{errors.expectedSalary}</span>
          )}
        </div>
      </div>
      <Typography variant="h6" mt={3} mb={1}>
        Upload Resume
      </Typography>
      <UploadFile
        multiple={false}
        accept=".pdf,.doc,.docx"
        initialFile={formData.resume}
        error={errors.resume}
        onUploadComplete={(path) => setFormData((prev) => ({ ...prev, resume: path }))}
      />
      {/* Reason */}
      <div className="text-area-cont">
        <label className="textarea-label">
          Why do you want to switch from your current company?*
        </label>
        {errors.whyDoYouWantToSwitch && <span className="error-message">{errors.whyDoYouWantToSwitch}</span>}
        <textarea
          name="whyDoYouWantToSwitch"
          value={formData.whyDoYouWantToSwitch}
          onChange={handleChange}
          placeholder=" "
        />

      </div>

      <button type="submit" className="application-submit-btn" disabled={loading}>
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
};

export default JobApplicationForm;
