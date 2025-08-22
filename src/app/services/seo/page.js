import styles from "./page.module.css";
import TestimonialSlider from "@/Components/TestimonialSlider/TestimonialSlider";
import Faq from "@/Components/FAQ/Faq";
import DesigningCard from "@/Components/Designing-cards/ServiceCard";
import RevenueCalculator from "@/Components/RevenueCalculator/RevenueCalculator";
import WhyDesign from "@/Components/WhyDesign/WhyDesign";
import ImageInService from "@/Components/ImageInService/ImageInService";
import Carousal from "@/Components/Carousal/Carousal";
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";
export default function Page() {
  const seoFaqs = {
    title: "FAQs on web design services",
    description:
      "Zemalt are an experienced digital marketing team. We focus on clarity and quick results. We provide the resources and simple guidance that help you to gain knowledge and support.",
    questions: [
      {
        question: "What is the point of digital marketing for my business?",
        answer:
          "Digital marketing helps your brand reach more people. It drives traffic, generates leads, and builds your image. Every step is guided by data to make campaigns stronger.",
      },
      {
        question: "How can digital marketing raise my website’s visibility?",
        answer:
          "Digital marketing pushes your site higher in search results. SEO moves your pages to the top. Paid ads bring quick visitors. Social platforms send new users. Strong content keeps people engaged. You build authority and appear more often.",
      },
      {
        question: "How long does digital marketing take?",
        answer:
          "Digital marketing shows results in weeks or months. SEO takes time but lasts longer. Social media builds trust. Email keeps users connected. All efforts work together. You need consistency to see returns.",
      },
      {
        question: "How do you measure digital marketing performance?",
        answer:
          "Zemalt measure success through numbers. Traffic shows reach. Leads show demand. Conversions show growth. ROI shows profit. Reports highlight progress.",
      },
    ],
  };
  const featuredData = {
    title: "SEO",
    spanTitle: "SERVICES",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. ",
  };
  const cardData = [
    {
      title: "Lorem & Ipsum Seo",
      items: [
        "Logo Design",
        "Brand color set and font choice",
        "Style guide manual",
        "Office cards, letter papers and envelopes",
      ],
    },
    {
      title: "Marketing & Advertising Design",
      items: [
        "Social posts, banners, online ads",
        "Leaflets and posters",
        "Brochures and catalogs",
        "Outdoor ads and boards",
      ],
    },
    {
      title: "Packaging & Label Design",
      items: [
        "Product box art",
        "Bottle and jar tags",
        "Food, beauty tech pack art",
        "3D box sample",
      ],
    },
    {
      title: "Print Media Design",
      items: [
        "Books and magazine covers",
        "Newsprint and flyer pages",
        "Reports and company brochures",
      ],
    },
    {
      title: "UI/UX Designing",
      items: [
        "Website UI plan",
        "Mobile app page plan",
        "Sample pages and layouts",
      ],
    },
  ];

  return (
    <div className={styles.Home}>
      <ServicePageFeatured data={featuredData} />
      <DesigningCard data={cardData} />
      <Carousal />
      <ImageInService />
      <TestimonialSlider />
      <Faq faqs={seoFaqs} />
      <RevenueCalculator />
      <WhyDesign />
    </div>
  );
}
