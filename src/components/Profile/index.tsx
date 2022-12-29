import styles from "./styles.module.scss";
import Avatar from "../Avatar";
import ProfileEdit from "./ProfileEdit";
import useAppSelector from "../../hooks/useAppSelector";
import useModal from "../../hooks/useModal";

const Profile = () => {
  const { Modal, openModal, closeModal } = useModal();
  const {
    userInfo: { accountName, username, follower, following, img },
  } = useAppSelector((store) => store.user);
  return (
    <>
      <Modal>
        <ProfileEdit />
      </Modal>
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
          <button onClick={() => openModal()}>Update Profile</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
