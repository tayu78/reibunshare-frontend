import { ElementType } from "react";
import styles from "./styles.module.scss";
import Avatar from "../../Avatar";
import { IUser } from "../../../types/user";

type Props = {
  user: IUser;
  Button: ElementType;
};

const ProfileContent = ({ user, Button }: Props) => {
  const { accountName, username, follower, following, img } = user;
  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <div className={styles.avatarWrapper}>
          <Avatar url={img as string} />
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
          <div className={styles.buttonWrappper}>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
