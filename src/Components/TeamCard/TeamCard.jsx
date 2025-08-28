import React from "react";
import "./TeamCard.css";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
const teamData = [
  {
    id: 1,
    name: "Annas",
    surname: "Khan",
    role: "SEO Expert",
    description: `
      enim. ullamcorper porta nibh Lorem nisl. consectetur eget at, amet, dignissim, placerat varius tempor 
      venenatis eu Ut nec Nullam in Lorem non non tincidunt Nunc eget Quisque hendrerit malesuada turpis Quisque 
      sit commodo ex tincidunt urna In ex consectetur eget at, amet, dignissim, placerat varius tempor venenatis 
      eu Ut nec consectetur eget at, amet, dignissim, placerat varius tempor venenatis eu Ut nec
    `,
    image: "/annas.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Annas",
    surname: "Khan",
    role: "SEO Expert",
    description: `
      enim. ullamcorper porta nibh Lorem nisl. consectetur eget at, amet, dignissim, placerat varius tempor 
      venenatis eu Ut nec Nullam in Lorem non non tincidunt Nunc eget Quisque hendrerit malesuada turpis Quisque 
      sit commodo ex tincidunt urna In ex consectetur eget at, amet, dignissim, placerat varius tempor venenatis 
      eu Ut nec consectetur eget at, amet, dignissim, placerat varius tempor venenatis eu Ut nec
    `,
    image: "/annas.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Annas",
    surname: "Khan",
    role: "SEO Expert",
    description: `
      enim. ullamcorper porta nibh Lorem nisl. consectetur eget at, amet, dignissim, placerat varius tempor 
      venenatis eu Ut nec Nullam in Lorem non non tincidunt Nunc eget Quisque hendrerit malesuada turpis Quisque 
      sit commodo ex tincidunt urna In ex consectetur eget at, amet, dignissim, placerat varius tempor venenatis 
      eu Ut nec consectetur eget at, amet, dignissim, placerat varius tempor venenatis eu Ut nec
    `,
    image: "/annas.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Annas",
    surname: "Khan",
    role: "SEO Expert",
    description: `
      enim. ullamcorper porta nibh Lorem nisl. consectetur eget at, amet, dignissim, placerat varius tempor 
      venenatis eu Ut nec Nullam in Lorem non non tincidunt Nunc eget Quisque hendrerit malesuada turpis Quisque 
      sit commodo ex tincidunt urna In ex consectetur eget at, amet, dignissim, placerat varius tempor venenatis 
      eu Ut nec consectetur eget at, amet, dignissim, placerat varius tempor venenatis eu Ut nec
    `,
    image: "/annas.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];
const teamData2 = [
  {
    id: 1,
    name: "Annas",
    surname: "Khan",
    role: "SEO Expert",
    description: `
      enim. ullamcorper porta nibh Lorem nisl. consectetur eget at, amet, dignissim, placerat varius tempor 
      venenatis eu Ut nec Nullam in Lorem non non tincidunt Nunc eget Quisque hendrerit malesuada turpis Quisque 
      sit commodo ex tincidunt urna In ex consectetur eget at, amet, dignissim, placerat varius tempor venenatis 
      eu Ut nec consectetur eget at, amet, dignissim, placerat varius tempor venenatis eu Ut nec
    `,
    image: "/annas.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Annas",
    surname: "Khan",
    role: "SEO Expert",
    description: `
      enim. ullamcorper porta nibh Lorem nisl. consectetur eget at, amet, dignissim, placerat varius tempor 
      venenatis eu Ut nec Nullam in Lorem non non tincidunt Nunc eget Quisque hendrerit malesuada turpis Quisque 
      sit commodo ex tincidunt urna In ex consectetur eget at, amet, dignissim, placerat varius tempor venenatis 
      eu Ut nec consectetur eget at, amet, dignissim, placerat varius tempor venenatis eu Ut nec
    `,
    image: "/annas.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Annas",
    surname: "Khan",
    role: "SEO Expert",
    description: `
      enim. ullamcorper porta nibh Lorem nisl. consectetur eget at, amet, dignissim, placerat varius tempor 
      venenatis eu Ut nec Nullam in Lorem non non tincidunt Nunc eget Quisque hendrerit malesuada turpis Quisque 
      sit commodo ex tincidunt urna In ex consectetur eget at, amet, dignissim, placerat varius tempor venenatis 
      eu Ut nec consectetur eget at, amet, dignissim, placerat varius tempor venenatis eu Ut nec
    `,
    image: "/annas.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Annas",
    surname: "Khan",
    role: "SEO Expert",
    description: `
      enim. ullamcorper porta nibh Lorem nisl. consectetur eget at, amet, dignissim, placerat varius tempor 
      venenatis eu Ut nec Nullam in Lorem non non tincidunt Nunc eget Quisque hendrerit malesuada turpis Quisque 
      sit commodo ex tincidunt urna In ex consectetur eget at, amet, dignissim, placerat varius tempor venenatis 
      eu Ut nec consectetur eget at, amet, dignissim, placerat varius tempor venenatis eu Ut nec
    `,
    image: "/annas.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];
const TeamCard = () => {
  return (
    <div className="team-section">
      <h2>TEAM A</h2>
      <div className="team-card-container">
        {teamData.map((member) => (
          <div key={member.id} className="team-card">
            <div className="profile-left">
              <img src={member.image} alt={member.name} />
              <div className="social-icons">
                <a
                  href={member.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon">
                    <RiFacebookFill />
                  </div>
                </a>

                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon">
                    <AiFillInstagram />
                  </div>
                </a>
              </div>
            </div>
            <div className="profile-right">
              <strong>
                {member.name} <span className="surname">{member.surname}</span>
              </strong>
              <span className="role">{member.role}</span>
              <p className="description">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>TEAM B</h2>
      <div className="team-card-container">
        {teamData2.map((member) => (
          <div key={member.id} className="team-card">
            <div className="profile-left">
              <img src={member.image} alt={member.name} />
              <div className="social-icons">
                <a
                  href={member.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon">
                    <RiFacebookFill />
                  </div>
                </a>

                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon">
                    <AiFillInstagram />
                  </div>
                </a>
              </div>
            </div>
            <div className="profile-right">
              <strong>
                {member.name} <span className="surname">{member.surname}</span>
              </strong>
              <span className="role">{member.role}</span>
              <p className="description">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
