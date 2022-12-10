import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";
import Logo from "../../components/Logo";
import Footer from "../../components/Footer";

const PublicRoutes = () => {
  return (
    <>
      <div
        className={`${styles.bgBlackPrimary} ${styles.fontFancy} ${styles.container}`}
      >
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default PublicRoutes;
