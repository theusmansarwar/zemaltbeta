import BigIdea from "../BigIdea/BigIdea";
import ServiceCard from "../Designing-cards/ServiceCard";
import Faq from "../FAQ/Faq";
import RevenueCalculator from "../RevenueCalculator/RevenueCalculator";
import ServicePageFeatured from "../ServicePageFeatured/ServicePageFeatured";
import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";
import WhyService from "../WhyService/WhyService";

import "./page.css";

export default function ServicePage({
  featuredData,
  cardData,
  imageData,
  Faqs,
  CalulaterBottom,
  whyService,
}) {
  return (
    <div className="homebg">
      <ServicePageFeatured data={featuredData} />
      <ServiceCard data={cardData} />
      <TestimonialSlider />
      <BigIdea data={imageData} />
      <Faq faqs={Faqs} />
      <RevenueCalculator data={CalulaterBottom}/>
      <WhyService data={whyService} />
    </div>
  );
}
