import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./styles.module.scss";
import useModal from "../../../hooks/useModal";
import NewCard from "../../Card/NewCard";

type propsTypes = {
  name: string;
  linkto: string;
  icon: IconProp;
};

const NavLink = ({ name, icon, linkto }: propsTypes) => {
  const { Modal, openModal, closeModal } = useModal();
  return (
    <>
      {name === "New Card" ? (
        <>
          <Modal>
            <NewCard closeModal={closeModal} />
          </Modal>
          <div onClick={openModal} className={styles.navLink}>
            <FontAwesomeIcon icon={icon} />
            <span>{name}</span>
          </div>
        </>
      ) : (
        <Link
          to={linkto}
          className={styles.navLink}
          // style={({ isActive }) => {
          //   console.log(isActive);
          //   return { color: "pink" };
          // }}
        >
          <FontAwesomeIcon icon={icon} />
          <span>{name}</span>
        </Link>
      )}
    </>
  );
};

export default NavLink;
