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
      title: "SEO Services",
      slug: "seo-services",
      type: "para",
      items: [
        "Strong SEO is the foundation of online success. We create strategies that target the right keywords, build high-quality backlinks, and optimize every page for visibility. We focus on traffic that converts, not just numbers. From content planning to authority building, every step strengthens your digital presence. Our SEO services give you long-term growth and consistent results.",
      ],
    },
    {
      title: "Local SEO",
      slug: "local-seo",
      type: "para",
      items: [
        "Local searches drive customers who are ready to buy. Zemalt optimizes your Google Business Profile, maps listings, and local citations. We make sure your business appears in near me searches and stands out in your area. Strong reviews, accurate info, and local keywords increase trust. With Zemalt, your local SEO turns searches into store visits and calls.",
      ],
    },
    {
      title: "SEO Audit",
      slug: "seo-audit",
      type: "para",
      items: [
        "Your website looks fine, but small hidden issues may be stopping it from growing. Zemalt uncovers those problems with a complete SEO audit. We test speed, mobile use, broken links, and keyword performance. Our experts also scan technical SEO, on-page setup, and competitor gaps. You get a clear plan that lifts your rankings and traffic. Zemalt’s SEO audit helps you turn visitors into real customers.",
      ],
    },

    {
      title: "E-commerce SEO",
      slug: "ecommerce-seo",
      type: "para",
      items: [
        "Online stores compete in crowded markets. Zemalt improves your product listings, category pages, and site navigation to make them search engine-friendly. Better rankings mean more shoppers, higher sales, and repeat buyers. We also focus on user experience to keep customers engaged.",
      ],
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
      type: "para",
      items: [
        "We build complete digital marketing strategies using social media, paid ads, and content marketing. We connect your business with the right audience at the right time. Creative campaigns increase visibility, generate leads, and give engagement. Zemalt’s digital marketing approach blends strategy with results to grow your brand faster.",
      ],
    },
    {
      title: "SEO Reporting",
      slug: "seo-reporting",
      type: "para",
      items: [
        "Numbers tell the truth about growth. Zemalt prepares detailed SEO reports that show rankings, traffic sources, conversions, and ROI. You’ll see exactly how your campaigns are performing. Clear insights highlight strengths and reveal new opportunities",
      ],
    },
    {
      title: "Brand Building",
      slug: "brand-building",
      type: "para",
      items: [
        "Zemalt helps you shape an identity that builds trust and authority online. From content creation to reputation management, every effort makes your brand recognizable and reliable. Customers remember brands that stand out with clarity and confidence. Zemalt’s brand-building services turn your business into a trusted name.",
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
    heading: "Why Choose Zemalt for Professional Writing Services?",
    description:
      "Zemalt delivers content that speaks directly to your audience. Every project is handled with care, clarity, and creativity. From website copy to blogs, our writing team ensures that your message stands out and drives action. You get words that reflect your brand and bring real results. Get powerful content written by Zemalt experts. Make your brand voice stronger",
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
