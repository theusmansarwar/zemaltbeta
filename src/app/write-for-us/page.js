
import Faq from "@/Components/FAQ/Faq";
import FeaturedBlogs from "@/Components/FeaturedBlogs/FeaturedBlogs";
import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";
import GuestPostGuide from "@/Components/WriteForUs/GuestPostGuide";
import GuestPostSubmission from "@/Components/WriteForUs/GuestPostSubmission";
import OurFormat from "@/Components/WriteForUs/OurFormat";
import WriteFeatured from "@/Components/WriteForUs/WriteFeatured";


export const metadata = {
  title: "Write for us",
  description:
    "Write for Us at Zemalt — share your digital marketing, SEO, and social media insights with a platform that values expertise and real results.",
};

 const writefaqs = {
    title: "FAQs",
    description:
      "You may still have a few questions before sending your article. These answers give you clear details.",
    items: [
      {
        question:
          "Can I send more than one article to Zemalt?",
        answer:
          "Yes, you can send more articles if each one follows our rules. Every article is checked on its own, and quality must stay the same for all.",
      },
      {
        question: "Do I need writing experience to publish on Zemalt?",
        answer:
          "No, Zemalt accepts both new and experienced writers. What matters is simple writing, clear ideas, and content that helps readers.",
      },
      {
        question: "Will my name be shown in the article?",
        answer:
          "Yes. Every approved article on Zemalt is published under your name. You also receive a short author bio and a link readers can use to know more about you.",
      },
      {
        question: "Can I ask Zemalt to change my article later?",
        answer:
          "Yes. You can request changes if your article needs updates. Zemalt reviews the request first to keep the article correct and useful.",
      },
      {
        question: "What if Zemalt does not approve my article?",
        answer:
          "If your article is not approved, Zemalt will share feedback. You can improve the article and send it again. Only content that is useful and correct is published.",
      },
     
    ],
  };
const page = () => {
  return (
    <div className="PageBg">
      <WriteFeatured/>
      <OurFormat/>
      <GuestPostGuide/>
      <GuestPostSubmission/>
       <Faq faqs={writefaqs} />
       <FeaturedBlogs />
    </div>
  );
};

export default page;
