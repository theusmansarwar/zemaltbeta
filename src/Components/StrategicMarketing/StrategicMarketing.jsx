"use client"
import React from 'react'
import "./StrategicMarketing.css"
import { FaArrowRight } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
const StrategicMarketing = () => {
    const router = useRouter();
    return (
        <div className='strategic-marketing'>
            <h2>Strategic Digital Marketing That Builds Trust and Accelerates Growth
            </h2>
            <p>What drives real growth for a modern business? A clear strategy, consistent execution, and a digital presence that truly represents your vision. Our team guides you like a skilled digital marketing strategist who understands your goals and turns them into actionable steps. You get targeted campaigns, clean messaging, and social media management and content creation services that help your audience trust your brand.</p>
            <p>Business needs a partner that plans each step with focus. You receive support that fosters clarity, enhances visibility, and yields measurable results. A dedicated digital marketing agency for small businesses provides you with structure and long-term direction that many marketing companies often fail to deliver.</p>
            <p>What happens when your brand needs something specific? You get answers, guidance, and solutions tailored to your next move. If you want a strategy session or need help with a project, reach out anytime. Our team is ready to support your growth, one strong step at a time.</p>
            <button className="proposal-btn" onClick={() => { router.push("/contact") }}>
                Get a Proposal
                <FaArrowRight />
            </button>
        </div>
    )
}

export default StrategicMarketing