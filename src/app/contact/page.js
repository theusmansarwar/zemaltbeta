
import ContactForm from "@/Components/ContactUs/ContactForm";
import GrowYourBrand from "@/Components/ContactUs/GrowYourBrand";
import MapSection from "@/Components/ContactUs/MapSection";
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";


export const metadata = {
  title: "Contact Zemalt | Get in Touch for SEO & Digital Marketing Services",
  description:
    "Do you have questions or need digital marketing support? Contact Zemalt today for SEO, content writing, web design, development, and advertising solutions.",
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
