import BlogDetail from "@/Components/BlogDetail/BlogDetail";
import Schema from "@/Components/Schema/Schema";
import { baseUrl } from "@/config/Config";
import { fetchBlogBySlug } from "@/DAL/Fetch";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const res = await fetchBlogBySlug(slug);
  const blog = res?.blog;
  //  No metadata for deleted blogs
  if (!blog) {
    return {};
  }
  const title = blog?.title || slug.replace(/-/g, " ");
  const description =
    blog?.metaDescription ||
    `Details about ${slug.replace(/-/g, " ")} on Zemalt.`;
  const image = baseUrl + blog?.thumbnail;
  const url = `https://zemalt.com/${slug}`;
  return {
    title: `${title} `,
    description: description,
    icons: { icon: "/favicon.png" },

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

const page = async ({ params }) => {
  const slug = (await params).slug;
  const res = await fetchBlogBySlug(slug);
  const blog = res?.blog;

  //  UI fallback for deleted blogs
  if (!blog) {
    notFound();
  }

  ///////////////////// schema data ///////////////
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://zemalt.com/blog/${slug}#blogposting`,
    headline: blog.title,
    description: blog.metaDescription || blog.excerpt,
    image: blog.thumbnail ? baseUrl + blog.thumbnail : undefined,
    url: `https://zemalt.com/blog/${slug}`,
    datePublished: blog.publishedDate,
    dateModified: blog.updatedAt || blog.createdAt,
    author: {
      "@type": "Organization",
      name: "Zemalt",
      url: "https://zemalt.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Zemalt",
      logo: {
        "@type": "ImageObject",
        url: "https://zemalt.com/favicon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://zemalt.com/blog/${slug}`,
    },
  };
  ////////////////////////////////////////////////
  return (
    <>
      <Schema id="blog-posting-schema" schema={blogPostingSchema} />

      <div>
        <BlogDetail slug={slug} />
      </div>
    </>
  );
};

export default page;
