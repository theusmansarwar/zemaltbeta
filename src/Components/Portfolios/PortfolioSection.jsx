"use client";
import "./PortfolioSection.css";
import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import PortfolioCards2 from "../portfolioCards/PortfolioCards2";
import PortfolioPopup from "../portfolioCards/PortfolioPopup";
import "./PortfolioSection.css"
import { getPortfolios } from "@/DAL/Fetch";
import PortfolioSkeleton from "../SkeletonLoaders/PortfolioSkeleton";


const PortfolioSection = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [visibleCards, setVisibleCards] = useState(1);
    const [portfolios, setPortfolios] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await getPortfolios();
                if (response?.portfolios) {
                    setPortfolios(response.portfolios);
                }
            } catch (error) {
                console.log("Error fetching portfolios:", error);
            } finally {
                setTimeout(() => setIsLoading(false), 800);
            }
        };

        fetchPortfolios();
    }, []);


    const scrollContainerRef = useRef(null);

    const handleOpen = (project) => {
        setSelectedProject(project);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        setSelectedProject(null);
    };
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const updateVisibleCards = () => {
            const cardWidth = container.children[0]?.offsetWidth || 0;
            const containerWidth = container.offsetWidth;
            const count = Math.floor(containerWidth / cardWidth) || 1;
            setVisibleCards(count);
        };

        updateVisibleCards();
        window.addEventListener("resize", updateVisibleCards);
        return () => window.removeEventListener("resize", updateVisibleCards);
    }, []);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container || portfolios.length === 0 || !container.children.length) return;

        let cardWidth = container.children[0]?.offsetWidth || 0;
        const gap = 24;
        const intervalDelay = 3000;
        let index = 0;

        const maxIndex = portfolios.length - visibleCards;

        const autoScroll = () => {
            index++;

            if (index > maxIndex) {
                index = 0;
            }

            const nextScroll = index * (cardWidth + gap);

            container.scrollTo({
                left: nextScroll,
                behavior: "smooth"
            });

            setCurrentPage(index);
        };

        const interval = setInterval(autoScroll, intervalDelay);

        return () => clearInterval(interval);

    }, [visibleCards, portfolios]);




    const handleDotClick = (pageIndex) => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 0;
            const gap = 24;
            const scrollPosition = pageIndex * (cardWidth + gap);
            scrollContainerRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
            setCurrentPage(pageIndex);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        container.scrollLeft = 0;

        const handleScroll = () => {
            const cardWidth = container.children[0]?.offsetWidth || 0;
            const gap = 24;
            const pageIndex = Math.round(container.scrollLeft / (cardWidth + gap));
            setCurrentPage(pageIndex);
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="portfolio-section" id="portfolio">
                <div className="head-container">
                    <h2>Portfolio</h2>
                    <button className="view-btn" onClick={() => { router.push("/portfolio") }}>view all</button>
                </div>
                <p>
                    Great work begins with the right people and institutions. Zemalt brings
                    together experts who know how to turn ideas into measurable results.
                    Every project starts with a clear plan, a proven strategy, and a skilled
                    team that works with precision. Our specialists bring mastery in SEO,
                    ads, content, and design. Each member plays a role that strengthens
                    campaigns and builds momentum.
                </p>


                <div className="top-circle1"></div>
                <div className="top-circle2"></div>

                <div className="portfolio-cards-container" ref={scrollContainerRef}>
                    {isLoading
                        ? [...Array(4)].map((_, i) => <PortfolioSkeleton key={`skeleton-${i}`} />)
                        : portfolios.map((project) => (
                            <PortfolioCards2 key={project._id} project={project} onClick={handleOpen} />
                        ))
                    }
                </div>

                <div className="bottom-circle"></div>

                <div className=" port-dots-wrapper">
                    {Array.from({ length: portfolios.length - visibleCards + 1 }).map((_, index) => (

                        <span
                            key={index}
                            className={`pagination-dot ${index === currentPage ? "active" : ""}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>
            {isOpen && (
                <PortfolioPopup project={selectedProject} onClose={handleClose} />
            )}
        </>
    );
};

export default PortfolioSection;
