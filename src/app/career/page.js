import Benefits from "@/Components/Benefits/Benefits";
import CareerOpenings from "@/Components/CareerOpenings/CareerOpenings";
import Carousal2 from "@/Components/Carousal/Carousal2";  
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";
import React from "react";

export const metadata = {
  title: "Careers | Zemalt",
  description:
    "Get smart SEO and marketing solutions with Zemalt that increase search traffic, improve brand reach, and turn visitors into loyal customers.",
};
const page = () => {
  const featuredData = {
    title: "JOIN",
    spanTitle: "US",
    description:
      "You feel at home when you join our team. Respect, growth, and balance guide our culture. Every person matters. Every idea has value. You step into a workplace that supports your goals and welcomes you.",
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
