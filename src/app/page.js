import Image from "next/image";
import styles from "./page.module.css";
import Featured from "@/Components/FeaturedSection/Featured";
import OutBox from "@/Components/OutOfBox/OutBox";
import Realworld from "@/Components/Realworld/Realworld";
import Faq from "@/Components/FAQ/Faq";
import TestimonialSlider from "@/Components/TestimonialSlider/TestimonialSlider";
import Footer from "@/Components/Footer/Footer";
import BlogSection from "@/Components/BlogSection/BlogSection";
import Whyus from "@/Components/why-us-section/Whyus";
import Cards from "@/Components/Testimonial/Cards";
import TestimonialSection from "@/Components/Testimonial/TestimonialSection";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Featured />
      <OutBox />
      <Realworld />
      <TestimonialSlider />
      <Whyus/>
      <TestimonialSection/>
      <Faq />
      <BlogSection />
      
      
    </div>
  );
}
