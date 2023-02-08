import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import * as socketIO from "socket.io-client";
import Navbar from "../../components/Navbar";
import Avatar from "../../components/Avatar";
import styles from "./styles.module.scss";
import useAppSelector from "../../hooks/useAppSelector";
import { SocketContext } from "../../contexts/socketContext";
import Msg from "../../components/Msg";

const socket = socketIO.connect(import.meta.env.VITE_SERVER_URL);

const ProtectedRoutes = () => {
  const { isAuthenticated, userInfo } = useAppSelector((store) => store.user);
  const [notification, setNotification] = useState("");

  if (!isAuthenticated) {
    return <Navigate to={"/signup"} />;
  }

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("activeUser", { userId: userInfo._id, socketId: socket.id });

      socket.on("notification", (notification) => {
        console.log("notification: ", notification);
        setNotification(notification.content);
      });
    });
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>
      <div className={styles.flexContainer}>
        <Navbar />
        {/* <Avatar /> */}
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
      {notification && (
        <div className={styles.notificationMsg}>
          <Msg status="success" msg={notification} />
        </div>
      )}
    </SocketContext.Provider>
  );
};

export default ProtectedRoutes;
