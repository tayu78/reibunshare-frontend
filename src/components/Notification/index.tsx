import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import Avatar from "../Avatar";
import { INotification } from "../../types/notification";

type Props = {
  notifications: INotification[];
};

const Notification = ({ notifications }: Props) => {
  const navigate = useNavigate();
  const handleAvatarClick = (userId: string) => {
    navigate(`/profile/${userId}`);
  };
  return (
    <>
      {notifications.map((notification) => {
        return (
          <div className={styles.notification}>
            <div className={styles.head}>
              <div
                className={styles.avatarWrapper}
                onClick={() => handleAvatarClick(notification.sendFrom._id!)}
              >
                <Avatar url={notification.sendFrom.img as string} />
              </div>
              <p>{notification.content}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Notification;
