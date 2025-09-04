export const dynamic = "force-dynamic";
import styles from "./page.module.css";
import React from "react";
import BlogCards from "@/Components/BlogCards/BlogCards";
import LatestBlogs from "@/Components/LatestBlogs/LatestBlogs";
import GrowingTipsBlogs from "@/Components/GrowingTipsBlogs/GrowingTipsBlogs";
import TrendingBlogs from "@/Components/TrendingBlogs/TrendingBlogs";
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";
export const metadata = {
  title: "Blogs | Zemalt ",
  description:
    "Zemalt delivers expert marketing with clear plans, proven methods, and strong skills that build trust, boost reach, and drive more leads.",
};
const featuredData = {
  title: "BLOGS",
  spanTitle: "",
  description:
    "We bring you services that help you grow fast and stand out from the competition. Every service is built to give you real results, not just promises. You get trusted solutions that improve performance, increase visibility, and build long-term success. We do more than just offer help. We give you strategies that save time and boost efficiency. Our services guide you at every step so you can reach your goals with confidence. When you choose us, you invest in quality and value that keeps paying back.",
};
const page = () => {
  return (
    <div className={styles.Home}>
      <ServicePageFeatured data={featuredData} />
      <BlogCards />
      <LatestBlogs />
      <GrowingTipsBlogs />
      <TrendingBlogs />
    </div>
  );
};

export default page;
