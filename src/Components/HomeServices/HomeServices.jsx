'use client'

import { useEffect, useRef, useState } from 'react'
import './HomeServices.css'
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { FaArrowRight } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

const servicesData = [
  {
    tab: "SEO Services",
    title: "SEO Services That Enhance Visibility and Growth",
    description:
      "Without consistent SEO, websites can miss out on valuable visitors, leads, and growth opportunities. Implementing WordPress SEO services, advanced SEO services, and carefully planned strategies improves search rankings and site performance. Affordable SEO packages help businesses effectively optimize their sites.",
    features: [
      "Identify high-value keywords for targeted website traffic.",
      "Optimize site structure, content, and performance effectively.",
      "Build website authority and credibility for better rankings.",
    ],
    buttonText: "Explore SEO Services",
    slug: "/services/seo"
  },
  {
    tab: "Content Writing",
    title: "Create Content That Connects and Converts",
    description:
      "High-quality content attracts the right audience and supports business growth. Our content creation services provide engaging and valuable material. We also offer social media content creation services and SEO-friendly content writing services, along with content strategy and writing.",
    features: [
      "Develop informative content to engage target audiences.",
      "Create social media posts to boost engagement.",
      "Plan and write content for a long-term connection.",
    ],
    buttonText: "Explore Content Services",
    slug: "/services/content-writing"
  },
  {
    tab: "Social Media & Paid Ads",
    title: "Engage Your Audience with Social Media & Paid Ads",
    description:
      "Effective social media management services help brands connect with the right audience and drive engagement. Consistent posting, audience interaction, and performance tracking enhance visibility. Combined with ad design services, campaigns become visually appealing and optimized for results.",
    features: [
      "Schedule and manage posts for consistent engagement.",
      "Design visually appealing ads to attract attention.",
      "Analyze campaign results to refine marketing strategy.",
    ],
    buttonText: "Explore Social Media Services",
    slug: "/services/social-media-marketing"
  },
  {
    tab: "Designing Services",
    title: "Capture Attention with Engaging and Professional Designs",
    description:
      "Strong design improves brand recognition and engages audiences effectively. From UI/UX design and website layouts to creative assets & custom art, thoughtful visuals communicate. Branding & identity design, advertising graphics, print media designs, and packaging concepts help businesses maintain a consistent image.",
    features: [
      "Produce illustrations, infographics, and marketing visuals.",
      "Create visuals for social media and email campaigns.",
      "Develop logos, typography, and complete brand identity.",
    ],
    buttonText: "Explore Design Services",
    slug: "/services/ui-ux"
  },
  {
    tab: "Google Ads",
    title: "Drive Growth with Targeted Google Ads",
    description:
      "Google Ads help businesses reach the right audience, increase clicks, and convert traffic into leads. Using display advertising services, video ads, app campaigns, and local campaigns, businesses can target audiences by interest, behavior, or location. ",
    features: [
      "Create image and banner ads for campaigns.",
      "Set up YouTube and in-stream ad campaigns.",
      "Promote apps and target audiences effectively online.",
    ],
    buttonText: "Explore Google Ads Services",
    slug: "/services/google-ads"
  },
  {
    tab: "Web Development",
    title: "Build Powerful and User-Friendly Websites",
    description:
      "A well-structured website enhances user experience, improves engagement, and supports business growth. Custom web development, responsive website design, and e-commerce solutions ensure your site functions smoothly across devices. Optimized layouts, interactive features, and clean code improve performance, navigation, and search visibility. ",
    features: [
      "Build responsive websites with functional business features.",
      "Create layouts that adapt to all devices.",
      "Develop online stores and interactive user elements.",
    ],
    buttonText: "Explore Web Development",
    slug: "/services/web-development"
  },
];

export default function HomeServices() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(servicesData[0].tab)
  const [isSwitching, setIsSwitching] = useState(false)
  const tabsRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const activeContent = servicesData.find((item) => item.tab === activeTab)

  const updateScrollButtons = () => {
    const el = tabsRef.current
    if (!el) return

    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10)
  }

  const scrollTabs = (direction) => {
    const el = tabsRef.current
    if (!el) return

    const scrollAmount = 200
    const newScroll = direction === 'left'
      ? el.scrollLeft - scrollAmount
      : el.scrollLeft + scrollAmount

    el.scrollTo({ left: newScroll, behavior: "smooth" })
  }

  const handleTabClick = (tab) => {
    setIsSwitching(true)

    setTimeout(() => {
      setActiveTab(tab)
      setIsSwitching(false)
    }, 150)
  }

  useEffect(() => {
    updateScrollButtons()
    window.addEventListener("resize", updateScrollButtons)
    return () => window.removeEventListener("resize", updateScrollButtons)
  }, [])

  return (
    <section className="hservices-section" id='services'>
      <div className="hservices-container">

        <h2 className="hservices-title">Boost Your Online Presence with Expert Digital Marketing</h2>

        {/* Tabs With Arrows */}
        <div className="hservices-tabs-wrapper">
          <button
            className={`scroll-btn ${!canScrollLeft ? 'disabled' : ''}`}
            onClick={() => scrollTabs('left')}
            disabled={!canScrollLeft}
          >
            <CiCircleChevLeft size={30} />
          </button>

          <div className="hservices-tabs" ref={tabsRef} onScroll={updateScrollButtons}>
            {servicesData.map((item) => (
              <button
                key={item.tab}
                className={`hservices-tab ${activeTab === item.tab ? 'active' : ''}`}
                onClick={() => handleTabClick(item.tab)}
              >
                {item.tab}
              </button>
            ))}
          </div>

          <button
            className={`scroll-btn ${!canScrollRight ? 'disabled' : ''}`}
            onClick={() => scrollTabs('right')}
            disabled={!canScrollRight}
          >
            <CiCircleChevRight size={30} />
          </button>
        </div>

        {/* Content Area */}
        <div className={`hservices-content ${isSwitching ? 'switching' : ''}`}>
          <div className="hservices-left">
            <h3 className="hservices-heading" key={`heading-${activeTab}`}>
              {activeContent.title}
            </h3>
            <p className="hservices-description" key={`desc-${activeTab}`}>
              {activeContent.description}
            </p>

            <button 
              className="hservices-link" 
              onClick={() => { router.push(`${activeContent.slug}`) }}
              key={`btn-${activeTab}`}
            >
              {activeContent.buttonText} <FaArrowRight />
            </button>
          </div>

          <div className="hservices-right" key={`features-${activeTab}`}>
            {activeContent.features.map((feature, i) => (
              <div key={i} className="hservices-card">{feature}</div>
            ))}
            <div className="hservices-circle"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
