export const dynamic = "force-dynamic";
import styles from "./page.module.css";
import React from "react";
import BlogCards from "@/Components/BlogCards/BlogCards";
import TrendingBlogs from "@/Components/TrendingBlogs/TrendingBlogs";
import FeaturedBlogs from "@/Components/FeaturedBlogs/FeaturedBlogs";
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";


export const metadata = {
  title: "Zemalt Blog | Insights on SEO, Marketing & Web Development",
  description:
    "Explore the Zemalt Blog for expert tips on SEO, paid ads, web design, and digital marketing. Stay updated with strategies to grow your business online.",
};
const featuredData = {
  title: "BLOGS",
  spanTitle: "",
  description:
    "The Zemalt blog shares insights on digital marketing, SEO strategies, branding, and product design. You find expert tips that help your business grow and stand out online. Each article explains trends in search engine optimization, content marketing, and social media growth. You also learn about creative design practices that improve user experience. Stay updated with strategies that boost visibility, drive traffic, and build long-term success. .",
};
const page = () => {
  return (
    <div className={styles.Home}>
      <ServicePageFeatured data={featuredData} />
      <BlogCards />
      <TrendingBlogs />
      <FeaturedBlogs />
    </div>
  );
};

export default page;
