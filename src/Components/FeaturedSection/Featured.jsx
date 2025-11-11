"use client";
import React from "react";
import "./Featured.css";
import { FaArrowRight, FaArrowTrendUp } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const brands = ["/plutosec.png", "/digitalaura.png", "/carteroil.png", "/smartenergy.png"]
const Featured = () => {

  const router = useRouter();
  return (
    <div className="Featured" id="zemalt">
      <div className="left">
        <h1>
          Zemalt- <br /> Smart Moves, Big Wins
        </h1>
        <p className="desc">
          You will find a top-rated SEO agency. It has expert teams in digital marketing, design, and web development. Each service aligns clearly with your goals
        </p>
        <p className="desc">
          Zemalt moves your brand forward through smart execution and measurable growth. Every strategy works with precision to deliver impact, drive performance, and build lasting digital authority.
        </p>
        <div className="buttons-area">
          <button
            onClick={() => {
              router.push("/contact");
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
            {brands.map((brand, index) => (
              <div key={index} className="trusted-circle" style={{
                backgroundImage: `url(${brand})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}></div>
            ))}
            <span>+</span>
          </div>{" "}
        </div>
      </div>
      <div className="right">
        <div className="top">
          <div className="left">
            <div className="up-icon">
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
