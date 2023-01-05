import styles from "./styles.module.scss";
import MyProfile from "../../components/Profile/MyProfile";
import TheirProfile from "../../components/Profile/TheirProfile";
import Books from "../../components/Books";

type Props = {
  isMine?: boolean;
};

const ProfilePage = ({ isMine }: Props) => {
  return (
    <div className={styles.profilePage}>
      <div className={styles.profileWrapper}>
        {isMine ? <MyProfile /> : <TheirProfile />}
      </div>
      <div className={styles.bookWrapper}>
        <Books isMine={isMine} />
      </div>
    </div>
  );
};

export default ProfilePage;
