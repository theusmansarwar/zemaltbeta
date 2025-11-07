import JobApplicationForm from "@/Components/JobApplicationForm/JobApplicationForm";
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";

const page = ({ params }) => {
  const { slug } = params; 
  

  const featuredData = {
    title: "JOIN",
    spanTitle: "US",
    description:
      "You need a clear design that grows your brand. Zemalt creates sharp ideas that keep your style strong. You gain trust through smart detail and clean art. Each project shows focus and clear results.",
  };

  return (
    <div className="PageBg">
      <ServicePageFeatured data={featuredData} />
      {/* ✅ pass jobId as prop */}
      <JobApplicationForm jobId={slug} />
    </div>
  );
};

export default page;
