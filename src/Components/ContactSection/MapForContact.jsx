import React from "react";
import "./MapForContact.css";

const MapForContact = () => {
  const mapURL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.814017177514!2d74.35180887512085!3d31.55671834534615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40db30353c6bcc97%3A0xba25d94524e2c12b!2sZemalt%20Marketing%20Agency!5e0!3m2!1sen!2s!4v1764676263861!5m2!1sen!2s";

  return (
    <div className="map-for-contact">
      <iframe
        title="Company location map"
        src={mapURL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapForContact;
