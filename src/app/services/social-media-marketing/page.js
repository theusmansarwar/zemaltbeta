import ServicePage from "@/Components/SERVICEPAGE/ServicePage";
export const metadata = {
  title: "SMM Services | Zemalt",
  description:
    "Discover Zemalt's creative services including branding, advertising design, packaging, UI/UX, and more. We deliver clear designs that strengthen your brand identity.",
};

export default function Service() {
  const faqs = {
    title: "FAQs on social & paid services",
    description:
      "At Zemalt, we understand that businesses want more than just generic information. You want clear answers about how our team will support your growth and manage your campaigns. We explain what we do for you, how we deliver results, and why partnering with Zemalt gives your brand a competitive edge.",
    questions: [
      {
        question:
          "How will we create the right social media ad campaign for my business?",
        answer:
          "Zemalt studies your market, audience, and competitors before creating campaigns. Our team builds ads that highlight your unique value. We select the best platforms and formats to reach your target customers. You get campaigns designed to generate sales, not just clicks.",
      },
      {
        question: "What does Zemalt do if I already run social media ads?",
        answer:
          "We audit your existing ads and remove wasted spend. Zemalt refines targeting, improves ad creatives, and fixes poor placements. You get optimized campaigns that convert better and deliver measurable ROI",
      },
      {
        question: "How will we guide you in choosing the right plan?",
        answer:
          "You don’t have to worry about choosing blindly. Zemalt reviews your goals, budget, and industry first. We then recommend the exact plan that suits your business. You get a clear path with no confusion.",
      },
      {
        question: "What kind of reports will Zemalt share with me?",
        answer:
          "We provide reports that show campaign reach, engagement, and conversions. Zemalt makes data simple so you know exactly how your money works. You see growth backed by numbers, not guesses.",
      },
      {
        question: "Can you handle both ad design and account management?",
        answer:
          "Yes. Zemalt creates ad copies, visuals, and videos tailored to your audience. We also manage bidding, placements, and scaling. You don’t just get ads — you get full campaign management under one roof.",
      },
      {
        question: "How does one scale campaigns once they succeed?",
        answer:
          "We expand campaigns step by step. Zemalt tests new audiences, increases ad budgets, and launches campaigns across more platforms. You get growth that’s steady, controlled, and profitable.",
      },
    ],
  };

  const featuredData = {
    title: "Social & Paid Media",
    spanTitle: "SERVICES",
    description:
      "Social and paid media give your brand fast reach and real results. Zemalt builds campaigns that connect you with the right people. Our ads grab attention and turn clicks into sales. You get full account management from our team. We post content, reply to your audience, and track results. Your brand stays consistent while you focus on business growth. Our approach stays simple and clear. You see more traffic, stronger engagement, and better conversions. Zemalt helps your brand grow faster through social ads that truly work",
  };
  const cardData = [
    {
      title: "Social Media Advertising",
      slug: "social-media-advertising",
      type:"para",
      items: [
        "Your customers spend hours every day on social platforms. Zemalt helps you reach them through targeted social media advertising that sparks action. Our experts plan ad campaigns that highlight your brand and turn views into sales. You gain wider reach, stronger engagement, and steady growth. We use paid advertising strategies that help you connect with the right audience and improve brand recognition.",
      ],
    },
    {
      title: "Meta Ads",
      slug: "meta-ads",
      type:"para",
      items: [
        "Facebook and Instagram hold the largest audiences online. Zemalt builds meta ads that connect you with potential buyers who matter most. We focus on increasing visibility, growing followers, and improving ad performance. Every campaign is data-driven to cut wasted spend and raise conversions. Our paid ads management ensures you get better ROI and stronger results from every campaign.",
      ],
    },
    {
      title: "Managing Accounts",
      slug: "managing-accounts",
      type:"para",
      items: [
        "Running social accounts alone takes time and energy. Zemalt manages your social profiles with care so your brand stays consistent. We post content, reply to customers, and monitor performance. Our social media management services keep your audience engaged while you focus on business. You get a reliable partner who grows your presence and maintains trust with your customers.",
      ],
    },
    {
      title: "Social Advertising",
      slug: "social-advertising",
      type:"para",
      items: [
        "Social advertising gives your brand faster growth than any other channel. Zemalt designs campaigns that match your business goals. You get more sales, more leads, and more awareness across platforms. Our paid social media campaigns help your brand stand out and deliver measurable results. Every strategy is built to scale your online growth and create long-term impact.",
      ],
    },
    {
      title: "Advertising Creation",
      slug: "advertising-creation",
      type:"para",
      items: [
        "Great ads create action, not just impressions. Zemalt produces ad content that speaks to your target audience and drives clicks. We combine visuals, clear words, and tested formats that motivate customers to respond. Our creative ad design services make your brand memorable and boost conversions. You gain lasting growth through ads built to connect and perform.",
      ],
    },
  ];

  const imageData = {
    heading: "Social Media Communication",
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
    heading: "Why Choose Us for Web Design and Social Media",
    description:
      "Your website creates the first impression. Your social media extends that impact. We design sites that load fast, look sharp, and keep visitors engaged. We align those designs with social platforms so your brand stays consistent everywhere. Our team builds strategies that reach the right people and spark real conversations. You get creative design, clear messaging, and campaigns that drive measurable results. Each element works together to turn visitors into loyal customers",
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
