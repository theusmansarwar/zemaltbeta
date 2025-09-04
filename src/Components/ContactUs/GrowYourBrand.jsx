import React from "react";
import "./GrowYourBrand.css";

const GrowYourBrand = () => {
  // ✅ Data array
  const servicesData = [
    {
      heading: "Main Services",
      items: [
        "SEO Optimization",
        "Content Writing",
        "UI/UX Designing",
        "Web Development",
        "Marketing Campaigns",
        "Cybersecurity Solutions",
      ],
    },
    {
      heading: "Additional Services",
      items: [
        "App Development",
        "E-commerce Solutions",
        "Brand Strategy",
        "Video Marketing",
        "Social Media Management",
        "Analytics & Reporting",
      ],
    },
    {
      heading: "Enterprise Services",
      items: [
        "Cloud Integration",
        "Big Data Analytics",
        "AI & Machine Learning",
        "Automation",
        "IT Consulting",
        "Infrastructure Security",
      ],
    },
    {
      heading: "Creative Services",
      items: [
        "Graphic Design",
        "Motion Graphics",
        "Illustrations",
        "Brand Identity",
        "Packaging",
        "Advertising Assets",
      ],
    },
  ];

  return (
    <div className="grow-brand">
      <h2>
        Let's <span>Grow</span> Your Brand
      </h2>

      <div className="service-list">
        {servicesData.map((service, index) => (
          <React.Fragment key={index}>
            <div className="card">
              <div className="top">
                <h3>{service.heading}</h3>
              </div>
              <div className="bottom">
                <ul>
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {index !== servicesData.length - 1 && (
              <div className="vertical-line"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default GrowYourBrand;
