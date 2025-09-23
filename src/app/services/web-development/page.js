import ServicePage from "@/Components/SERVICEPAGE/ServicePage";
export const metadata = {
  title: "Web development Services | Zemalt",
  description:
    "Discover Zemalt's creative services including branding, advertising design, packaging, UI/UX, and more. We deliver clear designs that strengthen your brand identity.",
};

export default function Service() {
  const faqs = {
    title: "FAQs about Web Development Services",
    description:
      "Our skilled web team creates platforms that shape growth and trust for your brand. We focus on clear design and strong code. You get sites that expand reach, engage users, and support lasting success.",
    questions: [
      {
        question: "What makes your web service different?",
        answer:
          "You get websites that combine strong design with reliable function. Each project reflects your brand and adapts to every device. Sites stay fast, secure, and easy to use. Pages are built to guide users and support clear goals. Zemalt adds proven methods that make each site ready for growth and scale.",
      },
      {
        question: "How do you help my business grow online?",
        answer:
          "Your website becomes a tool that attracts users and turns visits into sales. Pages use clear structure, simple navigation, and smart calls to action. Search-friendly text raises visibility in results. Features like forms and product pages create new leads and steady revenue. Over time, your site becomes a stable source of trust and growth.",
      },
      {
        question: "How long does a website take to build?",
        answer:
          "Small websites are ready within weeks. Larger projects, such as online stores, need several months. Each stage follows a clear timeline and delivers visible progress. You stay updated at every step and see results as the site takes shape. A careful process ensures quality, speed, and long-term stability.",
      },
      {
        question: "Do you provide help after launch?",
        answer:
          "Yes, full support continues after your site goes live. Pages stay updated, secure, and fast. Bugs get fixed without delay. Regular upgrades add new features when needed. You always get a responsive team that keeps your site in strong shape. Reliable support makes your business run without risk.",
      },
      {
        question: "How do you keep websites safe from threats?",
        answer:
          "Websites face risks from malware, spam, and attacks. Security tools, updates, and backups reduce those risks. Access controls and encryption protect sensitive data. Ongoing checks spot weak points before they grow into issues. You gain confidence that your site runs safely every day.",
      },
      {
        question: "What makes design so important for a website?",
        answer:
          "Design shapes the way users trust and engage with your brand. A clean layout guides people to the right action. Strong visuals support your message and build recall. Mobile-friendly pages improve reach and user experience. Zemalt combines design with usability so your site looks good and works well.",
      },
      {
        question: "How do you measure success after building a site?",
        answer:
          "Success is tracked through visits, time spent on pages, and leads created. Sales, sign-ups, and inquiries show direct value. Reports highlight user behavior and point out areas for improvement. Numbers help refine the site as your business grows. Clear tracking connects design choices with business results.",
      },
      {
        question: "Why should I choose Zemalt for web development?",
        answer:
          "Zemalt creates websites that focus on long-term growth. You get a mix of style, function, and strategy that supports business goals. Each project is built with care, speed, and tested tools. Clear updates keep you involved in every stage. In the end, you get a site that performs well today and adapts to tomorrow.",
      },
    ],
  };

  const featuredData = {
    title: "Web Development",
    spanTitle: "SERVICES",
    description:
      "Transform your online presence with Zemalt’s web development solutions. You get websites that look modern and perform flawlessly. You build trust through clean design and secure coding. Each page delivers clear results and long-term value. Enhance user experience, boost engagement, and drive business growth. You create a platform that supports your brand and goals. Discover Zemalt’s web development services today and enhance your digital presence.",
  };
  const cardData = [
    {
      title: "E-Commerce Development",
      slug: "ecommerce-development",
      items: [
        "Custom online store setup",
        "Product and category pages",
        "Cart and checkout process",
        "Secure payment gateways",
        "Inventory and order tracking",
        "Mobile-friendly shop design",
      ],
    },
    {
      title: "CMS Development",
      slug: "cms-development",
      items: [
        "WordPress and CMS setup",
        "Custom themes and layouts",
        "Plugin integration",
        "Content updates made easy",
        "SEO-friendly structures",
        "Scalable CMS solutions",
      ],
    },
    {
      title: "Shopify Store Development",
      slug: "shopify-store-development",
      items: [
        "Shopify store design",
        "Product listing and setup",
        "Payment and shipping setup",
        "Shopify apps integration",
        "Conversion-focused layout",
        "Store speed optimization",
      ],
    },
    {
      title: "Personal Brand Development",
      slug: "personal-brand-development",
      items: [
        "Portfolio website design",
        "Blog and content setup",
        "Personal landing pages",
        "Social media integration",
        "Contact and booking forms",
        "SEO for personal branding",
      ],
    },
    {
      title: "Customized Stores Development",
      slug: "customized-stores-development",
      items: [
        "Tailor-made e-commerce solutions",
        "Unique store layouts",
        "Custom checkout flows",
        "Third-party API integration",
        "User experience optimization",
        "Advanced store features",
      ],
    },
    {
      title: "Rebuild the Website Development",
      slug: "rebuild-website-development",
      items: [
        "Full website redesign",
        "Speed and performance boost",
        "Modern responsive layouts",
        "UX/UI improvements",
        "SEO and code cleanup",
        "Security and backup setup",
      ],
    },
  ];

  const imageData = {
    heading:
      "Bright minds shape clear paths and act fast. Fresh ideas spark growth. True freedom drives success.",
    image: "/bigidea.png",
  };
  const whyService = {
    title: "Build Your Brand with a Strong Website",
    description: [
      "We are a leading team trusted by global businesses. You gain proven steps that attract users quickly and guide them toward action. Our websites focus on clarity, usability, and steady growth that adds long-term value",
      "We act as partners in achieving your goals. You get tools that expand reach, increase sales, and strengthen brand presence. Each site is designed to deliver measurable results and maintain performance over time. Our approach ensures every project contributes to lasting growth.",
      "We provide support that keeps sites fast, safe, and reliable. Plans include clear steps, progress tracking, and updates that protect your investment. Clients rely on us to build websites that last, drive traffic, and generate real value. Every site adds visibility, authority, and measurable growth.",
    ],
    image: "/why-designing.png",
  };
  const calculaterBottomData = {
    heading: "Why Choose Us for Web Development For Your Business?",
    description:
      "We are a trusted team that builds strong websites for every business need. You get full plans that raise online reach, attract loyal users, and convert visits into real results. Each step adds growth and gives your brand a clear edge in the market.",
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
