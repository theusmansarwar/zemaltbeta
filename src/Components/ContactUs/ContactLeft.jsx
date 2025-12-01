"use client";
import "./ContactLeft.css";

const ContactLeft = () => {
  return (
    <div className="contact-left">
      <h2>
        <span>DIGITIZING</span> YOUR <br />
        BUSINESS <span>GROWTH</span>
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
  );
};

export default ContactLeft;
