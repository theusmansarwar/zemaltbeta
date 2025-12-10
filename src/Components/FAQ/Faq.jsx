"use client";
import React, { useState } from "react";
import "./Faq.css";
import { useRouter } from "next/navigation";

const Faq = ({ faqs }) => {
  const router = useRouter();

  // Initialize: first item open, others closed
  const [openStates, setOpenStates] = useState(
    faqs?.items?.map((_, index) => index === 0) || []
  );

  const toggle = (index) => {
    const newStates = [...openStates];
    newStates[index] = !newStates[index]; // Toggle only the clicked item
    setOpenStates(newStates);
  };

  return (
    <div className="faq-container" id="faqs">
      <div className="faq-left">
        <h2 className="faq-heading">{faqs?.title}</h2>
        <p>{faqs?.description}</p>
        <div className="faq-buttons">
          <button onClick={() => router.push("/contact")}>
            More Questions
          </button>
        </div>
        <img src="/Question.webp" alt="FAQs" />
      </div>
      <div className="faq-right">
        {faqs?.items?.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggle(index)}>
              <span>{item.question}</span>
              <span>{openStates[index] ? "−" : "+"}</span>
            </div>
            {openStates[index] && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
