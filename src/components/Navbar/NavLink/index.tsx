import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./styles.module.scss";

type propsTypes = {
  name: string;
  icon: IconProp;
};

const NavLink = ({ name, icon }: propsTypes) => {
  return (
    <li className={styles.navLink}>
      <FontAwesomeIcon icon={icon} />
      <span>{name}</span>
    </li>
  );
};

export default NavLink;
