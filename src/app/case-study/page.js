import CaseStudy from "@/Components/CaseStudy/CaseStudy";
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";

export const metadata = {
  title: "Case Study | Zemalt",
  description:
    "Get smart SEO and marketing solutions with Zemalt that increase search traffic, improve brand reach, and turn visitors into loyal customers.",
};
const featuredData = {
  title: "CASE",
  spanTitle: "STUDIES",
  description:
    "You deserve proof that strategies create real growth. Zemalt’s case studies highlight how we solve challenges and deliver measurable success. Each story explains the problem faced, the approach we used, and the results achieved. You see how SEO improves rankings, how ads generate conversions, and how social media builds engagement. Every example reflects our commitment to clarity, precision, and performance. You understand the value of our methods through clear outcomes. Explore our case studies and learn how Zemalt transforms business goals into results that matter. Your success story can be the next one we create.",
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
