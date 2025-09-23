"use client";
import React from "react";
import "./Featured.css";
import { FaArrowRight, FaArrowRightLong, FaArrowTrendUp, FaPlus } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const Featured = () => {
  const router = useRouter();
  return (
    <div className="Featured">
      <div className="left">
        <h1>
          Zemalt- <br /> Where Strategy Meets Success
        </h1>
        <p className="desc">
          You will find a top-rated SEO agency. It has expert teams in digital
          marketing, design and web development. Each service aligns clearly
          with your goals.
        </p>
        <div className="buttons-area">
          <button
            onClick={() => {
              router.push("/contact-us");
            }}
          >
            Schedules a call <FaArrowRight />
          </button>
          <p
            onClick={() => {
              router.push("/case-study");
            }}
          >
            View Case Study
          </p>
        </div>
        <div className="trusted">
          <p className="trusted-p">Trusted by top global brands</p>{" "}
          <div className="personarea">
            <div className="trusted-circle"></div>
            <div className="trusted-circle"></div>
            <div className="trusted-circle"></div>
            <div className="trusted-circle"></div>
            <span>+</span>
          </div>{" "}
        </div>
      </div>
      <div className="right">
        <div className="top">
          <div className="left">
            <div className="icon">
              <FaArrowTrendUp />
            </div>
          </div>
          <div className="right">
            <p>251+</p>
            <p>
              Top companies choose to work with us. Trust grows through clear
              results.
            </p>
            <div className="progress-area">
              <div className="progress-left"></div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <p>
              <hr />
              Drive More Traffic and Sales{" "}
            </p>
            <p>Drive more traffic and product sales </p>
          </div>
          <div className="right">
            <div className="item1"></div>
            <div className="item2"></div>
            <div className="item3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
