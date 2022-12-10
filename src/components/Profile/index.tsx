import styles from "./styles.module.scss";
import Avatar from "../Avatar";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <div className={styles.avatarWrapper}>
          <Avatar />
        </div>
        <div>
          <div className={styles.userInfo}>
            <p className={styles.accountName}>@yuya_satake_78</p>
            <p className={styles.userName}>Yuya Satake</p>
            <div className={styles.follow}>
              <p>following: 50</p>
              <p>follower: 50</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonWrappper}>
        <button>Update Profile</button>
      </div>
    </div>
  );
};

export default Profile;
