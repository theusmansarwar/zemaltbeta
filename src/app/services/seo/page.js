import ServicePage from "@/Components/SERVICEPAGE/ServicePage";
export const metadata = {
  title: "Search Engine Optimization | Zemalt",
  description:
    "Discover Zemalt's creative services including branding, advertising design, packaging, UI/UX, and more. We deliver clear designs that strengthen your brand identity.",
};

export default function Service() {
  const faqs = {
    title: "FAQs about Seo Services",
    description:
      "Zemalt answers common questions about SEO services. You learn why SEO matters and how it helps your business grow. Each answer gives you clear guidance backed by proven strategies. The goal is to help you understand SEO and use it as a tool for real success.",
    questions: [
      {
        question: "How can we improve your website rankings?",
        answer:
          "Zemalt boosts your website step by step. We optimize pages, fix technical issues, and target the right keywords. Our team builds authority through quality backlinks. You get stronger search visibility and more traffic from people looking for your services.",
      },
      {
        question: "What makes Zemalt different from other SEO agencies?",
        answer:
          "Zemalt focuses on results that matter. Many agencies chase numbers, but we chase growth. You get strategies designed to bring customers, not just visitors. Our reporting stays clear, so you always know what we do for your business.",
      },
      {
        question: "Will SEO from Zemalt bring me more customers?",
        answer:
          "Yes. Our SEO campaigns target buyers, not random clicks. We choose keywords that attract people ready to act. Your content earns trust, and your website converts visitors into clients. You gain growth that lasts.",
      },
      {
        question: "How long does it take to see results from SEO?",
        answer:
          "You start noticing progress in the first few weeks. Major results build within three to six months. Our approach focuses on steady improvement. You see updates and clear reports as your rankings climb.",
      },
      {
        question: "Does Zemalt provide local SEO for businesses?",
        answer:
          "Yes. Zemalt helps you dominate local searches. We optimize your Google Business Profile and strengthen local citations. Your business shows up when nearby customers search. You stand ahead of local competitors and gain more direct calls and visits.",
      },
    ],
  };

  const featuredData = {
    title: "SEO",
    spanTitle: "SERVICES",
    description:
      "We bring you services that help you grow fast and stand out from the competition. Every service is built to give you real results, not just promises. You get trusted solutions that improve performance, increase visibility, and build long-term success. We do more than just offer help. We give you strategies that save time and boost efficiency. Our services guide you at every step so you can reach your goals with confidence. When you choose us, you invest in quality and value that keeps paying back.",
  };
  const cardData = [
    {
      title: "On/Off-Page SEO",
      slug: "on-off-page-seo",

      items: [
        "Keyword research",
        "Meta tags and titles",
        "Page speed and structure",
        "Internal links and site map",
        "Guest posts and backlinks",
        "Profile listings and outreach",
        "Forum mentions and blog links",
      ],
    },
    {
      title: "Technical SEO",
      slug: "technical-seo",

      items: [
        "Site audit and fixes",
        "Crawl errors and broken links",
        "Mobile and SSL checks",
        "Core web vitals repair",
      ],
    },
    {
      title: "Local SEO",
      slug: "local-seo",

      items: [
        "Google map setup",
        "Local keywords and city pages",
        "NAP check and clean",
        "Local directory links",
      ],
    },

    {
      title: "E-commerce SEO",
      slug: "ecommerce-seo",

      items: [
        "Product page rank",
        "Category page setup",
        "Schema tags and reviews",
        "Store SEO check",
      ],
    },
    {
      title: "Brand Building & Digital Marketing",
      slug: "digital-marketing",

      items: [
        "Authority growth",
        "Content and backlink strategy",
        "Visibility improvements",
        "Reputation management",
        "Social media integration",
        "Paid campaign support",
        "Content marketing strategies",
        "Traffic growth planning",
      ],
    },
    {
      title: "SEO Audit",
      slug: "seo-audit",

      items: [
        "Full website analysis",
        "Identify gaps and issues",
        "Prioritize fixes and updates",
        "Report with actionable steps",
      ],
    },
  ];

  const imageData = {
    heading:
      "Bright minds shape clear paths and act fast. Fresh ideas spark growth. True freedom drives success.",
    image: "/bigidea.png",
  };
  const whyService = {
    title: "Boost Your Brand with Expert SEO",
    description: [
      "We are a leading SEO team trusted by businesses worldwide. You gain tested methods that push your site higher in search results quickly. Our experts create clear steps that guide steady growth and increase visibility across key markets.",
      "We act as partners in achieving your goals. You get structured plans that expand reach, attract consistent traffic, and build authority. Each action focuses on strong results and measurable progress. Our work ensures gains continue over time and strengthen your brand.",
      "We provide tools that protect rank and monitor performance closely. Strategies use direct actions to improve content, technical structure, and backlinks. Clients rely on us to maintain lasting rank, generate more leads, and increase brand reach. Every step adds measurable value, higher traffic, and long-term growth.",
    ],
    image: "/why-designing.png",
  };
  const calculaterBottomData = {
    heading:
      "Why Choose Zemalt as Your Trusted SEO Partner for Rankings and Online Success?",
    description:
      "We are a trusted SEO agency that drives fast and steady growth for brands. You get complete SEO plans that improve your site’s ranking, attract consistent traffic, and generate real value for your business. Each step focuses on visibility, authority, and long-term results that last.  ",
  };
  return (
    <ServicePage
      featuredData={featuredData}
      cardData={cardData}
      imageData={imageData}
      Faqs={faqs}
      CalulaterBottom={calculaterBottomData}
      whyService={whyService}
    />
  );
}
