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
      icons: { icon: "/favicon.png" },
    };
  }

  return {
    title: service.metatitle,
    description: service.metaDescription,
    icons: { icon: "/favicon.png" },
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
    description: service.description || "",
    published: service.published, // optional if needed
  };

  const cardData = {
    published: service.subServices?.published ?? false,
    items:
      service.subServices?.items?.length > 0 ? service.subServices.items : [],
  };

  const imageData = {
    heading:
      service.imageSection?.title ||
      "Bright minds shape clear paths and act fast.",
    image: service.imageSection?.image || "/zemalt-logo.webp",
    published: service.imageSection?.published ?? false,
  };
  const firstSectionData = {
    heading: service.firstSection?.title,
    description: service.firstSection?.description,
    image: service.firstSection?.image || "/zemalt-logo.webp",
    published: service.firstSection?.published ?? false,
  };



  const secondData = {
    heading: service.secondSection?.title,
    steps: service.secondSection || [],
    published:
      service.secondSectionPublished ??
      service.secondSection?.published ??
      false,
  };
  const whyThisData = {
    heading: service.whySteps?.title,
    description: service.whySteps?.description,
    image: service.whySteps?.image,
    items: service.whySteps?.items || [],
    published: service.whySteps?.published ?? false,
  };


  const faqsData = {
    faqs: service.faqs || [],
    published: service.faqsPublished ?? service.faqs?.published ?? false,
  };

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
      firstSectionData={firstSectionData}
      secondData={secondData}
      cardData={cardData}
      imageData={imageData}
      Faqs={faqsData}
      CalulaterBottom={calculaterBottomData}
      whyThisData={whyThisData}
    />
  );
};

export default Page;
