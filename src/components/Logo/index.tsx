import styles from "./styles.module.scss";
import LogoImg from "../../assets/images/logo.svg";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={LogoImg} alt="logo" />
      <span>
        <span className={styles.fontGreen}>Reibun</span>Share
      </span>
    </div>
  );
};

export default Logo;
