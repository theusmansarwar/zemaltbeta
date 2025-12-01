"use client";
import ContactForm from "../ContactUs/ContactForm";
import "./ContactSection.css";
import MapForContact from "./MapForContact";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <ContactForm />
      <MapForContact />
    </div>
  );
};

export default ContactSection;
