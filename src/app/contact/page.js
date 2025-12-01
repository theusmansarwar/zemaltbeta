
import ContactForm from "@/Components/ContactUs/ContactForm";
import ContactUs from "@/Components/ContactUs/ContactUs";
import GrowYourBrand from "@/Components/ContactUs/GrowYourBrand";
import MapSection from "@/Components/ContactUs/MapSection";
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";


export const metadata = {
  title: "Contact Us",
  description:
    "Do you have questions or need digital marketing support? Contact Zemalt today for SEO, content writing, web design, development, and advertising solutions.",
};
const featuredData = {
  title: "CONTACT",
  spanTitle: "US",
  description:
    "Reach out to Zemalt to discuss your project, ask questions, or share feedback. We review every message carefully and respond promptly. Our goal is to provide clear guidance, professional support, and personalized solutions. Connect with us today, and let’s create results that truly reflect your brand.",
};
const page = () => {
  return (
    <div className="PageBg">
      <ServicePageFeatured data={featuredData} />
      <ContactUs/>
      <GrowYourBrand/>
      <MapSection/>
    </div>
  );
};

export default page;
