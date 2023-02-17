import styles from "./styles.module.scss";

type Props = {
  label: string;
};

const Btn = ({ label }: Props) => {
  return <button className={styles.btn}>{label}</button>;
};

export default Btn;
