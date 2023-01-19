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
};

const InputField = ({
  placeholder,
  handleChange,
  value,
  textarea,
  errorMessages,
  onBlur,
}: Props) => {
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
        <div>
          <input
            type="text"
            className={`${styles.input} ${
              errorMessages && errorMessages?.length > 0 && styles.error
            }`}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
            onBlur={onBlur}
          />
          {errorMessages &&
            errorMessages?.length > 0 &&
            errorMessages.map((msg, index) => {
              return (
                <ul>
                  <li key={index} className={styles.error}>
                    {msg}
                  </li>
                </ul>
              );
            })}
        </div>
      )}
    </>
  );
};

export default InputField;
