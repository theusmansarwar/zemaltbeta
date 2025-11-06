
import TermsAndConditions from "../../Components/ExtraPages/TermsAndConditions";
import styles from "./page.module.css";
export const metadata = {
  title: "Terms and Conditions",
  description:
    "Zemalt Terms and Conditions – Learn how we operate, deliver services, handle payments, and protect your rights while using our website.",
};

const page = () => {
  return (
    <div className={styles.termsPage}>
      <div className={styles.termsLayout}>
        <TermsAndConditions />
      </div>
    </div>
  );
};

export default page;
