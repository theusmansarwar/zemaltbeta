import ProjectPage from "@/Components/SERVICEPAGE/ProjectPage";

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ await params here

  const formattedTitle = slug
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${formattedTitle} | Services`,
    description: `Learn more about our ${formattedTitle} services tailored to your business needs.`,
  };
}

export default async function Page({ params }) {
  const { slug } = await params; // ✅ await params here too

  const formattedTitle = slug
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const featuredData = {
    title: formattedTitle?.toUpperCase(),
    spanTitle: "SERVICES",
    description:
      "This is a placeholder description. You can replace it with service-specific details.",
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
        "The first thing we do when we partner with a new client is audit their existing efforts with social media ads. Even if you’ve run ads in the past that generated zero results, that information and data is still helpful for us to have. If you’ve never run any ads before, we still like to look at any customer data you have because we like to let data inform our decisions as opposed to hunches.",
    },
    {
      type: "step",
      number: "02",
      title: "Research Your Competitors & Target Market",
      description:
        "Next, we do the research necessary to understand everything there is to know about your competitors and ideal customer base. What are your competitors doing well vs what are they doing poorly? What is your shared target audience responding well to vs not? All of this information helps us understand what motivates your audience to buy in relation to your product or service.",
    },
    {
      type: "step",
      number: "03",
      title: "Create Advertisements that Drive Leads and Sales",
      description:
        "With over 6,000 different paid social media ads made for our clients, we know how to create ads that convert. We A/B test different ads and audiences for each client to ensure we drive maximum results for your business at the lowest cost per result. That’s why businesses experience a higher ROI with our social media advertising services.",
    },
    {
      type: "step",
      number: "04",
      title: "Monthly Reporting",
      description:
        "We send easy-to-read monthly reports that outline what we did over the last 30 days, what the results of those ads were and what we’re changing for the upcoming month. In between reports, you have access to our team via weekly or bi-weekly meetings and 24/7 access to your campaign analytics.",
    },
  ];

  return <ProjectPage featuredData={featuredData} subServiceData = {subServiceFirstData}/>;
}
