import styles from "./page.module.css";
import Realworld from "@/Components/Realworld/Realworld";
import Servicefeatured from "@/Components/ServiceFeatured/Servicefeatured";
import Services from "@/Components/services/Services";
import LastBottom from "@/Components/LastBottom/LastBottom";
import DriveRevenue from "@/Components/DriveRevenue/DriveRevenue";
import TestimonialSlider2 from "@/Components/TestimonialSlider/TestimonialSlider2";
import GloballyTrusted from "@/Components/GloballyTrusted/GloballyTrusted";
import HowDifferent from "@/Components/HowDifferent/HowDifferent";
import BlogSection from "@/Components/BlogSection/BlogSection";
export const metadata = {
  title: "Services | Zemalt",
  description:
    "Zemalt delivers expert marketing with clear plans, proven methods, and strong skills that build trust, boost reach, and drive more leads.",
};
const blogHeaderData = {
  heading: "Digital Marketing & SEO Services That Boost Reach & Increase Sales",
  description:
    "Trust skilled experts to guide brand growth. The team uses proven methods. They improve search rankings. They attract qualified visitors. It is important to know they support steady traffic flow to each client's website.",
};
export default function Page() {
  return (
    <div className={styles.Home}>
      <Servicefeatured />
      <Services />
      <HowDifferent />
      <BlogSection data={blogHeaderData} />
      <Realworld />
      <DriveRevenue />
      <TestimonialSlider2 />
      <GloballyTrusted />
      <LastBottom />
    </div>
  );
}
