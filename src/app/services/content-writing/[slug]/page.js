import ProjectPage from "@/Components/SERVICEPAGE/ProjectPage";

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ await params here

  const formattedTitle = slug
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${formattedTitle} | Services`,
    description: `Learn more about our ${formattedTitle} services tailored to your business needs.`,
  };
}

export default async function Page({ params }) {
  const { slug } = await params; // ✅ await params here too

  const formattedTitle = slug
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const featuredData = {
    title: formattedTitle?.toUpperCase(),
    spanTitle: "SERVICES",
    description:
      "This is a placeholder description. You can replace it with service-specific details.",
  };

  return <ProjectPage featuredData={featuredData} />;
}
