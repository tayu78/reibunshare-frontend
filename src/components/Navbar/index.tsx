import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell, faCircleUser } from "@fortawesome/free-regular-svg-icons";
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
        <NavLink name="Home" icon={faHouse} />
        <NavLink name="Search" icon={faMagnifyingGlass} />
        <NavLink name="Notification" icon={faBell} />
        <NavLink name="Your Books" icon={faCircleUser} />
      </ul>
    </div>
  );
};

export default Navbar;
