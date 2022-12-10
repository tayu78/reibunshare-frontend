import styles from "./styles.module.scss";
import Profile from "../../components/Profile";
import Books from "../../components/Books";

const ProfilePage = () => {
  return (
    <div className={styles.profilePage}>
      <div className={styles.profileWrapper}>
        <Profile />
      </div>
      <div className={styles.bookWrapper}>
        <Books />
      </div>
    </div>
  );
};

export default ProfilePage;
