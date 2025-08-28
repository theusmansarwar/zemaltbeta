import Image from "next/image";
import styles from "./page.module.css";
import Featured from "@/Components/FeaturedSection/Featured";
import OutBox from "@/Components/OutOfBox/OutBox";
import Realworld from "@/Components/Realworld/Realworld";
import Faq from "@/Components/FAQ/Faq";
import TestimonialSlider from "@/Components/TestimonialSlider/TestimonialSlider";
import BlogSection from "@/Components/BlogSection/BlogSection";
import Whyus from "@/Components/why-us-section/Whyus";
import TestimonialSection from "@/Components/Testimonial/TestimonialSection";
import BlogsCard from "@/Components/BlogCards/BlogCards";
import LatestBlogs from "@/Components/LatestBlogs/LatestBlogs";
import GrowingTipsBlogs from "@/Components/GrowingTipsBlogs/GrowingTipsBlogs";
import TrendingBlogs from "@/Components/TrendingBlogs/TrendingBlogs";

export default function Home() {
  const Homepagefaqs = {
    title: "FAQs",
    description:
      "Zemalt is a leading digital marketing agency. We provide clear answers and practical guidance. Our clients receive dedicated support backed by proven expertise.",
    questions: [
      {
        question: "Why is digital marketing important for my business?",
        answer:
          "Digital marketing is used to reach more people. It helps generate leads. It drives traffic. It improves brand visibility. You can measure the results. It is important to track performance.",
      },
      {
        question:
          "How can digital marketing help improve my website’s visibility?",
        answer:
          "Digital marketing uses clear methods to increase reach. Search tools show your site more often through a strong keyword focus.",
      },
      {
        question:
          "How long does it take to see results from digital marketing efforts?",
        answer:
          "Results from digital marketing take time to build. Most brands notice progress within a few weeks through steady action.",
      },
      {
        question:
          "How do you measure the success of digital marketing campaigns?",
        answer:
          "Success depends on real numbers and clear outcomes. Teams track growth through traffic, leads, and customer actions.",
      },
    ],
  };
  return (
    <div className={styles.Home}>
      {/* <BlogsCard/>
      <LatestBlogs />
      <GrowingTipsBlogs/>
      <TrendingBlogs /> */}
      <Featured />
      <OutBox />
      <Realworld />
      <TestimonialSlider />
      <Whyus />
      <TestimonialSection />
      <Faq faqs={Homepagefaqs} />
      <BlogSection />
    </div>
  );
}
