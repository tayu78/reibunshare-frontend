import LogoImg from "../../assets/images/logo.svg";
import styles from "./styles.module.scss";

type Props = {
  url: string | undefined;
};

const Avatar = ({ url }: Props) => {
  return <img src={url ? url : LogoImg} className={styles.avatar} />;
};

export default Avatar;
