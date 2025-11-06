import Benefits from "@/Components/Benefits/Benefits";
import CareerOpenings from "@/Components/CareerOpenings/CareerOpenings";
import Carousal2 from "@/Components/Carousal/Carousal2";  
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";
import React from "react";

export const metadata = {
  title: "Careers",
  description:
    "Build your career with Zemalt. Explore exciting opportunities in digital marketing, SEO, design, and web development. Join us and grow with our expert team.",
};
const page = () => {
  const featuredData = {
    title: "JOIN",
    spanTitle: "US",
    description:
      "You feel at home when you join our team. Respect, growth, and balance guide our culture. Every person matters. Every idea has value. You step into a workplace that supports your goals and welcomes you. Our team offers real benefits that help your career and personal life. You have opportunities to develop skills, achieve stability, and build a strong future.We believe in growth through learning and sharing. Each day presents new opportunities to improve, connect, and advance. You gain knowledge, exchange ideas, and strengthen your role.",
  };
  return (
    <div className="PageBg">
      <ServicePageFeatured data={featuredData} />
      <Benefits />
      <CareerOpenings />
      <Carousal2 heading="Ready to work with us" link="/"/>
    </div>
  );
};

export default page;
