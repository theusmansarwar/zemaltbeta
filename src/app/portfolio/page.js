
import ContactForm from "@/Components/ContactUs/ContactForm";
import GrowYourBrand from "@/Components/ContactUs/GrowYourBrand";
import MapSection from "@/Components/ContactUs/MapSection";
import PortfolioCards2 from "@/Components/portfolioCards/PortfolioCards2";
import PortfolioPage from "@/Components/Portfolios/PortfolioPage";
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";


export const metadata = {
  title: "Portfolio",
  description:
    "Expert web design, SEO, digital marketing, and social media marketing by Zemalt drives lead generation, online visibility, and website optimization.",
};
const featuredData = {
  title: "",
  spanTitle: "Portfolio",
  description:
    "Zemalt portfolio showcases projects that deliver measurable online growth and significant digital impact. Each case reflects enhanced visibility, stronger user engagement, and proven results for global clients. Work highlights our expertise in crafting impactful digital experiences that drive real value and lasting success. Every project demonstrates strategic execution, tangible outcomes, and elevated brand credibility.",
};
const page = () => {
  return (
    <div className="PageBg">
      <ServicePageFeatured data={featuredData} />
      <PortfolioPage/>
    </div>
  );
};

export default page;
