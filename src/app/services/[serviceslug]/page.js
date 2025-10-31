import ServicePage from "@/Components/SERVICEPAGE/ServicePage";
import { fetchServiceBySlug } from "@/DAL/Fetch";

/** ---------------------------------------------------------------
 * Fetch Service by slug
 * --------------------------------------------------------------- */
async function getService(slug) {
  try {
    const res = await fetchServiceBySlug(slug);
    if (res?.service) return res.service;

    return null;
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
}

/** ---------------------------------------------------------------
 * Dynamic <title> and <meta description>
 * --------------------------------------------------------------- */
export async function generateMetadata({ params }) {
  const slug = params.serviceslug;

  const service = await getService(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "This service is currently unavailable.",
      icons: { icon: "/favicon.svg" },
    };
  }

  return {
    title: service.metatitle,
    description:
      service.metaDescription ,
    icons: { icon: "/favicon.svg" },
  };
}

/** ---------------------------------------------------------------
 * Page Component
 * --------------------------------------------------------------- */
const Page = async ({ params }) => {
  const service = await getService(params.serviceslug);

  if (!service) {
    return (
      <div style={{ padding: "20px 0" }}>
        <h2>Service not found</h2>
      </div>
    );
  }

  const featuredData = {
    title: service.title || "Service",
    spanTitle: "SERVICES",
    description: service.description || service.short_description || "",
  };

  const cardData =
    service.subServices?.items?.length > 0 ? service.subServices.items : [];

  const imageData = {
    heading:
      service.imageSection?.title ||
      "Bright minds shape clear paths and act fast.",
    image: service.imageSection?.image || "/zemalt-logo.png",
  };

  const whyService = {
    title: service.lastSection?.title || "Why Choose Zemalt",
    description: service.lastSection?.description
      ? [service.lastSection.description]
      : [],
    image: service.lastSection?.image || "/why-designing.png",
  };

  const faqsData = service.faqs;

  const calculaterBottomData = {
    heading:
      service.CalulaterBottom?.heading ||
      "Why Choose Zemalt as Your Google Ads Partner?",
    description:
      service.CalulaterBottom?.description ||
      "We are a trusted ad agency that drives fast growth and real reach. You get clear campaigns built on sharp strategy and smart targeting. Each plan cuts waste, raises clicks, and delivers steady leads that add lasting value to your business.",
  };

  return (
    <ServicePage
      featuredData={featuredData}
      cardData={cardData}
      imageData={imageData}
      Faqs={faqsData}
      CalulaterBottom={calculaterBottomData}
      whyService={whyService}
    />
  );
};

export default Page;
