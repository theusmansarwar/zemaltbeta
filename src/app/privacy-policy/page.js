
import PrivacyPolicy from "../../Components/ExtraPages/PrivacyPolicy";
import styles from "./page.module.css";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Zemalt values your privacy. Learn how we collect, use, and protect your personal data with transparency, security, and respect for your rights.",
};

const page = () => {
  return (
    <div className={styles.privacyPage}>
      <div className={styles.privacyLayout}>
        <PrivacyPolicy/>
      </div>
    </div>
  );
};

export default page;
