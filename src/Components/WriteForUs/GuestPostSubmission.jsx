import "./GuestPostSubmission.css";

const steps = [
  {
    number: 1,
    title: "Share Your Idea",
    text: "You start by sending us your topic or outline. We check if it matches our readers and services. A clear idea makes it easier to move forward. Approval helps you save time and focus on writing content that works.",
  },
  {
    number: 2,
    title: "Write Your Article",
    text: "After approval, you prepare the full article. Make it professional, well-structured, and easy to follow. Use examples and simple words to make the content useful. The article should answer questions and give real value to readers.",
  },
  {
    number: 3,
    title: "Submit Your Draft",
    text: "You send your draft along with your author bio and links. Our team reviews every detail to make sure it is original and clear. We share feedback if needed, so your content improves before publishing.",
  },
  {
    number: 4,
    title: "Get Published",
    text: "Once the article is approved, it goes live on Zemalt. Your work is shared with our readers and promoted through our channels. You gain visibility, credibility, and a strong link between your ideas and our audience.",
  },
];

export default function GuestPostSubmission() {
  return (
    <section className="gp-submission">
      <p className="gp-eyebrow">Our United State</p>

      <h2 className="gp-title">
        <span>Guest Post</span> Submission Process
      </h2>

      <p className="gp-intro">
        The submission process at Zemalt is simple and clear. You share your
        ideas and we guide you step by step. Every submission is checked
        carefully to make sure it meets quality standards. The process helps
        your article reach the right readers in the best way.
      </p>

      <div className="gp-steps-container">
        {steps.map((s) => (
          <article key={s.number} className="gp-step">
            <div className="gp-badge">{s.number}</div>
            <div className="gp-step-caption">{s.title}</div>
            <p className="gp-step-text">{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
