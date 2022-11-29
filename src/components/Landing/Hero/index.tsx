import Logo from "../../Logo";
import styles from "./styles.module.scss";
import chillingImg from "../../../assets/images/chilling.svg";

const Hero = () => {
  return (
    <header>
      <div>
        <h1>
          Find the <span className={styles.fontGreen}>native expressions</span>{" "}
          and Make your life <span className={styles.fontGreen}>easier</span>
        </h1>
        <div className={styles.btn}>Get Started</div>
      </div>

      <img src={chillingImg} alt="chilling" />
    </header>
  );
};

export default Hero;
