
import styles from "./page.module.css";
import Featured from "@/Components/FeaturedSection/Featured";
import OutBox from "@/Components/OutOfBox/OutBox";
import Realworld from "@/Components/Realworld/Realworld";
import Faq from "@/Components/FAQ/Faq";
import Whyus from "@/Components/why-us-section/Whyus";
import TestimonialSection from "@/Components/Testimonial/TestimonialSection";
import SeoSection from "@/Components/SeoSection/SeoSection";
import MeetTeam from "@/Components/AboutUs/MeetTeam";
import TestimonialSlider2 from "@/Components/TestimonialSlider/TestimonialSlider2";
import BlogSection from "@/Components/BlogSection/BlogSection";

export const metadata = {
  title: "Zemalt",
  description:
    "Get smart SEO and marketing solutions with Zemalt that increase search traffic, improve brand reach, and turn visitors into loyal customers.",
};
  const Homepagefaqs = {
    title: "FAQs",
    description:
      "Zemalt is a leading digital marketing agency. We provide clear answers and practical guidance. Our clients receive dedicated support backed by proven expertise.",
    questions: [
      {
        question:
          "What services do we provide to support your business growth?",
        answer:
          "Zemalt provides all digital marketing solutions in one place. Our services include SEO, PPC ads, social media management, content writing, web design, and branding. Each service is built to improve visibility and bring in more customers.",
      },
      {
        question: "Why is SEO audit important before starting campaigns?",
        answer:
          "An SEO audit shows what holds a website back. Zemalt checks site speed, broken links, mobile use, and keyword gaps. You get a clear plan with fixes that boost performance. Strong audits lead to higher rankings and more traffic.",
      },
      {
        question: "How can Zemalt help e-commerce stores grow sales?",
        answer:
          "We optimize product pages, categories, and content to rank higher. Customers find your store faster and buy with ease. Zemalt improves visibility, increases conversions, and drives steady growth. Online shops achieve long-term success through our strategies.",
      },
      {
        question: "How do we measure digital marketing success?",
        answer:
          "We track every step with data. Reports show rankings, traffic, leads, and sales clearly. You always know what works and where growth comes from. Zemalt uses transparent reporting so you can trust the results.",
      },
      {
        question: "How fast can Zemalt deliver results?",
        answer:
          "Some services, like ads, bring traffic and leads within days. SEO builds long-term success and usually shows results within weeks. Zemalt focuses on both quick wins and steady growth. Businesses see progress faster with our proven methods.",
      },
      {
        question: "Why invest in digital marketing?",
        answer:
          "The competition online grows every day. Waiting gives rivals more space to take customers. Zemalt helps brands secure visibility, build authority, and gain trust today. Early action brings long-term growth and lasting market advantage.",
      },
    ],
  };
  const blogHeaderData = {
    heading:
      "Digital Marketing & SEO Services That Drive Traffic and Increase Revenue",
    description:
      "Zemalt is a top digital marketing agency. Our team supports brands with comprehensive service solutions, helping clients achieve higher search rankings through expert guidance. With clear strategies and focused actions, we drive more visitors to their websites.",
  };
export default function Home() {

  return (
    <div className={styles.Home}>
      <Featured />
      <OutBox />
      <Realworld />
      <TestimonialSlider2 />
      <Whyus />
      <TestimonialSection />
      <MeetTeam />
      <Faq faqs={Homepagefaqs} />
      <BlogSection data={blogHeaderData} />
      <SeoSection />
    </div>
  );
}
