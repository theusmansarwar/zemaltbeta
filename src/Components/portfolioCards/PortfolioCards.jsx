import React from 'react'
import './PortfolioCards.css'
const PortfolioCards = () => {
    const projectsToShow = [
  { name: "Number of Pages", description: "Select the number of pages your website will include.", image :"/how-we-work.png"},
  { name: "Responsive Design", description: "Choose whether the website adapts to all screen sizes.", image :"/how-we-work.png" },
  { name: "Style of Design", description: "Pick a style that matches your brand’s identity.", image :"/how-we-work.png" },
  { name: "Database Integration", description: "Add backend database connectivity to your site.", image :"/how-we-work.png" },
  { name: "Copywriting # of Pages", description: "Specify the number of pages that require professional copywriting." , image :"/how-we-work.png"},
  { name: "E-Commerce Functionality", description: "Enable online store features like cart and checkout." , image :"/how-we-work.png"},
  { name: "SEO with Placement Guarantee", description: "Optimize your website to rank higher on search engines." , image :"/how-we-work.png"},
  { name: "CMS", description: "Select the content management system for your project." , image :"/how-we-work.png"},
  { name: "Logo Design", description: "Include a custom-designed brand logo." , image :"/how-we-work.png"},
  { name: "Custom Illustrations", description: "Add unique, brand-specific illustrations to your site." , image :"/how-we-work.png"},
  { name: "Blog Setup", description: "Integrate a blog section for content publishing." , image :"/how-we-work.png"},
  { name: "Social Media Integration", description: "Connect and display your social media feeds." , image :"/how-we-work.png"},
  { name: "Email Newsletter Setup", description: "Enable newsletter signup and email marketing tools." , image :"/how-we-work.png"},
  { name: "Analytics Setup", description: "Track visitor behavior with integrated analytics tools." , image :"/how-we-work.png"},
  { name: "Security Features", description: "Add SSL, firewall, and security monitoring for your site." , image :"/how-we-work.png"}
];

  return (
    <div>

           <div className="Portfolio-card-area">
        {projectsToShow.map((project, index) => (
          <div className="Portfolio-card-div" key={index} style={{ backgroundImage: `url(${project.image})` }}>
            <div className="Portfolio-card-overlay">
              <p><span/>{project.name}</p>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioCards