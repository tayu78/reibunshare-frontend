import { Usage } from "../../../types/card";
import { SPEAKER_A } from "../../../constants/card";
import styles from "./styles.module.scss";

type Props = {
  usages: Usage[];
};

const Usages = ({ usages }: Props) => {
  return (
    <ul>
      {usages.map(({ speaker, message }) => {
        const className = speaker === SPEAKER_A ? styles.left : styles.right;
        return <li className={className}>{message}</li>;
      })}
    </ul>
  );
};

export default Usages;
