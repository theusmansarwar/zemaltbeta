import React from "react";
import "./ReasonsToChoose.css";

const data =  [
    {
      question: "Proven Methods Strengthening Online Visibility",
      answer:
        "Structured digital marketing with clear intent and reliable data boosts visibility. Targeted SEO services guide campaigns toward measurable reach across competitive markets. Strategic keyword planning and smart adjustments maintain stable performance across platforms. Focused content marketing increases engagement and retention. Zemalt uses refined methods to push projects toward consistent online growth. Every step emphasizes clarity, efficiency, and long-term results without unnecessary complexity or confusion."
    },
    {
      question: "Creative Execution Elevating Brand Presence",
      answer:
        "Strategic design and clear messaging enhance brand impact across digital channels. Social media marketing thrives through deep audience understanding and creative ideas. Visual coherence strengthens recognition, while PPC elements support engagement. Zemalt ensures polished concepts help brands stand out in crowded feeds. Every campaign balances fresh value, effective communication, and long-term appeal. Users experience clarity, relevance, and impact without feeling overwhelmed."
    },
    {
      question: "Data Intelligence Guiding Smarter Decisions",
      answer:
        "Accurate metrics and structured evaluation improve every stage of digital marketing. Insights highlight performance patterns and eliminate wasted effort. SEO, PPC, and social media data guide campaigns toward measurable results. Strategic analysis supports higher conversions and sustained campaign stability. Zemalt uses trend analysis to make decisions predictable, efficient, and aligned with long-term digital goals."
    },
    {
      question: "Industry Experience Delivering Reliable Results",
      answer:
        "Zemalt applies expertise in SEO, web development, and social media marketing to maintain accuracy and efficiency. Tailored strategies improve reach, outperform competitors, and provide stability. Structured processes ensure campaigns remain organized, predictable, and refined. Complex challenges are simplified into actionable steps, guaranteeing reliable results and long-term growth. Every project benefits from tested methods and proven industry insight."
    },
  ];

const ReasonsToChoose = () => {
  return (
    <section className="reasons">
      
      {/* Section Title */}
      <h2 className="reasons-title">4 Reasons to <span>Choose Zemalt</span> as your Digital Marketing Agency</h2>

      <div className="steps-container">
        {data?.map((step, index) => (
          <div className="content-box" key={index}>
            <strong className="step-number">
              {(index + 1).toString().padStart(2, "0")}
            </strong>

            <div>
              <h3>{step.question}</h3>
              <p className="step-text">{step.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsToChoose;
