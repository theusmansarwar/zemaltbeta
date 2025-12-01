"use client"
import React from "react";
import "./LastBottom.css";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";

export default function LastBottom() {
  const router = useRouter();
  return (
    <section className="lastbottom">
    <h2>How Zemalt Delivered 4,473 Leads in 5 Months for a Cybersecurity Company</h2>
     <div className="bottom-container">
       <div className="lastbottom-left">
        <p>
          We worked with a cybersecurity company that protects businesses from digital threats. The company needed more qualified leads to grow its security services. They wanted a steady stream of decision-makers seeking reliable cybersecurity support.
        </p>
        <p>The team studied their market and identified the audience segments that showed clear intent. We created targeted ads that aligned with each group's goals. Each message highlighted urgent risks, strong protection, and fast support. Ads connected users to landing pages that guided them toward action.
        </p>
        <p>Our strategy delivered steady monthly lead growth, reaching more than 900 qualified leads every month within the first five months. The campaigns helped this company strengthen visibility, attract ready-to-buy clients, and scale their security services faster than expected.
        </p>
        <button className="lastbottom-btn" onClick={() => {
          router.push("/case-study");
        }}
        >
          See How We Did It <FaArrowRight />
        </button>
      </div>

      <div className="lastbottom-right">
        <div className="lastbottom-image">
         
        </div>
      </div>
     </div>
    </section>
  );
}
