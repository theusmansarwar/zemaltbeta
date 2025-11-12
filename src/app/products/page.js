
import Products from "@/Components/Products/Products";
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";

export const metadata = {
  title: "Business Management Software Solutions | Zemalt Systems",
  description:
    "Zemalt business software boosts efficiency and growth with smart HR, POS, inventory, appointment, and taxi dispatch solutions for seamless operations.",
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
