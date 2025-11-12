
import Products from "@/Components/Products/Products";
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";

export const metadata = {
  title: "Products",
  description:
    "Zemalt’s case studies showcasing SEO, paid ads, and web development success. See how we drive growth and deliver measurable results for clients.",
};
const featuredData = {
  title: "OUR",
  spanTitle: "Products",
  description:
    "Our solutions help businesses operate efficiently and grow steadily. The platform focuses on clear results and practical use. The design ensures speed, accuracy, and consistency in every task. Teams complete work faster and reduce errors. Every feature reflects careful research, quality, and precision. The tools simplify complex processes and support better decision-making.",
};
const page = () => {
  return (
    <div className="PageBg">
      <ServicePageFeatured data={featuredData} />
      <Products />
    </div>
  );
};

export default page;
