import { Outlet, Navigate } from "react-router-dom";
import { User } from "../../types";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.scss";

type propTypes = {
  user: User;
};

const ProtectedRoutes = ({ user }: propTypes) => {
  if (!user) {
    return <Navigate to={"/signIn"} />;
  }
  return (
    <div className={styles.flexContainer}>
      <Navbar />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedRoutes;
