
import ServicePage from "@/Components/SERVICEPAGE/ServicePage";
export default function Service() {
  const faqs = {
    title: "FAQs on web design services",
    description:
      "Zemalt are an experienced digital marketing team. We focus on clarity and quick results. We provide the resources and simple guidance that help you to gain knowledge and support.",
    questions: [
      {
        question: "What is the point of digital marketing for my business?",
        answer:
          "Digital marketing helps your brand reach more people. It drives traffic, generates leads, and builds your image. Every step is guided by data to make campaigns stronger.",
      },
      {
        question: "How can digital marketing raise my website’s visibility?",
        answer:
          "Digital marketing pushes your site higher in search results. SEO moves your pages to the top. Paid ads bring quick visitors. Social platforms send new users. Strong content keeps people engaged. You build authority and appear more often.",
      },
      {
        question: "How long does digital marketing take?",
        answer:
          "Digital marketing shows results in weeks or months. SEO takes time but lasts longer. Social media builds trust. Email keeps users connected. All efforts work together. You need consistency to see returns.",
      },
      {
        question: "How do you measure digital marketing performance?",
        answer:
          "Zemalt measure success through numbers. Traffic shows reach. Leads show demand. Conversions show growth. ROI shows profit. Reports highlight progress.",
      },
    ],
  };
  const featuredData = {
    title: "CREATIVE",
    spanTitle: "SERVICES",
    description:
      "You need a clear design that grows your brand. Zemalt creates sharp ideas that keep your style strong. You gain trust through smart detail and clean art. Each project shows focus and clear results.",
  };
  const cardData = [
    {
      title: "Branding & Identity Design",
      items: [
        "Logo Design",
        "Brand color set and font choice",
        "Style guide manual",
        "Office cards, letter papers and envelopes",
      ],
    },
    {
      title: "Marketing & Advertising Design",
      items: [
        "Social posts, banners, online ads",
        "Leaflets and posters",
        "Brochures and catalogs",
        "Outdoor ads and boards",
      ],
    },
    {
      title: "Packaging & Label Design",
      items: [
        "Product box art",
        "Bottle and jar tags",
        "Food, beauty tech pack art",
        "3D box sample",
      ],
    },
    {
      title: "Print Media Design",
      items: [
        "Books and magazine covers",
        "Newsprint and flyer pages",
        "Reports and company brochures",
      ],
    },
    {
      title: "UI/UX Designing",
      items: [
        "Website UI plan",
        "Mobile app page plan",
        "Sample pages and layouts",
      ],
    },
    {
      title: "Illustration & Creative Assets",
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
