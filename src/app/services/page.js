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
import Faq from "@/Components/FAQ/Faq";
import BussinessGrowth from "@/Components/BussinessGrowth/BussinessGrowth";
import StrategicMarketing from "@/Components/StrategicMarketing/StrategicMarketing";
import ReasonsToChoose from "@/Components/ReasonsToChoose/ReasonsToChoose";

export const metadata = {
  title: "Grow Your Brand Online with Zemalt | Digital Branding Solutions",
  description:
    "Grow your business online with Zemalt. Our digital marketing strategist delivers SEO, content, social media, web design, UI/UX & Google Ads services.",
};
 const marketingContent = [
    {
      type: "heading",
      text: "How Can Digital Campaigns Drive Business Growth?",
    },
    {
      type: "paragraph",
      text: "Campaigns designed by an expert digital marketing strategist transform online presence into measurable business growth. Brands from startups to multi-location companies expand their visibility, attract qualified leads, and increase engagement. Zemalt develops actionable strategies that improve website conversions, strengthen brand credibility, and generate tangible revenue. Every initiative emphasizes performance, ensuring campaigns deliver real results and scalable growth in competitive markets.",
    },
    {
      type: "paragraph",
      text: "Intelligent planning leverages insights from a trusted digital marketing agency for small businesses and incorporates social media management and content creation services to enhance audience reach. Measurable outcomes include increased conversions, stronger online presence, and improved ROI. Experienced marketing companies know how to optimize every step, from traffic generation to engagement tracking. Each campaign supports long-term success, helping brands convert interest into loyal customers while securing a competitive advantage in the digital landscape.",
    },
   
  ];
  const reasonsData = {
  heading: "Why Businesses Choose Zemalt for Digital Growth?",
  highlightWord: "Choose Zemalt",
  steps: [
    {
      question: "Targeted Traffic That Converts",
      answer:
        "Zemalt designs campaigns that drive qualified website traffic and attract audiences most likely to convert. Using social media marketing agency techniques and precise targeting, each strategy increases online visibility, engagement, and brand recognition while maximizing performance across competitive digital markets."
    },
    {
      question: "Measurable Lead Generation & Growth",
      answer:
        "Focused strategies generate qualified leads and measurable revenue for businesses of all sizes. By leveraging insights from a digital marketing strategist, Zemalt ensures every campaign produces actionable results, strengthens credibility, and fuels sustainable growth."
    },
    {
      question: "Results-Focused ROI",
      answer:
        "Zemalt prioritizes profitable digital campaigns that improve ROI efficiently. Each initiative optimizes conversions, reduces wasted spend, and applies internet marketing services to deliver long-term performance. Transparent tracking ensures measurable outcomes, helping brands scale confidently."
    },
    {
      question: "Scalable Strategies for Every Brand",
      answer:
        "Campaigns are built for growth, enabling businesses to scale effectively. Zemalt combines digital advertising agency insights with strategic planning to expand reach, enhance engagement, and maintain a strong online presence, ensuring brands stay competitive in evolving markets."
    }
  ]
};
const blogHeaderData = {
  heading: "Digital Marketing & SEO Services That Boost Reach & Increase Sales",
  description:
    "Trust skilled experts to guide brand growth. The team uses proven methods. They improve search rankings. They attract qualified visitors. It is important to know they support steady traffic flow to each client's website.",
};
const Servicespagefaqs = {
  title: "FAQs",
  description:
    "Zemalt is a leading digital marketing agency. We provide clear answers and practical guidance. Our clients receive dedicated support backed by proven expertise.",
  items: [
    {
      question:
        "How do I know which service my business needs first?",
      answer:
        "Start by reviewing your business goals and online performance. Prioritizing areas like SEO services, website design, or digital marketing campaigns ensures faster growth and measurable results.",
    },
    {
      question: "Can I grow my audience without running ads?",
      answer:
        "Yes. Optimized SEO content, engaging social media marketing, and a strong digital presence can attract traffic and build visibility even without paid campaigns.",
    },
    {
      question: "How long does it take to see results from digital services?",
      answer:
        "Some updates, like website improvements or UI/UX design, show quickly, while SEO optimization and online advertising campaigns may take a few weeks for consistent growth.",
    },
    {
      question: "Do I need all digital services at once?",
      answer:
        "No. You can start with high-priority areas such as SEO strategy, content marketing, or Google Ads management. A phased approach delivers results without overwhelming your resources.",
    },
    {
      question: "How will I know if the services are working for my business?",
      answer:
        "You receive clear reports on website traffic, lead generation, search engine rankings, and social media engagement. Insights help refine your digital marketing strategy for better ROI.",
    },
    {
      question: "Can smaller businesses benefit from full-service digital marketing?",
      answer:
        "Absolutely. Tailored digital marketing solutions and local SEO services focus on high-impact areas, helping small businesses attract leads, increase visibility, and grow efficiently.",
    },
    {
      question: "How do Zemalt services help me attract the right customers?",
      answer:
        "Targeted strategies across SEO, content writing, social media ads, and Google Ads campaigns reach the audience actively searching for your products or services.",
    },
  ],
};
export default function Page() {
  return (
    <div className={styles.Home}>
      <Servicefeatured />
     <BussinessGrowth/>
     <StrategicMarketing data={marketingContent}/>
      <Services />
      <ReasonsToChoose data={reasonsData}/>
      <HowDifferent />
      <BlogSection data={blogHeaderData} />
      <Realworld />
      <DriveRevenue />
      <GloballyTrusted />
      <TestimonialSlider2 />
      <Faq faqs={Servicespagefaqs} />
      <LastBottom />
    </div>
  );
}
