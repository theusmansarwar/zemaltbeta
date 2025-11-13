"use client";
import { BsArrowRightCircle } from "react-icons/bs";
import "./PortfolioCards2.css";
import PortfolioPopup from "./PortfolioPopup";
import { useState } from "react";


const portfolios = [
    {
        _id: "6915d574e4fa3dbce16278fd",
        title: "Lorem Ipsum",
        description: "loremsdkaksldkalskdl",
        thumbnail: "/digitalaura-thumbnail.webp",
        images: [
            "/digitalaura-thumbnail.webp",
            "/digitalaura1.webp",
            "/digitalaura2.webp",
            "/digitalaura3.webp",
        ],
        videos: [],
        published: true
    },
    {
        _id: "6915d574e4fa3dbce16278fe",
        title: "Another Project",
        description: "Some description here",
        thumbnail: "/moawin1.webp",
        images: [
            "/moawin1.webp",
            "/moawin2.webp",
            "/moawin3.webp",
        ],
        videos: [],
        published: true
    }
];


const PortfolioCards2 = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpen = (project) => {
        setSelectedProject(project);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        setSelectedProject(null);
    };
    return (
        <>
            <div className="portfolio-cards2" id="team">
                <h2>Portfolio</h2>
                <p>
                    Great work begins with the right people and institutions. Zemalt brings
                    together experts who know how to turn ideas into measurable results.
                    Every project starts with a clear plan, a proven strategy, and a skilled
                    team that works with precision. Our specialists bring mastery in SEO,
                    ads, content, and design. Each member plays a role that strengthens
                    campaigns and builds momentum. Clients trust Zemalt because we listen
                    carefully, plan smartly, and deliver exactly what we promise. The team
                    studies your business goals and crafts strategies that match your
                    industry. Zemalt gains a group of professionals who care about your
                    growth as much as you do.
                </p>

                <div className="top-circle1"></div>
                <div className="top-circle2"></div>

                <div className="portfolio-cards-container">
                    {portfolios.map((project) => (
                        <div
                            key={project._id}
                            className="eachcard"
                            style={{
                                backgroundImage: `url(${project.thumbnail})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <BsArrowRightCircle onClick={() => handleOpen(project)} />
                            <h3>{project.title}</h3>
                        </div>
                    ))}
                </div>


                <div className="bottom-circle"></div>
            </div>
            {/* Popup receives full project (HTML included) */}
            {isOpen && (
                <PortfolioPopup project={selectedProject} onClose={handleClose} />
            )}
        </>
    );
};

export default PortfolioCards2;
