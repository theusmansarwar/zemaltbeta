
import ContactForm from "@/Components/ContactUs/ContactForm";
import GrowYourBrand from "@/Components/ContactUs/GrowYourBrand";
import MapSection from "@/Components/ContactUs/MapSection";
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";


export const metadata = {
  title: "Contact Us | Zemalt",
  description:
    "Get smart SEO and marketing solutions with Zemalt that increase search traffic, improve brand reach, and turn visitors into loyal customers.",
};
const featuredData = {
  title: "CONTACT",
  spanTitle: "US",
  description:
    "You need a clear design that grows your brand. Zemalt creates sharp ideas that keep your style strong. You gain trust through smart detail and clean art. Each project shows focus and clear results.",
};
const page = () => {
  return (
    <div className="PageBg">
      <ServicePageFeatured data={featuredData} />
      <ContactForm/>
      <GrowYourBrand/>
      <MapSection/>
    </div>
  );
};

export default page;
