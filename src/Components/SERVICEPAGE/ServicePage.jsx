import BigIdea from "../BigIdea/BigIdea";
import Carousal from "../Carousal/Carousal";
import Carousal2 from "../Carousal/Carousal2";
import ServiceCard from "../Designing-cards/ServiceCard";
import Faq from "../FAQ/Faq";
import RevenueCalculator from "../RevenueCalculator/RevenueCalculator";
import ServicePageFeatured from "../ServicePageFeatured/ServicePageFeatured";
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
      {/* Featured Section */}
      {featuredData?.published !== false && (
        <ServicePageFeatured data={featuredData} />
      )}

      {/* Sub Services */}
      {cardData?.published && cardData.items?.length > 0 && (
        <ServiceCard data={cardData.items} />
      )}


      {/* Carousal (always visible) */}
      <Carousal />

      {/* Image Section */}
      {imageData?.published && <BigIdea data={imageData} />}

      {/* FAQs Section */}
      {Faqs?.published && <Faq faqs={Faqs?.faqs || Faqs} />}

      {/* Revenue Calculator */}

      <RevenueCalculator data={CalulaterBottom} />

      {/* Why Service Section */}
      {whyService?.published && <WhyService data={whyService} />}
    </div>
  );
}
