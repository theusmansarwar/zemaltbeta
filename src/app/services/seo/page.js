
import ServicePage from "@/Components/SERVICEPAGE/ServicePage";
export const metadata = {
  title: "Search Engine Optimization | Zemalt",
  description:
    "Discover Zemalt's creative services including branding, advertising design, packaging, UI/UX, and more. We deliver clear designs that strengthen your brand identity.",
};

export default function Service() {
  const faqs = {
    title: "FAQs on seo services",
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
    title: "SEO Audit",
    slug: "seo-audit",
    items: [
      "Logo Design",
      "Brand color set and font choice",
      "Style guide manual",
      "Office cards, letter papers and envelopes",
    ],
  },
  {
    title: "Local SEO",
    slug: "local-seo",
    items: [
      "Social posts, banners, online ads",
      "Leaflets and posters",
      "Brochures and catalogs",
      "Outdoor ads and boards",
    ],
  },
  {
    title: "Packaging & Label Design",
    slug: "packaging-label-design",
    items: [
      "Product box art",
      "Bottle and jar tags",
      "Food, beauty tech pack art",
      "3D box sample",
    ],
  },
  {
    title: "Print Media Design",
    slug: "print-media-design",
    items: [
      "Books and magazine covers",
      "Newsprint and flyer pages",
      "Reports and company brochures",
    ],
  },
  {
    title: "UI/UX Designing",
    slug: "ui-ux-designing",
    items: [
      "Website UI plan",
      "Mobile app page plan",
      "Sample pages and layouts",
    ],
  },
  {
    title: "Illustration & Creative Assets",
    slug: "illustration-creative-assets",
    items: [
      "Custom art pieces",
      "Brand graphic assets",
      "Digital art and icons",
    ],
  },
];

  const imageData = {
    heading:
      "Bright minds shape clear paths and act fast. Fresh ideas spark growth. True freedom drives success.",
    image: "/bigidea.png",
  };
  const whyService = {
    title: "Why Good Design Shapes Every Brand",
    description: [
      "Zemalt is a leading digital agency trusted by brands. You get proven methods that raise search rank fast. Our team builds strategies that push results higher.",
      "Team Zemalt acts as a partners for your business goals. You gain access to tailored plans that secure a stronger reach. Our focus stays on driving measurable success. We deliver solutions that keep your audience connected.",
      "Give you tools that make progress steady. Our approach targets practical outcomes that strengthen presence. Clients rely on us to achieve consistent gains. Results bring better awareness that leads to sustainable growth.",
    ],
    image: "/why-designing.png",
  };
  return (
    <ServicePage
      featuredData={featuredData}
      cardData={cardData}
      imageData={imageData}
      Faqs={faqs}
      whyService={whyService}
    />
  );
}
