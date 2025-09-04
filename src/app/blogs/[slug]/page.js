import React from "react";
import styles from "./page.module.css";
import Breadcrumb from "@/Components/Breadcrumb";
import BlogDetail from "@/Components/BlogDetail";
import { baseUrl } from "@/Config/Config";
import { fetchBlogBySlug } from "@/DAL/fetch";

export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const res = await fetchBlogBySlug(slug);
  const blog = res?.blog;

  const title = blog?.title || slug.replace(/-/g, " ");
  const description =
    blog?.metaDescription ||
    `Details about ${slug.replace(/-/g, " ")} on plutosec.`;
  const image = baseUrl + blog?.thumbnail;
  const url = `https://plutosec.ca/blog/${slug}`;
  return {
    title: `${title} `,
    description: description,
    icons: { icon: "/plutofav.png" },

    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function Page({ params }) {
  const slug = (await params).slug;
  return (
    <div className={styles.Servicearea}>
      <div className={styles.bgSection}>
        <div className={styles.bgSection1}>
          <Breadcrumb />
        </div>
      </div>

      <h1 className={styles.htext}></h1>
      <p className={styles.ptext}></p>

      <BlogDetail slug={slug} />
    </div>
  );
}
