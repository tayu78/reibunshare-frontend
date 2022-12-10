import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faCircleUser,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
import Logo from "../Logo";
import NavLink from "./NavLink";
import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <ul>
        <NavLink name="Home" icon={faHouse} linkto="/home" />
        <NavLink name="Search" icon={faMagnifyingGlass} linkto="/search" />
        <NavLink name="New Card" icon={faSquarePlus} linkto="/newCard" />
        <NavLink name="Notifications" icon={faBell} linkto="/notifications" />
        <NavLink name="Your Books" icon={faCircleUser} linkto="/profile" />
      </ul>
    </div>
  );
};

export default Navbar;
