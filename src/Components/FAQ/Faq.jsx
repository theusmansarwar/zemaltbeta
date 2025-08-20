"use client";
import React, { useState } from "react";
import "./Faq.css";

const faqs = [
  {
    question: "Why is digital marketing important for my business?",
    answer:
      "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
  },
  {
    question: "How can digital marketing help improve my website's visibility?",
    answer:
      "By optimizing your website with SEO strategies and creating valuable content, digital marketing helps improve search engine rankings and attract more visitors.",
  },
  {
    question:
      "How long does it take to see results from digital marketing efforts?",
    answer:
      "It depends on the strategy, but typically, SEO takes 3-6 months, while paid ads can show results within days.",
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer:
      "Through KPIs like website traffic, conversion rates, ROI, bounce rates, and engagement metrics using tools like Google Analytics.",
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
          As a leading digital marketing agency, we are dedicated to providing
          comprehensive educational resources and answering frequently asked
          questions to help our clients.
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
