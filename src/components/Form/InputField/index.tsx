import { ChangeEvent } from "react";
import styles from "./styles.module.scss";

type Props = {
  placeholder: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
  textarea?: boolean;
  errorMessages?: string[];
  onBlur?: () => void;
  type?: string;
  label?: string;
};

const InputField = ({
  placeholder,
  handleChange,
  value,
  textarea,
  errorMessages,
  onBlur,
  type = "text",
  label,
}: Props) => {
  return (
    <>
      {label && <label className={styles.label}>{label}</label>}

      {textarea ? (
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
      ) : (
        <div>
          <input
            type={type}
            className={`${styles.input} ${
              errorMessages && errorMessages?.length > 0 && styles.error
            }`}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
            onBlur={onBlur}
          />
          <ul>
            {errorMessages &&
              errorMessages?.length > 0 &&
              errorMessages.map((msg, index) => {
                return (
                  <li key={index} className={styles.error}>
                    {msg}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </>
  );
};

export default InputField;
