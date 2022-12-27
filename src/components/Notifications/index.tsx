import styles from "./styles.module.scss";
import Avatar from "../Avatar";

const Notifications = () => {
  return (
    <div className={styles.notifications}>
      <h1>Notifications</h1>
      <div className={styles.notification}>
        <div className={styles.head}>
          <div className={styles.avatarWrapper}>
            <Avatar url={""} />
          </div>
          <p>@yuya just followed you</p>
        </div>
        <section>some content here</section>
      </div>
    </div>
  );
};

export default Notifications;
