import { ChangeEvent } from "react";
import styles from "./styles.module.scss";

type Props = {
  placeholder: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
  textarea?: boolean;
};

const InputField = ({ placeholder, handleChange, value, textarea }: Props) => {
  return (
    <>
      {textarea ? (
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
      ) : (
        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
      )}
    </>
  );
};

export default InputField;
