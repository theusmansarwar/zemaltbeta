"use client";
import React from "react";
import "./FourthSection.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const FourthSection = () => {
  const router = useRouter();
  return (
    <div className="fourth-section">
      <div className="left">
        <h2>Why Choose Zemalt For Your Digital Marketing Journey </h2>
        <ul>
          <li>
            SEO helps your site{" "}
            <a href="https://zemalt.com/services/seo">
              appear higher in search
            </a>
            . We use proven methods that fit what people search for. You get
            steady traffic, more clicks, and stronger reach online. Each
            campaign matches your brand goals.
          </li>
          <li>
            Google Ads bring fast leads. We plan smart ads that reach the right
            people. You spend wisely and gain real results. Ads get tracked,
            tested, and improved to bring you better value each time.
          </li>
          <li>
            Content writing helps you build trust. Words guide your readers and
            highlight your services. Clear text keeps them engaged. You receive
            blogs, web pages, and guides that match your audience. It provides
            an easy way to grow trust and increase sales.
          </li>
          <li>
            Social media marketing expands your reach. It shares your message
            with more people. You build trust and stronger connections with your
            audience. Each platform shares posts that match your brand tone. It
            is a clear way to connect and stay visible. You get steady growth in
            reach and trust.
          </li>
          <li>
            Web development{" "}
            <a href="https://zemalt.com/services/web-development">
              gives your business a strong base
            </a>
            .Sites load fast, look modern, and work on all devices. You get
            design that feels clear, smooth, and safe. It fits your vision and
            goals.
          </li>
          <li>
            UI/UX design makes people stay. Clean layouts guide users without
            effort. You get screens that feel fast, clear, and enjoyable. The
            design builds trust and helps your brand stand out.
          </li>
        </ul>
        <div className="buttons-area">
          <button
            onClick={() => {
              router.push("/contact");
            }}
          >
            Schedules a call <FaArrowRightLong />
          </button>
          <p
            onClick={() => {
              router.push("/products");
            }}
          >
            View Sample Work
          </p>
        </div>
      </div>
      <div className="right">
        <img src="/why-choose-zemalt.webp" alt="" />
      </div>
    </div>
  );
};

export default FourthSection;
