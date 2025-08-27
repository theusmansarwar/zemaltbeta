import React from "react";
import "./JobDescription.css";

const JobDescription = () => {
  const sections = [
    {
      title: "Who Are We Looking For",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Mauris elementum sapien et ligula varius elementum magna et venenatis.",
        "Nullam aliquam, nisl eget gravida sollicitudin, elit velit fermentum nulla.",
        "Suspendisse eget ex et dolor volutpat bibendum.",
        "Mauris at sapien a nulla posuere vehicula ac non nisl.",
        "Morbi pellentesque odio sed dictum suscipit.",
        "Donec sed erat iaculis sapien vehicula commodo."
      ]
    },
    {
      title: "What You Will Be Doing",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Mauris elementum sapien et ligula varius elementum magna et venenatis.",
        "Nullam aliquam, nisl eget gravida sollicitudin, elit velit fermentum nulla.",
        "Suspendisse eget ex et dolor volutpat bibendum.",
        "Mauris at sapien a nulla posuere vehicula ac non nisl.",
        "Morbi pellentesque odio sed dictum suscipit.",
        "Donec sed erat iaculis sapien vehicula commodo."
      ]
    },
    {
      title: "Bonus Points For Familiarity with",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Mauris elementum sapien et ligula varius elementum magna et venenatis.",
        "Nullam aliquam, nisl eget gravida sollicitudin, elit velit fermentum nulla.",
        "Suspendisse eget ex et dolor volutpat bibendum.",
        "Mauris at sapien a nulla posuere vehicula ac non nisl."
      ]
    },
    {
      title: "Educational Requirement",
      points: [
        "Bachelor’s degree in Computer Science, Software Engineering, or a related field.",
        "Candidates with relevant certifications will be preferred."
      ]
    },
    {
      title: "Salary",
      points: [
        "Salary: 60,000 - 80,000 PKR (Depends on Skill and Experience).",
        "Salary Review: Yearly"
      ]
    },
    {
      title: "Working Hours",
      points: ["9 AM - 6 PM"]
    },
    {
      title: "Working Days",
      points: ["Weekly: 5 Days", "Weekend: Saturday, Sunday"]
    },
    {
      title: "Perks & Benefits You’ll Get",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Mauris elementum sapien et ligula varius elementum magna et venenatis.",
        "Nullam aliquam, nisl eget gravida sollicitudin, elit velit fermentum nulla.",
        "Suspendisse eget ex et dolor volutpat bibendum.",
        "Mauris at sapien a nulla posuere vehicula ac non nisl.",
        "Morbi pellentesque odio sed dictum suscipit.",
        "Donec sed erat iaculis sapien vehicula commodo."
      ]
    },
    {
      title: "The Application Process",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Mauris elementum sapien et ligula varius elementum magna et venenatis.",
        "Nullam aliquam, nisl eget gravida sollicitudin, elit velit fermentum nulla.",
        "Suspendisse eget ex et dolor volutpat bibendum.",
        "Mauris at sapien a nulla posuere vehicula ac non nisl."
      ]
    },
    {
      title: "Our Statement",
      points: [
        "We are an equal-opportunity employer. We value diversity and are committed to providing an inclusive workplace.",
        "Candidates from diverse backgrounds are encouraged to apply."
      ]
    }
  ];

  return (
    <div className="job-description">
      {sections.map((section, idx) => (
        <div key={idx} className="job-section">
          <h3>{section.title}</h3>
          <ul>
            {section.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default JobDescription;
