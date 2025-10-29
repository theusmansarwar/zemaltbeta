import ServicePage from "@/Components/SERVICEPAGE/ServicePage";
import { fetchServiceBySlug } from "@/DAL/Fetch";

export async function generateMetadata({ params }) {
  const { serviceslug } = params;

  return {
    title: `${serviceslug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")} | Zemalt`,
    description: "Explore detailed information about this service.",
  };
}

export default async function Service({ params }) {
  const { serviceslug } = params;

  const response = await fetchServiceBySlug(serviceslug);
  const serviceData = response?.service || {};

  const featuredData = {
    title: serviceData.title || "Service",
    spanTitle: "SERVICES",
    description: serviceData.description || serviceData.short_description || "",
  };

  const cardData =
    serviceData.subServices?.items?.length > 0
      ? serviceData.subServices.items
      : [];

  const imageData = {
    heading:
      serviceData.imageSection?.title ||
      "Bright minds shape clear paths and act fast.",
    image: serviceData.imageSection?.image || "/zemalt-logo.png",
  };

  const whyService = {
    title: serviceData.lastSection?.title || "Why Choose Zemalt",
    description: serviceData.lastSection?.description
      ? [serviceData.lastSection.description]
      : [],
    image: serviceData.lastSection?.image || "/why-designing.png",
  };

  const faqsData = serviceData.faqs;

  const calculaterBottomData = {
    heading: "Why Choose Zemalt as Your Google Ads Partner?",
    description:
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
}
