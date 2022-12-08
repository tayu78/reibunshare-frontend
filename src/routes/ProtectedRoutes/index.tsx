import { Outlet, Navigate } from "react-router-dom";
import { User } from "../../types/user";
import Navbar from "../../components/Navbar";
import Avatar from "../../components/Avatar";
import styles from "./styles.module.scss";

type Props = {
  user: User;
};

const ProtectedRoutes = ({ user }: Props) => {
  if (!user) {
    return <Navigate to={"/signIn"} />;
  }
  return (
    <div className={styles.flexContainer}>
      <Navbar />
      {/* <Avatar /> */}
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedRoutes;