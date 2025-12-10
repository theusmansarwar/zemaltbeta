import BigIdea from "../BigIdea/BigIdea";
import Carousal from "../Carousal/Carousal";
import Carousal2 from "../Carousal/Carousal2";
import ContactSection from "../ContactSection/ContactSection";
import ServiceCard from "../Designing-cards/ServiceCard";
import Faq from "../FAQ/Faq";
import IndustrySolutions from "../MainServicesPage/IndustrySolutions";
import MainServiceFirst from "../MainServicesPage/MainServiceFirst";
import WhyThis from "../MainServicesPage/WhyThis";
import RevenueCalculator from "../RevenueCalculator/RevenueCalculator";
import ServicePageFeatured from "../ServicePageFeatured/ServicePageFeatured";
import WhyService from "../WhyService/WhyService";

import "./page.css";

export default function ServicePage({
  featuredData,
  firstSectionData,
  secondData,
  cardData,
  imageData,
  Faqs,
  CalulaterBottom,
  whyThisData,
}) {
  return (
    <div className="homebg">
      {/* Featured Section */}
      {featuredData?.published !== false && (
        <ServicePageFeatured data={featuredData} />
      )}
      {firstSectionData?.published && (
        <MainServiceFirst data={firstSectionData} />
      )}
      {/* Sub Services */}
      {cardData?.published && cardData.items?.length > 0 && (
        <ServiceCard data={cardData.items} />
      )}
      {secondData?.published && <IndustrySolutions data={secondData} />}

      {whyThisData?.published && <WhyThis data={whyThisData} />}

      {/* Carousal (always visible) */}
      {/* <Carousal /> */}

      {/* Image Section */}
      {imageData?.published && <BigIdea data={imageData} />}

      {/* FAQs Section */}
      {Faqs?.published && <Faq faqs={Faqs?.faqs || Faqs} />}

      {/* Revenue Calculator */}

      {/* <RevenueCalculator data={CalulaterBottom} /> */}

      <ContactSection />
    </div>
  );
}
