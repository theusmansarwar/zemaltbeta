"use client"
import React, { useEffect, useState } from 'react'
import "./PortfolioPage.css"
import PortfolioCards2 from '../portfolioCards/PortfolioCards2';
import PortfolioPopup from '../portfolioCards/PortfolioPopup';
import { getPortfolios } from '@/DAL/Fetch';


const PortfolioPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [visibleCount, setVisibleCount] = useState(4);
        const [portfolios, setPortfolios] = useState([]);
    
    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await getPortfolios();
                if (response?.portfolios) {
                    setPortfolios(response.portfolios);
                }
            } catch (error) {
                console.log("Error fetching portfolios:", error);
            }
        };
    
        fetchPortfolios();
    }, []);
     

    const handleOpen = (project) => {
        setSelectedProject(project);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        setSelectedProject(null);
    };

    const handleSeeMore = () => {
        setVisibleCount(portfolios.length); // show all on click
    }

    return (
        <>
            <div className='portfolio-page'>
                <div className="portfolios-container">
                    {portfolios.slice(0, visibleCount).map((project) => (
                        <PortfolioCards2
                            key={project._id}
                            project={project}
                            onClick={handleOpen}
                        />
                    ))}
                </div>

                {visibleCount < portfolios.length && (
                    <button className='see-more-port' onClick={handleSeeMore}>
                        See More
                    </button>
                )}
            </div>

            {isOpen && (
                <PortfolioPopup project={selectedProject} onClose={handleClose} />
            )}
        </>
    )
}

export default PortfolioPage