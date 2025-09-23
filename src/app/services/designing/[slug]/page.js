import ProjectPage from "@/Components/SERVICEPAGE/ProjectPage";

export default function Page() {
  const featuredData = {
    title: "WEB DESIGN",
    spanTitle: "PORTFOLIO",
    description:
      "We invite you to explore our latest web design projects. Each project shows how we mix creativity with smart design to build websites that look modern and work well. Our work is not only about design. We make sure every website is easy to use, fast, and fits your brand style. You will see how ideas turn into real results. We design websites to attract visitors and guide them to take action. The style and performance come together in every project we create.",
  };
  const subServiceFirstData = [
    {
      type: "heading",
      text: "Professional Web Design That Grows Your Business",
    },
    {
      type: "step",
      number: "01",
      title: "Audit Your Existing Social Media Ads & Data",
      description:
        "We start by auditing your current social media ads and data. If you already run ads, we review performance to find what’s working and what needs improvement. If you have never run ads before, we use customer insights and market data to build the right foundation. Our approach relies on data-driven decisions, not guesswork.",
    },
    {
      type: "step",
      number: "02",
      title: "Research Your Competitors & Target Market",
      description:
        "Understanding your competitors and audience is the next step. We analyze your competitor strategies, audience behavior, and customer pain points. This helps us identify opportunities that your brand can use to get ahead. We study what motivates your audience and craft strategies that capture their attention.",
    },
    {
      type: "step",
      number: "03",
      title: "Create Advertisements that Drive Leads and Sales",
      description:
        "Our team designs ads that convert. Using creative visuals and strong messaging, we make campaigns that attract clicks and generate sales. We test multiple versions of ads (A/B testing) to ensure maximum ROI at the lowest cost. Each ad campaign is tailored to your business, helping you build leads that are ready to buy.",
    },
    {
      type: "step",
      number: "04",
      title: "Monthly Reporting",
      description:
        "Transparency is at the heart of our service. We highlight results, explain adjustments, and share what’s planned for the next period. You also get 24/7 access to your campaign insights, so you always know how your investment is working for you.",
    },
  ];

  return (
    <ProjectPage
      featuredData={featuredData}
      subServiceData={subServiceFirstData}
    />
  );
}
