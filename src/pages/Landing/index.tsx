import Logo from "../../components/Logo";
import Hero from "../../components/Landing/Hero";
import Introduction from "../../components/Landing/Introduction";
import MainConcept from "../../components/Landing/MainConcept";
import HowToUse from "../../components/Landing/HowToUse";
import Footer from "../../components/Footer";
import styles from "./styles.module.scss";

const Landing = () => {
  return (
    <div className={`${styles.bgBlackPrimary} ${styles.fontFancy}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <Hero />
        <Introduction />
        <MainConcept />
        <HowToUse />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
