"use client"
import { useState } from "react";
import { FiTrendingUp, FiDatabase, FiEdit3, FiBarChart2, FiChevronDown } from "react-icons/fi";
import "./ImpactOfMarketing.css";
import { useRouter } from "next/navigation";

const featureData = [
    {
        id: 1,
        title: "Lead Acceleration",
        icon: <FiTrendingUp size={22} color="white" />,
        bg: "#0EA5E9",
        img: "/blog-thumbnail.jpg",
        heading: "Turn interest into qualified leads faster",
        text1:
            "Strong growth starts when the right audience receives a clear message at the perfect moment. Lead Acceleration builds momentum through targeted campaigns that speak to real intent. A structured path moves prospects from curiosity to interest with ease. Strategic touchpoints shape each step of their decision flow.",
        text2:
            "Optimized funnels remove confusion and keep people engaged. Lead quality rises as more prospects reach a buy stage. Lead generation services and digital marketing services, and B2B marketing solutions support faster conversion and long-term performance."
    },
    {
        id: 2,
        title: "Market Positioning",
        icon: <FiDatabase size={22} color="white" />,
        bg: "#06B6D4",
        img: "/blog-thumbnail.jpg",
        heading: "Stand out with a clear and memorable identity",
        text1:
            "A brand earns trust once its message stays sharp, focused, and consistent. Corporate branding solutions define how a business appears across competitive spaces. Clear communication builds authority in crowded markets. Strong visuals support recognition on every platform.",
        text2:
            "A stable identity shows customers what the brand represents and why it matters. Differentiation grows stronger when the value stays visible and easy to understand. Brand strategy and SEO services strengthen visibility and cement a lasting position in the market."
    },
    {
        id: 3,
        title: "Conversion Enablement",
        icon: <FiEdit3 size={22} color="white" />,
        bg: "#14B8A6",
        img: "/blog-thumbnail.jpg",
        heading: "Guide customers smoothly toward action",
        text1:
            "Better performance starts when each step on a website leads users forward. Conversion Enablement clears friction and keeps the path transparent. Clean structure helps people understand offers within seconds. Direct messages reduce confusion and push actions naturally.",
        text2:
            "Engagement grows as each block builds trust and removes hesitation. Higher conversions appear even when traffic remains the same. Conversion optimization and website optimization, and UX design services push results upward without unnecessary complexity."
    },
    {
        id: 4,
        title: "Revenue Expansion",
        icon: <FiBarChart2 size={22} color="white" />,
        bg: "#0284C7",
        img: "/blog-thumbnail.jpg",
        heading: "Unlock new opportunities for long-term growth",
        text1:
            "Stronger growth begins once a business identifies new areas of profit. Revenue Expansion highlights powerful customer segments and reveals untapped potential. Existing channels perform better when the value stays consistent across the journey.",
        text2:
            "Repeat customers return when service and communication remain aligned. Smart insights support decisions that keep progress stable. A clear roadmap turns digital performance into measurable success. Online advertising and PPC management drive new revenue streams and support long-term scaling."
    }
];

export default function ImpactOfMarketing() {
    const router = useRouter();
    const [active, setActive] = useState(featureData[0]);
    const [expandedId, setExpandedId] = useState(featureData[0].id);

    const handleFeatureClick = (item) => {
        setActive(item);
        setExpandedId(item.id);
    };

    return (
        <div className="landing-page">
            <h2 className="title">Unleash Revenue Growth with Proven Marketing Strategies</h2>
            <p className="description">Our data-driven and creative strategies help brands accelerate leads, optimize conversions, and expand revenue. Each campaign combines insight, innovation, and proven methods to deliver measurable results. Clients gain clarity and control over their growth, ensuring lasting impact in the competitive digital landscape.</p>
            <div className="landing-container">

                {/* LEFT SECTION */}
                <div className="left-section">
                    <div className="features-list">
                        {featureData.map((item) => (
                            <div key={item.id} className="feature-wrapper">
                                <div
                                    className={`feature-card ${active.id === item.id ? "active" : ""}`}
                                    onClick={() => handleFeatureClick(item)}
                                >
                                    <div className="feature-card-header">
                                        <div className="feature-icon" style={{ backgroundColor: item.bg }}>
                                            {item.icon}
                                        </div>
                                        <strong className="feature-title">{item.title}</strong>
                                    </div>
                                    <FiChevronDown
                                        className={`dropdown-icon ${expandedId === item.id ? "expanded" : ""}`}
                                        size={20}
                                    />
                                </div>

                                {/* Mobile Content */}
                                <div className={`mobile-content ${expandedId === item.id ? "expanded" : ""}`}>
                                    <img src={item.img} alt={item.title} className="mobile-image" />
                                    <strong className="mobile-heading">{item.heading}</strong>
                                    <p className="mobile-text">{item.text1}</p>
                                    <p className="mobile-text">{item.text2}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="right-section">
                    <div className="hero-content">
                        <img src={active.img} alt={active.title} className="dynamic-image" />

                        <h3 className="hero-heading">{active.heading}</h3>

                        <p className="hero-text">{active.text1}</p>
                        <p className="hero-text">{active.text2}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
