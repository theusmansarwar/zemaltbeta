
import styles from "./page.module.css";
import Realworld from "@/Components/Realworld/Realworld";
import TestimonialSlider from "@/Components/TestimonialSlider/TestimonialSlider";
import BlogSection from "@/Components/BlogSection/BlogSection";
import Servicefeatured from "@/Components/ServiceFeatured/Servicefeatured";
import Services from "@/Components/services/Services";
export default function Page() {
  return (
    <div className={styles.Home}>
      
     <Servicefeatured/>
     <Services/>
     <BlogSection />
      <Realworld />
      <TestimonialSlider />
      
     
     
      
    </div>
  );
}
