import ProjectPage from "@/Components/SERVICEPAGE/ProjectPage";

export default function Page() {
  const featuredData = {
    title: "WEB DESIGN",
    spanTitle: "PORTFOLIO",
    description:
      "Explore our latest web design projects showcasing creativity, functionality, and modern aesthetics. Each project demonstrates careful planning, innovative solutions, and attention to detail. Discover how our team brings concepts to life, combining style and performance to deliver engaging digital experiences that impress and convert visitors",
  };

  return <ProjectPage featuredData={featuredData} />;
}
