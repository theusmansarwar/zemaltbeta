"use client";
import React, { useState } from "react";
import "./Faq.css";

const faqs = [
  {
    question: "Why is digital marketing important for my business?",
    answer:
      "Digital marketing is used to reach more people. It helps generate leads. It drives traffic. It improves brand visibility. You can measure the results. It is important to track performance.",
  },
  {
    question: "How can digital marketing help improve my website’s visibility?",
    answer:
      "Digital marketing uses clear methods to increase reach. Search tools show your site more often through a strong keyword focus.",
  },
  {
    question:
      "How long does it take to see results from digital marketing efforts?",
    answer:
      "Results from digital marketing take time to build. Most brands notice progress within a few weeks through steady action.",
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer:
      "Success depends on real numbers and clear outcomes. Teams track growth through traffic, leads, and customer actions.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-left">
        <h2>FAQs</h2>
        <p>
          Zemalt is a leading digital marketing agency. We provide clear answers and practical guidance. Our clients receive dedicated support backed by proven expertise.
        </p>
        <div className="faq-buttons">
          <button>More Questions</button>
          <a href="#">Contact Us</a>
        </div>
        <img src="/Question.png" alt="FAQs" />
      </div>
      <div className="faq-right">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggle(index)}>
              <span>{item.question}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
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
