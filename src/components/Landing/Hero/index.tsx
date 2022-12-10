import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import chillingImg from "../../../assets/images/chilling.svg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div>
        <h1>
          Find the <span className={styles.fontGreen}>native expressions</span>{" "}
          and Make your life <span className={styles.fontGreen}>easier</span>
        </h1>
        <div className={styles.btn} onClick={() => navigate("/signup")}>
          Get Started
        </div>
      </div>

      <img src={chillingImg} alt="chilling" />
    </header>
  );
};

export default Hero;
