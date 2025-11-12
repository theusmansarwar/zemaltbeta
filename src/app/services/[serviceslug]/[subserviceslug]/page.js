import ProjectPage from "@/Components/SERVICEPAGE/ProjectPage";
import { fetchSubServiceBySlug } from "@/DAL/Fetch";
import { toast } from "react-toastify";

/** ---------------------------------------------------------------
 * Fetch Subservice by slug
 * --------------------------------------------------------------- */
async function getSubService(slug) {
  try {
    const res = await fetchSubServiceBySlug(slug);

    if (res?.service) return res.service;

    return null;
  } catch (error) {
    toast.error("Error fetching subservice:", error);
    return null;
  }
}

/** ---------------------------------------------------------------
 * Dynamic <title> and <meta description>
 * --------------------------------------------------------------- */
export async function generateMetadata({ params }) {
  const slug = params.subserviceslug;

  const subService = await getSubService(slug);

  if (!subService) {
    return {
      title: "Service Not Found",
      description: "This service is currently unavailable.",
      icons: { icon: "/favicon.png" },
    };
  }

  return {
    title: subService.metatitle,
    description: subService.metaDescription,
    icons: { icon: "/favicon.png" },
  };
}

/** ---------------------------------------------------------------
 * Page Component
 * --------------------------------------------------------------- */
const Page = async ({ params }) => {
  const subService = await getSubService(params.subserviceslug);

  if (!subService) {
    return (
      <div style={{ padding: "20px 0" }}>
        <h2>Service not found</h2>
      </div>
    );
  }

  const featuredData = {
    title: subService.title || "Subservice",
    spanTitle: "SERVICES",
    description: subService.description || "",
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
};

export default Page;
