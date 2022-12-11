import { useState, useCallback, ReactNode, MouseEvent } from "react";
import ModalComponent from "../components/Modal";

type ModalProps = {
  children: ReactNode;
};

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback((e: MouseEvent<HTMLElement>) => {
    if (e.currentTarget !== e.target) return;
    setIsOpen(false);
  }, []);

  const Modal = ({ children }: ModalProps) => {
    return isOpen ? (
      <ModalComponent closeModal={closeModal}>{children}</ModalComponent>
    ) : (
      <></>
    );
  };

  return { Modal, openModal, closeModal };
};

export default useModal;
