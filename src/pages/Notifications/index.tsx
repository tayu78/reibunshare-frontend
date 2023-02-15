import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Avatar from "../../components/Avatar";
import { INotification } from "../../types/notification";
import { getUserNotifications } from "../../services/notificationServices";
import Notification from "../../components/Notification";

const Notifications = () => {
  const [notifications, setNotifications] = useState<INotification[]>([]);
  useEffect(() => {
    console.log("notification");
    getUserNotifications().then(({ data }) => {
      console.log("data: ", data);
      setNotifications(data.notifications);
    });
  }, []);
  return (
    <div className={styles.notifications}>
      <h1>Notifications</h1>
      <Notification notifications={notifications} />
    </div>
  );
};

export default Notifications;
