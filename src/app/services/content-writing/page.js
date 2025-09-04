import ServicePage from "@/Components/SERVICEPAGE/ServicePage";
export const metadata = {
  title: "Content Writing Services | Zemalt",
  description:
    "Discover Zemalt's creative services including branding, advertising design, packaging, UI/UX, and more. We deliver clear designs that strengthen your brand identity.",
};

export default function Service() {
  const faqs = {
    title: "FAQs on content writing services",
    description:
      "Strong writing builds trust and makes your message clear. Zemalt helps you connect with readers through content that informs, engages, and converts. You get blog posts, web copy, articles, and more tailored to your goals. Every word is written to reflect your voice and bring results.",
    questions: [
      {
        question: "How does Zemalt maintain quality in writing?",
        answer:
          "Zemalt applies a strict process before delivering the final draft. Every piece goes through editing, proofreading, and client review. The team ensures clarity, short sentences, and accurate messaging.",
      },
      {
        question: "Why should you trust Zemalt for your writing needs?",
        answer:
          "Zemalt builds trust through accuracy, flow, and consistency. Each piece is reviewed to ensure that your message is clear and strong. The team studies your brand and writes in a way that connects with your audience.",
      },
      {
        question: "Why is professional writing important for businesses?",
        answer:
          "Professional writing improves how your brand looks online. Clear and simple text builds trust with customers. Strong content also supports SEO, which drives more traffic to your site.",
      },
      {
        question: "How do good writing services help with SEO?",
        answer:
          "Good writing uses keywords naturally and makes content easy to read. Search engines reward this style with higher rankings. You get more visibility and better chances of reaching new clients.",
      },
      {
        question: "Can writing services improve customer trust?",
        answer:
          "Yes, they can. When your content is clear and professional, customers feel confident about your brand. Simple language helps readers understand your message, which builds long-term trust..",
      },
      {
        question: "What should you expect from a reliable writing company?",
        answer:
          "You should expect clear communication, consistent delivery, and error-free content. A reliable service also respects deadlines and adapts to your brand voice. Quality writing reflects the professionalism of your business.",
      },
    ],
  };

  const featuredData = {
    title: "Content Writing",
    spanTitle: "SERVICES",
    description:
      "Words decide how people see your business. Strong writing builds trust, attracts attention, and creates action. You need content that speaks to your audience and matches your goals. Zemalt delivers services that focus on clarity, reach, and growth.",
  };
  const cardData = [
    {
      title: "SEO Loaded Articles",
      slug: "seo-loaded-articles",
      type: "para",
      items: [
        "Search engines reward articles that carry depth, accuracy, and the right keywords. You gain consistent traffic and better rankings through optimized writing. Zemalt creates content that explains your ideas clearly and keeps readers engaged. Strong articles also build authority for your brand.",
      ],
    },
    {
      title: "Copywriting",
      slug: "copywriting",
      type:"para",
      items: [
        "Every business needs words that persuade and move people to act. The right copy grabs attention and pushes buyers to make decisions. Zemalt provides clear and sharp copy that connects with your audience. You get results that support your brand growth.",
      ],
    },
    {
      title: "Product Descriptions",
      slug: "product-descriptions",
      type:"para",
      items: [
        "Your product needs more than a list of features. Buyers want words that give confidence and remove doubt. Zemalt writes descriptions that improve visibility, show value, and drive sales. You gain content that ranks higher and sells faster.",
      ],
    },
    {
      title: "Thin Content",
      slug: "thin-content",
      type:"para",
      items: [
        "Websites lose trust when pages carry weak or shallow text. Strong content builds authority and improves user experience. Zemalt turns thin pages into valuable assets that meet search standards. You gain a better ranking and lasting results.",
      ],
    },
    {
      title: "Website Design Structure Content",
      slug: "structure-content",
      type:"para",
      items: [
        "A design looks incomplete without content that guides users across every page. Clear writing supports flow, answers questions, and shapes navigation. Zemalt creates structured content that fits your design and strengthens your website presence. You provide visitors with clarity and trust.",
      ],
    },
  ];

  const imageData = {
    heading:
      "Bright minds shape clear paths and act fast. Fresh ideas spark growth. True freedom drives success.",
    image: "/bigidea.png",
  };
  const whyService = {
    title: "Why Good Design Shapes Every Brand",
    description: [
      "Zemalt is a leading digital agency trusted by brands. You get proven methods that raise search rank fast. Our team builds strategies that push results higher.",
      "Team Zemalt acts as a partners for your business goals. You gain access to tailored plans that secure a stronger reach. Our focus stays on driving measurable success. We deliver solutions that keep your audience connected.",
      "Give you tools that make progress steady. Our approach targets practical outcomes that strengthen presence. Clients rely on us to achieve consistent gains. Results bring better awareness that leads to sustainable growth.",
    ],
    image: "/why-designing.png",
  };
  const calculaterBottomData = {
    heading: "Why Choose Zemalt for Professional Writing Services?",
    description:
      "Zemalt delivers content that speaks directly to your audience. Every project is handled with care, clarity, and creativity. From website copy to blogs, our writing team ensures that your message stands out and drives action. You get words that reflect your brand and bring real results. Get powerful content written by Zemalt experts. Make your brand voice stronger",
  };
  return (
    <ServicePage
      featuredData={featuredData}
      cardData={cardData}
      imageData={imageData}
      Faqs={faqs}
      CalulaterBottom={calculaterBottomData}
      whyService={whyService}
    />
  );
}
