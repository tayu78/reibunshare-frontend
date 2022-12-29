import { ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  label: string;
  children?: ReactNode;
};

const CardField = ({ label, children }: Props) => {
  return (
    <div>
      <p className={styles.label}>{label}</p>
      <div className={styles.cardField}>{children}</div>
    </div>
  );
};

export default CardField;
