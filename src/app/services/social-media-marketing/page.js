import ServicePage from "@/Components/SERVICEPAGE/ServicePage";
export const metadata = {
  title: "SMM Services | Zemalt",
  description:
    "Discover Zemalt's creative services including branding, advertising design, packaging, UI/UX, and more. We deliver clear designs that strengthen your brand identity.",
};

export default function Service() {
  const faqs = {
    title: "FAQs about Social Media Marketing Services",
    description:
      "Zemalt is a global social media team that builds a strong presence for your brand. We focus on clear posts and fast reach. You get sharp ads, tested ideas, and fair plans that boost your growth online.",
    questions: [
      {
        question: "What makes Zemalt strong in social media marketing?",
        answer:
          "Zemalt builds campaigns that focus on real growth. You get posts that match your brand voice and connect with your audience. Ads target the right groups and drive both reach and conversions. Content stays clear and consistent, which makes your brand stand out. Growth comes from tested ideas, strong visuals, and smart timing.",
      },
      {
        question: "How does social media improve business growth?",
        answer:
          "Social platforms open direct contact with your audience. Posts drive clicks, shares, and conversations. Ads push your message to the right users at the right time. You gain leads, trust, and loyal buyers when your content adds value. A strong presence also builds authority in your field.",
      },
      {
        question: "How long does social media take to show results?",
        answer:
          "Paid ads often deliver reach within days. Organic growth builds slowly but becomes steady over weeks. Pages gain traction as more users engage and share content. Growth compounds when posts, ads, and strategies align. You should expect both early gains and lasting progress.",
      },
      {
        question: "Why should businesses start social media marketing now?",
        answer:
          "Your rivals are already reaching users on social platforms. Waiting means lost chances for growth. Quick action helps you stay visible and keep pace with the market. Social media creates trust, builds awareness, and drives sales. A strong start now secures a stable place in your audience’s mind.",
      },
      {
        question: "What types of content perform best on social media?",
        answer:
          "Short videos capture attention and boost reach fast. Posts with clear images engage viewers and gain more shares. Articles and stories build authority and add depth to your brand. Each format plays a role in connecting your business to users.",
      },
      {
        question: "How do ads support social media success?",
        answer:
          "Ads put your message in front of the right users fast. Careful targeting reduces wasted spend and raises returns. Strong ad text and visuals improve clicks and conversions. Paid ads create steady growth when paired with strong organic content.",
      },
      {
        question: "How is social media success measured?",
        answer:
          "Success is tracked through reach, clicks, and engagement. You see how many users interact with your posts and ads. Leads, conversions, and sales prove direct business impact. Reports highlight growth trends and audience behavior. Numbers guide decisions and improve the next steps in strategy.",
      },
      {
        question: "How does Zemalt ensure lasting value in social media?",
        answer:
          "Zemalt builds plans that connect short-term wins with long-term goals. You gain posts that reflect your brand and keep users engaged. Campaigns adapt to trends and audience needs over time. Clear reports help you see both growth and return on spend. Zemalt ensures that your presence keeps building trust and sales across every platform.",
      },
    ],
  };

  const featuredData = {
    title: "Social & Paid Media",
    spanTitle: "SERVICES",
    description:
      "Grow your brand fast with Zemalt’s social media marketing solutions. You get posts that reflect your brand voice and capture attention. You increase clicks, build trust, and gain loyal followers. Each campaign delivers clear results and steady growth. Boost reach, create impact, and convert views into sales. You strengthen your online presence and expand your audience. Explore Zemalt’s social media marketing services today and elevate your brand on every platform.",
  };
  const cardData = [
    {
      title: "Paid Social",
      slug: "paid-social",
      
      items: [
        "Cross-platform ad setup",
        "Targeted audience reach",
        "Retargeting campaigns",
        "Ad spend control",
        "Performance reports",
      ],
    },
    {
      title: "Meta Ads",
      slug: "meta-ads",
      
      items: [
        "Facebook ads setup",
        "Instagram ads setup",
        "Carousel and story ads",
        "Interest-based targeting",
        "Conversion tracking",
      ],
    },
    {
      title: "Managing Accounts",
      slug: "managing-accounts",
      
      items: [
        "Page optimization",
        "Profile branding",
        "Content calendar",
        "Daily post updates",
        "Engagement replies",
      ],
    },
    {
      title: "Managing Social Advertising",
      slug: "managing-social-advertising",
      
      items: [
        "Multi-platform ad control",
        "Budget management",
        "Campaign monitoring",
        "Audience analysis",
        "Monthly reporting",
      ],
    },
    {
      title: "Advertising Creation",
      slug: "advertising-creation",
      
      items: [
        "Ad copywriting",
        "Graphic visuals",
        "Short video ads",
        "Banner and story ads",
        "Call-to-action design",
      ],
    },
    {
      title: "Creative Add-ons",
      slug: "creative-add-ons",
      
      items: [
        "Influencer ad setup",
        "Trend-based campaigns",
        "Seasonal promotions",
        "Brand consistency checks",
        "Custom design support",
      ],
    },
  ];

  const imageData = {
    heading: "Social Media Communication",
    image: "/bigidea.png",
  };
  const whyService = {
    title: "Grow Your Brand Through Social Media",
    description: [
      "We are a recognized agency trusted by businesses worldwide. You gain proven strategies that grow fans quickly and attract the right audience. Our team creates posts that guide users, engage followers, and deliver measurable results.",
      "We act as partners in achieving your goals. You get clear steps that build trust and maintain steady growth. Each post focuses on outcomes that strengthen your brand and support lasting sales. Our approach ensures growth continues week after week.",
      "We provide tools that track reach and performance. Plans include precise actions and clear goals to maximize engagement. Clients rely on us to maintain steady reach, gain clicks, and generate strong leads. Every effort contributes to consistent growth and long-term brand authority.",
    ],
    image: "/why-designing.png",
  };
  const calculaterBottomData = {
    heading: "Partner with Zemalt to Expand Reach, Earn Trust, and Drive Lasting Growth",
    description:
      "We are a trusted team that builds reach and impact across every platform. You get smart plans that grow your fans, increase leads, and strengthen trust. Each step supports steady growth and keeps your brand active, visible, and connected to the right audience.",
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
