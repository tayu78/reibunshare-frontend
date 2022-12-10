import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./styles.module.scss";

type propsTypes = {
  name: string;
  linkto: string;
  icon: IconProp;
};

const NavLink = ({ name, icon, linkto }: propsTypes) => {
  return (
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
  );
};

export default NavLink;
