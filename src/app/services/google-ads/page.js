import ServicePage from "@/Components/SERVICEPAGE/ServicePage";
export const metadata = {
  title: "Google Ads Services | Zemalt",
  description:
    "Discover Zemalt's creative services including branding, advertising design, packaging, UI/UX, and more. We deliver clear designs that strengthen your brand identity.",
};

export default function Service() {
  const faqs = {
    title: "FAQs about Google Ads Services",
    description:
      "Zemalt is a trusted Google Ads partner that drives real growth for your business. We focus on clear ads and quick results. You get expert setup, smart targeting, and cost plans that give more value for your spend",
    questions: [
      {
        question: "What makes a Google Ads campaign effective?",
        answer:
          "A campaign works best when the ads match the target audience. Clear keywords, strong ad text, and focused landing pages give higher results. You gain better reach, more leads, and consistent sales. An effective campaign also controls cost and avoids wasted spend. Careful planning at every step ensures lasting impact.",
      },
      {
        question: "How can Google Ads improve my business growth?",
        answer:
          "Google Ads places your brand in front of people who search for your services. You reach the right users at the right time and attract buyers with real intent. Ads help you gain fast traffic, higher conversions, and stronger visibility. Your business grows through steady leads and brand trust.",
      },
      {
        question: "How fast do Google Ads deliver results?",
        answer:
          "Google Ads gives results within days. You start getting clicks, visits, and inquiries almost immediately. Campaigns show progress faster than most other marketing methods. You can also adjust ads anytime, which means growth never slows down. The speed makes it ideal for businesses that want a quick impact.",
      },
      {
        question: "How do experts improve ad performance?",
        answer:
          "Ad performance improves through the right mix of targeting, bidding, and strong copy. Experts choose clear keywords and refine them often. They test headlines, calls to action, and landing pages to see what works best. Each step raises CTR, lowers CPC, and builds stronger ROI. Continuous checks keep campaigns on track.",
      },
      {
        question: "What metrics matter most in Google Ads?",
        answer:
          "The main metrics are CTR, CPC, conversions, and ROI. These numbers show how well ads perform and how much value you gain. A good campaign tracks every click and compares results against clear goals. Strong metrics prove growth and reveal where you can improve. Zemalt uses these numbers to shape better outcomes.",
      },
      {
        question: "How do I keep my Google Ads budget safe?",
        answer:
          "You keep the budget safe through smart bidding and careful targeting. Negative keywords cut waste and stop unwanted clicks. Tracking tools show where money goes and what brings results. A well-planned budget means every dollar works toward growth. Regular reviews help control spending and protect your investment.",
      },
      {
        question: "What types of businesses benefit from Google Ads?",
        answer:
          "Small, medium, and large businesses all benefit from Google Ads. Local shops gain walk-in customers, and online stores get sales worldwide. Service providers, e-commerce brands, and startups see value fast. Any business that wants visibility and reliable leads can benefit. Google Ads fit well for both short-term and long-term goals.",
      },
      {
        question: "How do I know if my Google Ads are working?",
        answer:
          "You know ads work when you see more leads, sales, and steady engagement. Reports show clicks, conversions, and return on spend. Strong performance means lower cost per lead and higher trust from customers. A clear pattern of growth proves success. Zemalt highlights these results through data that matches your goals",
      },
    ],
  };

  const featuredData = {
    title: "Google Ads",
    spanTitle: "SERVICES",
    description:
      "Drive real growth with Zemalt’s Google Ads solutions. You get campaigns that capture clicks and convert them into leads. You build trust through clear messaging and smart ad spend. Each project delivers focused results and lasting value. Increase reach, boost conversions, and achieve business goals. Stay competitive and grow your brand with results-driven ads. Explore Zemalt’s Google Ads services today and unlock your online potential.",
  };
  const cardData = [
    {
      title: "Search Ads",
      slug: "search-ads",
      items: [
        "Keyword-based ads",
        "Exact match and phrase match",
        "Ad copy and headlines",
        "Landing page setup",
      ],
    },
    {
      title: "Display Ads",
      slug: "display-ads",
      items: [
        "Image and banner ads",
        "Retargeting users",
        "Audience-based reach",
        "Placement choice and contro",
      ],
    },
    {
      title: "Video Ads",
      slug: "video-ads",
      items: [
        "YouTube ad setup",
        "In-stream ads",
        "Short bumper ads",
        "Target by interest",
      ],
    },
    {
      title: "Shopping Ads",
      slug: "shopping-ads",
      items: [
        "Product feed setup",
        "Merchant center check",
        "Smart shopping ads",
        "Campaign tracking",
      ],
    },
    {
      title: "App Campaigns",
      slug: "app-compaigns",
      items: [
        "App install ads",
        "App engagement ads",
        "Store link setup",
        "Performance report",
      ],
    },
    {
      title: "Local Campaigns",
      slug: "local-compaigns",
      items: [
        "Geo-targeted ads",
        "Google Maps integration",
        "Local promotions",
        "Traffic and conversion tracking",
      ],
    },
  ];

  const imageData = {
    heading:
      "Bright minds shape clear paths and act fast. Fresh ideas spark growth. True freedom drives success.",
    image: "/bigidea.png",
  };
  const whyService = {
    title: "Drive Sales Fast with Google Ads",
    description: [
      "We are a leading ad team trusted by brands worldwide. You gain tested strategies that expand reach quickly and attract the right audience. Experts set clear steps that grow sales and deliver results that last over time.",
      "We act as partners in achieving your goals. You get structured plans that boost visibility and generate steady leads. Each campaign focuses on clear outcomes and measurable growth. Our approach builds trust while turning clicks into lasting sales",
      "We provide tools that protect every dollar spent. Campaigns use precise actions and tracking to maximize results. Clients rely on us to maintain strong ads that bring consistent leads, higher reach, and meaningful growth. Every campaign adds value, strengthens brand presence, and drives long-term success.",
    ],
    image: "/why-designing.png",
  };
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
      Faqs={faqs}
      CalulaterBottom={calculaterBottomData}
      whyService={whyService}
    />
  );
}
