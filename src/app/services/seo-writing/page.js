import ServicePage from "@/Components/SERVICEPAGE/ServicePage";
export const metadata = {
  title: "Content Writing Services | Zemalt",
  description:
    "Discover Zemalt's creative services including branding, advertising design, packaging, UI/UX, and more. We deliver clear designs that strengthen your brand identity.",
};

export default function Service() {
  const faqs = {
    title: "FAQs about Content Writing Services",
    description:
      "Zemalt is a global writing agency that gives your brand a strong voice online. We focus on SEO text and fast results. You get expert writers, clear edits, and budget-friendly plans that raise your reach and build steady growth.",
    questions: [
      {
        question: "What makes Zemalt the right choice for content writing?",
        answer:
          "Zemalt creates content that ranks higher and supports business goals. You get blogs, website copy, and ads that fit your brand voice. Each text piece works to attract the right audience and drive conversions. Strong ideas and clear words guide users toward action. Zemalt uses proven strategies that keep content valuable for the long term.",
      },
      {
        question: "How does professional content improve a website?",
        answer:
          "Content gives your site authority and trust. Search engines rank pages that provide clear and helpful text. Strong keywords support visibility and reach more users. Calls to action help guide readers to the next step. You gain more leads when the writing connects value with clarity.",
      },
      {
        question: "How long does it take to see results from content writing?",
        answer:
          "Content often shows early impact within weeks. Blogs drive faster reach because they target timely topics. Web pages take longer but provide steady growth over months. Results increase as content builds authority in search engines. You gain both short-term reach and long-term value.",
      },
      {
        question: "How is content performance measured?",
        answer:
          "Success is measured through rank, traffic, and engagement. Time on page shows how well readers connect with the text. Leads and conversions prove how content supports sales. Reports present data in a simple and clear way. You see how each piece aligns with your brand goals.",
      },
      {
        question: "What types of content help businesses the most?",
        answer:
          "Blogs bring traffic and improve visibility. Website pages build trust and guide users through your services. Ads drive quick action and reach targeted customers. Case studies and articles build authority in your industry. Every format supports growth when planned with a strategy.",
      },
      {
        question: "How do keywords affect content results?",
        answer:
          "Keywords link your content to what users search for. Proper placement improves ranking and visibility. Natural use keeps the text smooth and easy to read. Strong keyword research also avoids wasted effort. Content works best when keywords match intent and context",
      },
      {
        question: "Why does brand voice matter in content writing?",
        answer:
          "Brand voice makes your text consistent and recognizable. Users feel connected when words match your identity. A clear voice builds trust and separates you from competitors. Strong tone also improves customer loyalty. Each piece of content should sound like your business.",
      },
      {
        question: "How does Zemalt ensure lasting value in content writing?",
        answer:
          "Zemalt builds strategies that focus on both short and long-term growth. You gain text that ranks, sells, and stays relevant. Updates keep your content fresh and aligned with market trends. Clear goals guide every step of the writing process. Zemalt creates words that keep supporting your business long after publishing.",
      },
    ],
  };

  const featuredData = {
    title: "Content Writing",
    spanTitle: "SERVICES",
    description:
      "Elevate your brand with Zemalt’s content writing solutions. You get text that attracts readers and drives engagement. You build trust through clear, SEO-friendly content. Each project delivers focused results and lasting value. Increase reach, connect with your audience, and support your business goals. You strengthen your brand with words that perform. Explore Zemalt’s content writing services today and give your brand a powerful voice.",
  };
  const cardData = [
    {
      title: "SEO Articles",
      slug: "seo-articles",
      
      items: [
        "Keyword-focused content",
        "Optimized for search engines",
        "Engaging and informative",
        "Boosts organic traffic",
      ],
    },
    {
      title: "Content Writing",
      slug: "content-writing",
      
      items: [
        "Website copy",
        "Blog posts",
        "Guides and articles",
        "Marketing materials",
      ],
    },
    {
      title: "Copywriting",
      slug: "copywriting",
      
      items: [
        "Ad copy text",
        "Product copy",
        "Landing page copy",
        "Sales page copy",
        "View Work",
      ],
    },
    {
      title: "Product Descriptions Written",
      slug: "product-descriptions",
      
      items: [
        "SEO-friendly product titles",
        "Clear and persuasive descriptions",
        "Category content",
        "Review and feature text",
      ],
    },
    {
      title: "E-Commerce Content",
      slug: "ecommerce-content",
      
      items: [
        "Product titles",
        "Product descriptions",
        "Category content",
        "Review text",
        "View Work",
      ],
    },
    {
      title: "Website Design Structure Content",
      slug: "structure-content",
      
      items: [
        "Website layout content",
        "Page hierarchy text",
        "Menu and navigation content",
        "UX-friendly copy for design",
      ],
    },
  ];

  const imageData = {
    heading:
      "Bright minds shape clear paths and act fast. Fresh ideas spark growth. True freedom drives success.",
    image: "/bigidea.png",
  };
  const whyService = {
    title: "Boost Your Brand with Powerful Content",
    description: [
      "We are a top writing agency trusted by businesses worldwide. You gain tested strategies that grow, reach quickly and attract the right audience. Our team crafts content that guides users, builds trust, and delivers measurable results.",
      "We act as partners in achieving your goals. You get clear, focused text that strengthens brand presence and drives engagement. Each piece is designed to bring steady leads and maintain strong sales. Our approach ensures content contributes to long-term growth and visibility.",
      "We provide tools that enhance every message. Plans include precise steps that raise rank and boost online performance. Clients rely on us to create content that generates lasting results. Every word adds value, expands reach, and builds authority across platforms.",
    ],
    image: "/why-designing.png",
  };
  const calculaterBottomData = {
    heading: "Why Choose Zemalt as Your Content Writing Partner for Your Business Growth?",
    description:
      "We are a trusted writing team that drives growth and visibility for brands online. You get clear content plans designed to raise rank, attract leads, and build trust. Each word adds real value, supports your goals, and creates steady results that last.",
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
