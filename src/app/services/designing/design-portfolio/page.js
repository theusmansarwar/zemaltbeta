import ServicePageFeatured from "@/Components/ServicePageFeatured/ServicePageFeatured";
import styles from "./page.module.css";
import PortfolioCards from "@/Components/portfolioCards/PortfolioCards";
export default function Page() {
  const featuredData = {
    title: "SEO",
    spanTitle: "SERVICES",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. ",
  };
  return (
    <div className={styles.Home}>
      <ServicePageFeatured data={featuredData} />
      <PortfolioCards />
    </div>
  );
}
