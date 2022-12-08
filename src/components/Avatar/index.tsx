import LogoImg from "../../assets/images/logo.svg";
import styles from "./styles.module.scss";

const Avatar = () => {
  return <img src={LogoImg} className={styles.avatar} />;
};

export default Avatar;
