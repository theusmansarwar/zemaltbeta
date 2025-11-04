
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";
import TeamCard from "@/Components/TeamCard/TeamCard";

export const metadata = {
  title: "Team",
  description:
    "Meet the Zemalt team — a group of digital marketing experts passionate about SEO, design, and strategy that help brands grow with creativity and results",
};
const featuredData = {
  title: "OUR",
  spanTitle: "TEAM",
  description:
    "Behind every project stands a team that understands results. Zemalt brings together experts from SEO, design, development, and digital strategy. Each professional focuses on precision, performance, and measurable growth. We work with clear goals, proven methods, and a shared drive to help brands lead in their industries.",
};
const page = () => {
  return (
    <div className="PageBg">
      <ServicePageFeatured data={featuredData} />
      <TeamCard />
    </div>
  );
};

export default page;
