import ProjectPage from "@/Components/SERVICEPAGE/ProjectPage";

export default function Page() {

  
  const featuredData = {
    title: "DESIGNING",
    spanTitle: "SERVICES",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. ",
  };

  return <ProjectPage featuredData={featuredData} />;
}
