"use client";
import "./PortfolioSection.css";
import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import PortfolioCards2 from "../portfolioCards/PortfolioCards2";
import PortfolioPopup from "../portfolioCards/PortfolioPopup";
import "./PortfolioSection.css"

const portfolios = [
    {
        _id: "1",
        title: "Plutosec (Canada)",

        thumbnail: "/plutosec-thumbnail.webp",
        images: [
            "/plutosec-thumbnail.webp",
            "/plutosec1.webp",
            "/plutosec2.webp",
            "/plutosec3.webp",
        ],
        videos: [],
        description: `
      <p>Plutosec needed a digital presence that reflected its strength in cybersecurity. Zemalt designed a modern website that showed clarity and trust. The goal was to help users view services fast and trust the brand.</p>
      
      <ul>
        <li>Designed a responsive site that delivered a smooth and intuitive experience.</li>
        <li>Enhanced site speed, improved layout flow, and refined visual balance to maintain user interest.</li>
        <li>Strengthened search visibility through precise on-page and off-page SEO steps.</li>
        <li>Managed Facebook, Instagram, TikTok, LinkedIn, and X using a consistent brand tone.</li>
        <li>Created detailed cybersecurity videos to build trust and increase engagement.</li>
      </ul>

      <p>The website gave Plutosec a strong place in the digital market and helped secure higher rankings on Google. Social platforms kept the brand active, while videos educated users and boosted engagement.</p>

      <p>The overall outcome: increased visibility, more qualified leads, and higher brand trust.</p>
    `,
        published: true
    },
    {
        _id: "2",
        title: "Smart Energie Ltd (UK)",


        thumbnail: "/smartenergy1.webp",
        images: [
            "/smartenergy1.webp",
            "/smartenergy2.webp",
        ],
        videos: [],
        description: `
      <p>Smart Energie Ltd took a firm step to strengthen its online reach and convert targeted UK audiences through verified campaigns. The goal was to help homeowners apply for ECO4 and GBIS schemes.</p>

      <ul>
        <li>Planned and managed ads across Facebook, Instagram, and Meta Ads.</li>
        <li>Created visuals built around trust and relevance to UK homeowners.</li>
        <li>Developed lead funnels to improve response time and consistency.</li>
        <li>Created customer support SOPs to maintain smooth communication.</li>
        <li>Monitored analytics and performance reporting for refinement.</li>
      </ul>

      <p>The campaigns generated verified qualified leads and increased trust among the audience. Reporting identified improvements, while consistent visuals built credibility.</p>

      <p>The collaboration resulted in better audience reach, optimized budget usage, and stronger conversions.</p>
    `,
        published: true
    },
    {
        _id: "3",
        title: "Digital Aura (Sweden)",

        thumbnail: "/digitalaura-thumbnail.webp",
        images: [
            "/digitalaura1.webp",
            "/digitalaura2.webp",
            "/digitalaura3.webp",
        ],
        videos: [],
        description: `
      <p>Digital Aura wanted a digital presence aligned with its creative identity. Zemalt designed a website focused on smooth navigation and modern appeal to create clarity and user trust.</p>

      <ul>
        <li>Designed a layout highlighting key services and brand messaging.</li>
        <li>Developed a fully responsive structure across all devices.</li>
        <li>Created a flexible format for easy updates and content scaling.</li>
        <li>Included interactive UX elements to guide users strategically.</li>
        <li>Offered a 1-month SEO trial to test search performance.</li>
      </ul>

      <p>The outcome established a clean digital identity that aligned with the brand’s purpose. Faster speed and improved navigation enhanced user engagement while SEO provided performance insights.</p>

      <p>The final delivery helped Digital Aura achieve an organized and competitive digital presence.</p>
    `,
        published: true
    },
    {
        _id: "4",
        title: "CarterOil (United States)",

        thumbnail: "/carteroilthumbnail.webp",
        images: [
            "/carteroil1.webp",
            "/carteroil2.webp",
            "/carteroil3.webp",
        ],
        videos: [],
        description: `
      <p>CarterOil needed a strong digital identity that communicated professionalism and structure in the energy sector. The focus was clarity, navigation, and well-organized product information.</p>

      <ul>
        <li>Created a responsive web interface matching CarterOil’s branding.</li>
        <li>Developed a professional product catalog layout.</li>
        <li>Implemented a 2-week SEO trial for keyword insights.</li>
        <li>Improved site structure for speed and stability.</li>
        <li>Aligned all visual assets for one unified identity.</li>
      </ul>

      <p>The project led to improved brand visibility, improved search rankings, and better lead retention. The new site structure made it easier to present products and track performance metrics.</p>

      <p>The collaboration helped CarterOil move toward sustainable digital growth.</p>
    `,
        published: true
    },
    {
        _id: "5",
        title: "Moawin Foundation (USA)",

        thumbnail: "/moawin1.webp",
        images: [
            "/moawin1.webp",
            "/moawin2.webp",
            "/moawin3.webp",
        ],
        videos: [],
        description: `
      <p>Moawin Foundation needed a digital ecosystem to support donations, event engagement, and awareness. Zemalt created a platform that reflected transparency and purpose.</p>

      <ul>
        <li>Built a custom auction website for charity participation.</li>
        <li>Redesigned the main site with a modern and accessible layout.</li>
        <li>Designed Houston Gala 2025 event assets including standees and pledge cards.</li>
        <li>Created a unified identity across print and digital platforms.</li>
        <li>Enabled interactive elements to improve engagement and registration.</li>
      </ul>

      <p>The project strengthened Moawin Foundation’s outreach and digital clarity. The auction platform improved donor interaction and event engagement.</p>

      <p>The result: A digital transformation aligned with the foundation’s humanitarian mission.</p>
    `,
        published: true
    },
    {
        _id: "6",
        title: "Broadium (.NET / .US / .SHOP)",

        thumbnail: "/broadium2.webp",
        images: [
            "/broadium2.webp",
            "/broadium1.webp",
            "/broadium3.webp",
        ],
        videos: [],
        description: `
      <p>Broadium required a unified digital presence across multiple domains. The challenge was maintaining consistency while serving different audiences.</p>

      <ul>
        <li>Developed custom websites for broadium.net, broadium.us, and broadium.shop.</li>
        <li>Created a structured brand theme with visual consistency.</li>
        <li>Designed responsive layouts for seamless browsing.</li>
        <li>Built complete brand assets including logo variations and type rules.</li>
        <li>Created digital asset packs for cross-platform usage.</li>
      </ul>

      <p>The project resulted in a cohesive identity that felt premium and unified. The brand became more recognizable, structured, and scalable.</p>

      <p>The final delivery positioned Broadium as a modern, trustworthy, and industry-ready brand.</p>
    `,
        published: true
    },
    {
        _id: "7",
        title: "SIM SOLUTIONS CO LLC",

         thumbnail: "/sim2.webp",
        images: [
            "/sim2.webp",
            "/sim1.webp",
            "/sim3.webp",
        ],
        videos: [],
        description: `
      <p>Sim Solutions Co LLC took a decisive step to strengthen its brand presence and present a professional image to clients and partners. Zemalt delivered a comprehensive design solution focused on clarity, consistency, and visual appeal. The goal was to create a logo and company profile that reflected the company’s innovation, reliability, and market position.</p>

      <ul>
        <li>Designed a modern, versatile logo representing innovation and professionalism.</li>
        <li>Developed a structured company profile highlighting products, services, and company strengths.</li>
        <li>Ensured all design elements aligned with brand values and market positioning.</li>
        <li>Created visuals that conveyed credibility and enhanced audience perception.</li>
        <li>Standardised presentation materials to improve client engagement and communication.</li>
        <li>Optimised layouts for clarity, readability, and professional appeal.</li>
        <li>Tracked stakeholder feedback to refine and finalise design elements.</li>
      </ul>

      <p>The new logo and company profile elevated Sim Solutions’ brand identity. Clear visuals and consistent messaging strengthened client perception and helped the company stand out in competitive markets. Positive responses from partners and improved professional presentation highlighted the impact of high-quality design. Standardised materials ensured efficient communication, leaving a lasting impression on potential clients. Zemalt supported Sim Solutions in creating a professional, coherent, and visually compelling brand presence that reinforced credibility and market positioning.</p>
    `,
        published: true
    },
];

const PortfolioSection = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [visibleCards, setVisibleCards] = useState(1);

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
        if (!container) return;

        let cardWidth = container.children[0]?.offsetWidth || 0;
        const gap = 24;
        const intervalDelay = 3000;
        let index = 0;
        const maxIndex = portfolios.length - visibleCards;

        const autoScroll = () => {
            index++;

            if (index > maxIndex) {
                container.scrollTo({ left: 0, behavior: "smooth" });
                index = 0;
                setCurrentPage(0);
                return;
            }

            const nextScroll = index * (cardWidth + gap);
            container.scrollTo({
                left: nextScroll,
                behavior: "smooth",
            });

            setCurrentPage(index);
        };

        const interval = setInterval(autoScroll, intervalDelay);

        return () => clearInterval(interval);
    }, [visibleCards]);



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
                    campaigns and builds momentum. Clients trust Zemalt because we listen
                    carefully, plan smartly, and deliver exactly what we promise. The team
                    studies your business goals and crafts strategies that match your
                    industry. Zemalt gains a group of professionals who care about your
                    growth as much as you do.
                </p>

                <div className="top-circle1"></div>
                <div className="top-circle2"></div>

                <div className="portfolio-cards-container" ref={scrollContainerRef}>
                    {portfolios.map((project) => (
                        <PortfolioCards2 key={project._id} project={project} onClick={handleOpen} />
                    ))}
                </div>
                <div className="bottom-circle"></div>

                <div className="dots-wrapper">
                    {Array.from({ length: portfolios.length - visibleCards + 1 }).map((_, index) => (

                        <span
                            key={index}
                            className={`dot ${index === currentPage ? "active" : ""}`}
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
