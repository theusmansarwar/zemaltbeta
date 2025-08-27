import styles from "./page.module.css";
import Realworld from "@/Components/Realworld/Realworld";
import TestimonialSlider from "@/Components/TestimonialSlider/TestimonialSlider";
import BlogSection from "@/Components/BlogSection/BlogSection";
import Servicefeatured from "@/Components/ServiceFeatured/Servicefeatured";
import Services from "@/Components/services/Services";
import LastBottom from "@/Components/LastBottom/LastBottom";
export const metadata = {
  title: "Services | Zemalt",
  description:
    "Discover Zemalt's creative services including branding, advertising design, packaging, UI/UX, and more. We deliver clear designs that strengthen your brand identity.",
};

export default function Page() {
  return (
    <div className={styles.Home}>
      <Servicefeatured />
      <Services />
      <BlogSection />
      <Realworld />
      <TestimonialSlider />
      <LastBottom />
    </div>
  );
}
