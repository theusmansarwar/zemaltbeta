import AboutUsHero from "@/Components/AboutUs/AboutUsHero";
import FourthSection from "@/Components/AboutUs/FourthSection";
import MeetTeam from "@/Components/AboutUs/MeetTeam";
import OurValues from "@/Components/AboutUs/OurValues";
import SecondSection from "@/Components/AboutUs/SecondSection";
import SeventhSection from "@/Components/AboutUs/SeventhSection";
import VideoSection from "@/Components/AboutUs/VideoSection";
import Faq from "@/Components/FAQ/Faq";


export const metadata = {
  title: "About Zemalt | Digital Marketing, SEO & Design Experts",
  description:
    "Learn about Zemalt, a full-service digital marketing agency specializing in SEO, content writing, UI/UX design, development, and paid media solutions.",
};
const aboutPageFaqs = {
  title: "FAQs about Zemalt",
  description:
    "At Zemalt, we believe in growth through trust and results. Many people ask about who we are and how we work.",
  items: [
    {
      question: "Why choose Zemalt digital marketing agency for my business?",
      answer:
        "Zemalt is a digital marketing agency that helps your business grow online. Our team works on SEO, Google Ads, content writing, and social media. We also build websites and design simple UI/UX. The goal is clear results that add real value to your business.",
    },
    {
      question: "Who can benefit from Zemalt’s services?",
      answer:
        "Our services are designed for startups, small businesses, and established companies across industries. Whether you need more website traffic, better brand awareness, or higher conversions, Zemalt creates tailored solutions to achieve your targets.",
    },
    {
      question: "What digital marketing services do you offer?",
      answer:
        "We offer a wide range of services, including SEO, social media management, PPC advertising, content marketing, branding, and web development. Each service is designed to strengthen your online presence and deliver measurable results.",
    },
    {
      question: "How does Zemalt measure success in campaigns?",
      answer:
        "We measure success by tracking the metrics that matter to your business. From keyword rankings and website traffic to leads and sales, we provide detailed reports that show clear progress. Our transparent reporting keeps you informed every step of the way.",
    },
    {
      question: "How long does it take to see results with digital marketing?",
      answer:
        "Results depend on the service and your business goals. SEO often takes a few months to show strong improvements, while PPC and social media ads can deliver results faster. Zemalt balances quick wins with strategies that ensure long-term growth.",
    },
    {
      question: "Do you work with businesses outside your location?",
      answer:
        "Yes, Zemalt works with clients worldwide. Our digital-first approach allows us to create and manage campaigns for businesses in different regions, while still offering personalized support",
    },
    {
      question: "How can I get started with Zemalt?",
      answer:
        "You can start by reaching us through our website. Our team sets a consultation to learn your goals and challenges. Then we design a plan that fits your budget and drives growth.",
    },
  ],
};
const page = () => {
  return (
    <div className="PageBg">
      <AboutUsHero />
      <SecondSection />
      <MeetTeam />
      <FourthSection />
      <Faq faqs={aboutPageFaqs} />
      <VideoSection />
      <SeventhSection />
      <OurValues />
    </div>
  );
};

export default page;
