import styles from "./page.module.css";
import React, { Suspense } from "react";
import BlogCards from "@/Components/BlogCards/BlogCards";
import TrendingBlogs from "@/Components/TrendingBlogs/TrendingBlogs";
import FeaturedBlogs from "@/Components/FeaturedBlogs/FeaturedBlogs";
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";
import Schema from "@/Components/Schema/Schema";

export const metadata = {
  title: "Zemalt Blog | Insights on SEO, Marketing & Web Development",
  description:
    "Explore the Zemalt Blog for expert tips on SEO, paid ads, web design, and digital marketing. Stay updated with strategies to grow your business online.",
};
const featuredData = {
  title: "BLOGS",
  spanTitle: "",
  description:
    "The Zemalt blog shares insights on digital marketing, SEO strategies, branding, and product design. You find expert tips that help your business grow and stand out online. Each article explains trends in search engine optimization, content marketing, and social media growth. You also learn about creative design practices that improve user experience. Stay updated with strategies that boost visibility, drive traffic, and build long-term success.",
};

/////////////// schema data /////////////
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://zemalt.com/blog#blog",
  name: "Zemalt Blog",
  description:
    "Expert insights on SEO, digital marketing, web development, branding, and growth strategies.",
  url: "https://zemalt.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Zemalt",
    url: "https://zemalt.com",
    logo: {
      "@type": "ImageObject",
      url: "https://zemalt.com/favicon.png",
    },
  },
};
const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Zemalt Blog Articles",
  url: "https://zemalt.com/blog",
  itemListOrder: "https://schema.org/ItemListOrderDescending",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      url: "https://zemalt.com/blog",
    },
  ],
};
////////////////////////////////////////
const page = () => {
  return (
    <>
      <Schema id="blog-schema" schema={blogSchema} />
      <Schema id="blog-list-schema" schema={blogListSchema} />

      <div className={styles.Home}>
        <ServicePageFeatured data={featuredData} />
        <Suspense fallback={null}>
          <BlogCards />
        </Suspense>
        <TrendingBlogs />
        <FeaturedBlogs />
      </div>
    </>
  );
};

export default page;
