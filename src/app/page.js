import styles from "./page.module.css";
import Featured from "@/Components/FeaturedSection/Featured";
import OutBox from "@/Components/OutOfBox/OutBox";
import Faq from "@/Components/FAQ/Faq";
import TestimonialSection from "@/Components/Testimonial/TestimonialSection";
import SeoSection from "@/Components/SeoSection/SeoSection";
import TestimonialSlider2 from "@/Components/TestimonialSlider/TestimonialSlider2";
import BlogSection from "@/Components/BlogSection/BlogSection";
import PortfolioSection from "@/Components/Portfolios/PortfolioSection";
import StrategicMarketing from "@/Components/StrategicMarketing/StrategicMarketing";
import ImpactOfMarketing from "@/Components/ImpactOfMarketing/ImpactOfMarketing";
import HomeServices from "@/Components/HomeServices/HomeServices";
import ReasonsToChoose from "@/Components/ReasonsToChoose/ReasonsToChoose";
import ContactSection from "@/Components/ContactSection/ContactSection";

export const metadata = {
  title: "Zemalt | Digital Marketing, SEO & Web Design Services.",
  description:
    "Zemalt offers expert SEO, content writing, web design, UI/UX, and digital marketing services to build brands, boost rankings, and drive business growth",
};
const reasonsData = {
  heading: "Why Zemalt’s Digital Marketing Delivers High-Performance Results",
  steps: [
    {
      question: "Proven Methods Strengthening Online Visibility",
      answer:
        "Structured digital marketing with clear intent and reliable data boosts visibility. Targeted SEO services guide campaigns toward measurable reach across competitive markets. Strategic keyword planning and smart adjustments maintain stable performance across platforms. Focused content marketing increases engagement and retention. Zemalt uses refined methods to push projects toward consistent online growth. Every step emphasizes clarity, efficiency, and long-term results without unnecessary complexity or confusion.",
    },
    {
      question: "Creative Execution Elevating Brand Presence",
      answer:
        "Strategic design and clear messaging enhance brand impact across digital channels. Social media marketing thrives through deep audience understanding and creative ideas. Visual coherence strengthens recognition, while PPC elements support engagement. Zemalt ensures polished concepts help brands stand out in crowded feeds. Every campaign balances fresh value, effective communication, and long-term appeal. Users experience clarity, relevance, and impact without feeling overwhelmed.",
    },
    {
      question: "Data Intelligence Guiding Smarter Decisions",
      answer:
        "Accurate metrics and structured evaluation improve every stage of digital marketing. Insights highlight performance patterns and eliminate wasted effort. SEO, PPC, and social media data guide campaigns toward measurable results. Strategic analysis supports higher conversions and sustained campaign stability. Zemalt uses trend analysis to make decisions predictable, efficient, and aligned with long-term digital goals.",
    },
    {
      question: "Industry Experience Delivering Reliable Results",
      answer:
        "Zemalt applies expertise in SEO, web development, and social media marketing to maintain accuracy and efficiency. Tailored strategies improve reach, outperform competitors, and provide stability. Structured processes ensure campaigns remain organized, predictable, and refined. Complex challenges are simplified into actionable steps, guaranteeing reliable results and long-term growth. Every project benefits from tested methods and proven industry insight.",
    },
  ],
};

const marketingContent = {
  title: "Strategic Digital Marketing That Builds Trust and Accelerates Growth",
  description: `
      <p>
        What drives real growth for a modern business? A clear strategy, consistent execution, and a digital presence that truly represents your vision. Our team guides you like a skilled digital marketing strategist who understands your goals and turns them into actionable steps. You get targeted campaigns, clean messaging, and social media management and content creation services that help your audience trust your brand.
      </p>
      <p>
        Business needs a partner that plans each step with focus. You receive support that fosters clarity, enhances visibility, and yields measurable results. A dedicated digital marketing agency for small businesses provides you with structure and long-term direction that many marketing companies often fail to deliver.
      </p>
      <p>
       What happens when your brand needs something specific? You get answers, guidance, and solutions tailored to your next move. If you want a strategy session or need help with a project, reach out anytime. Our team is ready to support your growth, one strong step at a time.
      </p>
    `,
};

const Homepagefaqs = {
  title: "FAQs",
  description:
    "Zemalt is a leading digital marketing agency. We provide clear answers and practical guidance. Our clients receive dedicated support backed by proven expertise.",
  items: [
    {
      question: "Why hire a digital marketing agency?",
      answer:
        "A professional agency brings experience, tools, and strategy. Zemalt ensures efficient campaigns, optimized SEO, and well-designed ad campaigns. ",
    },
    {
      question: "Will online marketing really help my small or local business?",
      answer:
        "Yes. Targeted digital marketing services, local SEO, and online advertising campaigns help small businesses attract nearby customers and increase brand visibility in their area.",
    },
    {
      question: "Do I need prior experience to benefit from online marketing?",
      answer:
        "No experience is required. Expert guidance in social media marketing, SEO, and online advertising ensures campaigns run smoothly and deliver measurable results.",
    },
    {
      question: "How do I know if my campaigns are working?",
      answer:
        "You can track performance using clear reports on website traffic, leads, conversions, and engagement metrics. Analytics help refine digital marketing strategies for better results.",
    },
    {
      question: "How do I choose the right digital strategy for my business?",
      answer:
        "Start by defining clear goals and understanding your audience. Tailored SEO, PPC, and social media marketing strategies help reach the right people and achieve measurable outcomes.",
    },
    {
      question: "Why invest in digital marketing now?",
      answer:
        "Zemalt helps brands gain visibility, build authority, and attract loyal customers through SEO, social media, and ad campaigns. Early action secures long-term growth.",
    },
  ],
};
const blogHeaderData = {
  heading:
    "Discover Expert Marketing Strategies and Insights – Visit Our Blog Today",
  description:
    "Explore our blog for expert strategies, SEO tips, and marketing insights that help you drive traffic, increase engagement, and grow your business.Discover step- by - step guides, industry trends, and proven techniques to boost your online presence.Our posts simplify complex marketing concepts, giving you practical ideas to implement immediately.Stay informed, learn from real examples, and take your digital strategy to the next level.",
};
export default function Home() {
  return (
    <div className={styles.Home}>
      <Featured />
      <OutBox />
      <StrategicMarketing data={marketingContent} />
      <ImpactOfMarketing />
      <HomeServices />
      <TestimonialSection />
      <PortfolioSection />
      <ReasonsToChoose data={reasonsData} />
      <TestimonialSlider2 />
      <BlogSection data={blogHeaderData} />
      <Faq faqs={Homepagefaqs} />
      <SeoSection />
      <ContactSection />
    </div>
  );
}
