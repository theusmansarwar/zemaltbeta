import CaseStudy from "@/Components/CaseStudy/CaseStudy";
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";

export const metadata = {
  title: "Case Studies | Zemalt’s Success Stories in Digital Growth",
  description:
    "Zemalt’s case studies showcasing SEO, paid ads, and web development success. See how we drive growth and deliver measurable results for clients.",
};
const featuredData = {
  title: "CASE",
  spanTitle: "STUDIES",
  description:
    "You deserve proof that strategies create real growth. Zemalt’s case studies highlight how we solve challenges and deliver measurable success. Each story explains the problem faced, the approach we used, and the results achieved. You see how SEO improves rankings, how ads generate conversions, and how social media builds engagement. Every example reflects our commitment to clarity, precision, and performance. You understand the value of our methods through clear outcomes.",
};
const page = () => {
  return (
    <div className="PageBg">
      <ServicePageFeatured data={featuredData} />
      <CaseStudy />
    </div>
  );
};

export default page;
