import ServicePage from "@/Components/SERVICEPAGE/ServicePage";
export const metadata = {
  title: "Creative Services | Zemalt",
  description:
    "Elevate your brand with Zemalt’s creative expertise. Smart design in logos, ads, and UI/UX ensures trust, style, and powerful business growth.",
};

export default function Service() {
  const faqs = {
    title: "FAQs about Web Design Services",
    description:
      "We are an experienced digital marketing team. We focus on clarity and quick results. We provide resources and simple guidance that help you gain knowledge and support.",
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
        question: "How long does Zemalt digital marketing take?",
        answer:
          "Digital marketing shows results in weeks or months. SEO takes time but lasts longer. Social media builds trust. Email keeps users connected. All efforts work together. You need consistency to see returns.",
      },
      {
        question: "How do you measure Zemalt's digital marketing performance?",
        answer:
          "We measure success through numbers. Traffic shows reach. Leads show demand. Conversions show growth. Clicks and shares track interest. ROI shows profit. Reports highlight progress.",
      },
    ],
  };

  const featuredData = {
    title: "CREATIVE",
    spanTitle: "SERVICES",
    description:
      "Elevate your brand with Zemalt’s creative solutions. You get designs that reflect your identity and drive growth. You build trust through clean visuals and smart details. Each project delivers focused results and lasting impact. Enhance brand recognition, engage your audience, and leave a strong impression. You create work that stands out and supports your goals. Explore Zemalt’s creative services today and make your brand unforgettable.",
  };
  const cardData = [
    {
      title: "UI/UX Design",
      slug: "ui-ux-design",
      
      items: [
        "Web Design",
        "Website Redesign",
        "Mobile App Design",
        "Landing Page Design",
        "Sample Pages and Layouts",
        "UX Planning",
      ],
    },
    {
      title: "Infographic Design",
      slug: "infographic-design",
      
      items: [
        "Book Cover Designs",
        "Custom Infographics",
        "Data Visualization",
        "Marketing Illustrations",
        "Presentation Graphics",
        "Visual Storytelling",
      ],
    },
    {
      title: "Advertising & Marketing Graphics",
      slug: "advertising-marketing-graphics",
      
      items: [
        "Ad Banner Designs",
        "Poster Banner Designs",
        "YouTube Thumbnails Designing",
        "Social Media Ads",
        "Display Banner Ads",
        "Online Campaign Graphics",
        "Retargeting Ads Visuals",
      ],
    },
    {
      title: "Packaging Designs",
      slug: "packaging-designs",
      
      items: [
        "Product Picture Designing",
        "Product Box Art",
        "Bottle and Jar Tags",
        "Food & Beauty Packaging",
        "Tech Pack Designs",
        "3D Packaging Mockups",
      ],
    },
    {
      title: "Catalogue, Stationery & Gifts Design",
      slug: "catalogue-stationery-gifts-design",
      
      items: [
        "Office Stationery Design",
        "Catalogues and Brochures",
        "Corporate Gifts Design",
        "Event Stationery",
        "Flyers and Leaflets",
        "Brand Material Design",
      ],
    },
    {
      title: "Creative Assets & Custom Art",
      slug: "creative-assets-custom-art",
      
      items: [
        "Get Innovative Designs",
        "Custom Art Pieces",
        "Digital Icons and Graphics",
        "Brand Graphic Assets",
        "Creative Templates",
        "Campaign Concept Designs",
        "Unique Visual Assets",
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
  const calculaterBottomData = {
    heading: "Why Choose Zemalt for Expert Digital Marketing Solutions?",
    description:
      "We are a full-service digital marketing and web design agency. Our goal is to help you rank higher in search results and bring more traffic to your site. From design to SEO, we cover it all so your business can succeed online.",
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
