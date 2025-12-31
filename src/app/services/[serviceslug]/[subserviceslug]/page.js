import Schema from "@/Components/Schema/Schema";
import ProjectPage from "@/Components/SERVICEPAGE/ProjectPage";
import { fetchSubServiceBySlug } from "@/DAL/Fetch";

/** ---------------------------------------------------------------
 * Fetch Subservice by slug
 * --------------------------------------------------------------- */
async function getSubService(slug) {
  try {
    const res = await fetchSubServiceBySlug(slug);

    if (res?.service) return res.service;

    return null;
  } catch (error) {
    console.error("Error fetching subservice:", error);
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

  /////////////////// schema data ////////////////////
  const subServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://zemalt.com/services/${params.serviceslug}/${params.subserviceslug}#service`,
  name: subService.title,
  description: subService.metaDescription || subService.description,
  url: `https://zemalt.com/services/${params.serviceslug}/${params.subserviceslug}`,
  provider: {
    "@type": "Organization",
    name: "Zemalt",
    url: "https://zemalt.com",
  },
  isPartOf: {
    "@type": "Service",
    name: params.serviceslug.replace(/-/g, " "),
    url: `https://zemalt.com/services/${params.serviceslug}`,
  },
  serviceType: subService.title,
  areaServed: {
  "@type": "AdministrativeArea",
  "name": "Global"
},
};

  const faqSchema =
    subService.faqs?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: subService.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  ////////////////////////////////////////////////////
  return (
    <>
      <Schema id="subservice-main" data={subServiceSchema} />
      {faqSchema && <Schema id="subservice-faq" data={faqSchema} />}

      <ProjectPage
        featuredData={featuredData}
        introduction={subService.introduction || {}}
        whySection={subService.whySection || {}}
        provenSteps={subService.provenSteps || {}}
        imageData={subService.imageSection}
        faqs={subService.faqs || {}}
        cta={subService.cta || {}}
      />
    </>
  );
};

export default Page;
