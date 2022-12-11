import { ReactNode, MouseEvent } from "react";
import styles from "./styles.module.scss";

type Props = {
  closeModal: (e: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
};

const Modal = ({ closeModal, children }: Props) => {
  return (
    <div className={styles.modal} onClick={closeModal}>
      <div className={styles.modalContent}>
        <div className={styles.modalCloseBtn} onClick={closeModal}>
          x
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
