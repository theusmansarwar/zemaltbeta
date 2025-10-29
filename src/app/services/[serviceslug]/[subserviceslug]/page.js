import ProjectPage from "@/Components/SERVICEPAGE/ProjectPage";
import { fetchSubServiceBySlug } from "@/DAL/Fetch";

export async function generateMetadata({ params }) {
  const { subserviceslug } = params;

  const formattedTitle = subserviceslug
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${formattedTitle} | Zemalt`,
    description: `Learn more about our ${formattedTitle} services tailored to your business needs.`,
  };
}

export default async function Page({ params }) {
  const { subserviceslug } = params;

  const res = await fetchSubServiceBySlug(subserviceslug);
  const subService = res?.service || {};

  const featuredData = {
    title: subService.title || "Subservice",
    spanTitle: "SERVICES",
    description: subService.short_description || "",
  };

  return (
    <ProjectPage
      featuredData={featuredData}
      introduction={subService.introduction || {}}
      whySection={subService.whySection || {}}
      provenSteps={subService.provenSteps || {}}
      imageData={subService.imageSection}
      faqs={subService.faqs || {}}
      portfolio={subService.portfolio || {}}
      cta={subService.cta || {}}
    />
  );
}
