import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import useAppSelector from "../../../hooks/useAppSelector";
import Avatar from "../../Avatar";
import { IUser } from "../../../types/user";

type Props = {
  user: IUser;
};
const ProfileHeader = ({ user }: Props) => {
  const navigate = useNavigate();
  const { userInfo } = useAppSelector((store) => store.user);
  const handleMoveToProfile = () => {
    if (user._id === userInfo._id) return navigate("/profile/me");
    navigate(`/profile/${user._id}`);
  };
  return (
    <div className={styles.userInfo} onClick={handleMoveToProfile}>
      <div className={styles.avatarWrapper}>
        <Avatar url={user.img as string} />
      </div>

      <p>{user.accountName}</p>
    </div>
  );
};

export default ProfileHeader;
