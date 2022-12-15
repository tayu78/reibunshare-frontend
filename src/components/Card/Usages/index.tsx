import { Usage } from "../../../types/card";
import { SPEAKER_A } from "../../../constants/card";
import styles from "./styles.module.scss";

type Props = {
  usages: Usage[];
};

const Usages = ({ usages }: Props) => {
  return (
    <ul className={styles.usages}>
      {usages.map(({ speaker, sentence }, index) => {
        return (
          <li
            key={index}
            className={`  ${styles.usageSentence} ${
              speaker === SPEAKER_A ? styles.left : styles.right
            }`}
          >
            {sentence}
          </li>
        );
      })}
    </ul>
  );
};

export default Usages;
