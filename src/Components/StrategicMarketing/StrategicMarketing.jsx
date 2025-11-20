"use client"
import React from 'react'
import "./StrategicMarketing.css"
import { FaArrowRight } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'

const StrategicMarketing = ({data}) => {
  const router = useRouter();

 

  return (
    <div className='strategic-marketing'>
      {data.map((item, index) => (
        item.type === "heading" ? (
          <h2 key={index}>{item.text}</h2>
        ) : (
          <p key={index}>{item.text}</p>
        )
      ))}

      <button className="proposal-btn" onClick={() => router.push("/contact")}>
        Get a Proposal
        <FaArrowRight />
      </button>
    </div>
  );
};

export default StrategicMarketing;
