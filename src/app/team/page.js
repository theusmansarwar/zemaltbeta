import Carousal2 from "@/Components/Carousal/Carousal2";
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";
import TeamCard from "@/Components/TeamCard/TeamCard";


export const metadata = {
  title: "Team | Zemalt",
  description:
    "Get smart SEO and marketing solutions with Zemalt that increase search traffic, improve brand reach, and turn visitors into loyal customers.",
};
const page = () => {
  const featuredData = {
    title: "OUR",
    spanTitle: "TEAM",
    description:
      "You need a clear design that grows your brand. Zemalt creates sharp ideas that keep your style strong. You gain trust through smart detail and clean art. Each project shows focus and clear results.",
  };
  return (
    <div className="PageBg">
      <ServicePageFeatured data={featuredData} />
      <TeamCard />
      {/* <Carousal2 heading="READY TO BECOME A TEAM MEMBER?" link={"/careers/apply"}/> */}
    </div>
  );
};

export default page;
