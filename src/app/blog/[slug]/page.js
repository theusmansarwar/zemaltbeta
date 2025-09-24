
import BlogDetail from "@/Components/BlogDetail/BlogDetail";
import { baseUrl } from "@/config/Config";
import { fetchBlogBySlug } from "@/DAL/Fetch";

export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const res = await fetchBlogBySlug(slug);
  const blog = res?.blog;

  const title = blog?.title || slug.replace(/-/g, " ");
  const description =
    blog?.metaDescription ||
    `Details about ${slug.replace(/-/g, " ")} on Digital Aura.`;
  const image = baseUrl + blog?.thumbnail;
  const url = `https://zemalt.com/${slug}`;
  return {
    title: `${title} `,
    description: description,
    icons: { icon: "/favicon.svg" },

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

  return (
    <div>
      <BlogDetail slug={slug}/>
    </div>
  );
};

export default page;
