import { ReactNode } from "react";
import styles from "./styles.module.scss";
type Props = {
  label: string;
};

const GreenBtn = ({ label }: Props) => {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn}>{label}</button>
    </div>
  );
};

export default GreenBtn;
