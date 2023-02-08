import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import * as socketIO from "socket.io-client";
import Navbar from "../../components/Navbar";
import Avatar from "../../components/Avatar";
import styles from "./styles.module.scss";
import useAppSelector from "../../hooks/useAppSelector";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useAppSelector((store) => store.user);

  if (!isAuthenticated) {
    return <Navigate to={"/signup"} />;
  }

  useEffect(() => {
    const socket = socketIO.connect(import.meta.env.VITE_SERVER_URL);
    // socket.emit("hello", "hello");
  }, []);

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
