
import styles from "./page.module.css";
import Realworld from "@/Components/Realworld/Realworld";
import TestimonialSlider from "@/Components/TestimonialSlider/TestimonialSlider";
import BlogSection from "@/Components/BlogSection/BlogSection";
import Servicefeatured from "@/Components/ServiceFeatured/Servicefeatured";
import Services from "@/Components/services/Services";
import Faq from "@/Components/FAQ/Faq";
import DesigningCard from "@/Components/Designing-cards/DesigningCard";
import DesigningCardFeatured from "@/Components/DesigningCardFeatured/DesigningCardFeatured";
import RevenueCalculator from "@/Components/RevenueCalculator/RevenueCalculator";
import BigIdea from "@/Components/BigIdea/BigIdea";
import WhyDesign from "@/Components/WhyDesign/WhyDesign";
export default function Page() {
  return (
    <div className={styles.Home}>
      <DesigningCardFeatured/>
      <DesigningCard/>
      <TestimonialSlider />
      <BigIdea/>
     <Faq/>
     <RevenueCalculator/>
      
      <WhyDesign/>
     
     
      
    </div>
  );
}
