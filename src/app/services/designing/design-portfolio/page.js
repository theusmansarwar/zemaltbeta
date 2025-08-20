
import styles from "./page.module.css";
import TestimonialSlider from "@/Components/TestimonialSlider/TestimonialSlider";

import Faq from "@/Components/FAQ/Faq";
import DesigningCard from "@/Components/Designing-cards/DesigningCard";
import DesigningCardFeatured from "@/Components/DesigningCardFeatured/DesigningCardFeatured";
import RevenueCalculator from "@/Components/RevenueCalculator/RevenueCalculator";
import BigIdea from "@/Components/BigIdea/BigIdea";
import WhyDesign from "@/Components/WhyDesign/WhyDesign";
import DesigningPortfolioFeatured from "@/Components/DesigningCardFeatured/DesigningPortfolioFeatured";
import PortfolioCards from "@/Components/portfolioCards/PortfolioCards";
export default function Page() {
  return (
    <div className={styles.Home}>
      <DesigningPortfolioFeatured/>
    
     <PortfolioCards/>
     
      
    </div>
  );
}
