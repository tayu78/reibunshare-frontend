import styles from "./styles.module.scss";
import Avatar from "../Avatar";
import useAppSelector from "../../hooks/useAppSelector";

const Profile = () => {
  const {
    userInfo: { accountName, username, follower, following, img },
  } = useAppSelector((store) => store.user);
  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <div className={styles.avatarWrapper}>
          <Avatar url={img} />
        </div>
        <div>
          <div className={styles.userInfo}>
            <p className={styles.accountName}>@{accountName}</p>
            <p className={styles.userName}>{username}</p>
            <div className={styles.follow}>
              <p>following: {following?.length}</p>
              <p>follower: {follower?.length}</p>
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
