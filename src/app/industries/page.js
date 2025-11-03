
import IndustryCard from "@/Components/IndustryCard/IndustryCard";
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";


export const metadata = {
  title: "Industries We Serve | Zemalt Digital Solutions for Growth",
  description:
    "Zemalt offers customized SEO, marketing, and web solutions for a wide range of industries. Discover how we help businesses achieve growth across global markets.",
};
const featuredData = {
  title: "INDUSTRIES",
  spanTitle: "WE SERVE",
  description:
    "Every industry faces different challenges, and we deliver solutions that fit each one. Our expertise covers IT, healthcare, finance, retail, and e-commerce. You receive services that enhance productivity, secure systems, and drive digital growth. We focus on strategies that create long-term impact and measurable success. We adapt our services to match your goals, from small businesses to large organizations. ",
};
const page = () => {
  return (
    <div className="PageBg">
      <ServicePageFeatured data={featuredData} />
      <IndustryCard/>
    </div>
  );
};

export default page;
