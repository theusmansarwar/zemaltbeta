
import IndustryCard from "@/Components/IndustryCard/IndustryCard";
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";


export const metadata = {
  title: "Industries | Zemalt",
  description:
    "Get smart SEO and marketing solutions with Zemalt that increase search traffic, improve brand reach, and turn visitors into loyal customers.",
};
const featuredData = {
  title: "INDUSTRIES",
  spanTitle: "WE SERVE",
  description:
    "You need a clear design that grows your brand. Zemalt creates sharp ideas that keep your style strong. You gain trust through smart detail and clean art. Each project shows focus and clear results.",
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
