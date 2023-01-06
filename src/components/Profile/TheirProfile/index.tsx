import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import {
  getOtherUserInfo,
  manageFollowing,
} from "../../../services/userServices";
import useAppSelector from "../../../hooks/useAppSelector";
import useDetectFirstRender from "../../../hooks/useDetectFirstRender";
import ProfileContent from "../ProfileContent";
import { IUser } from "../../../types/user";

const TheirProfile = () => {
  const { userId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);
  const { userInfo } = useAppSelector((store) => store.user);
  const [isFollowing, setIsFollowing] = useState(
    userInfo.following!.includes(userId!)
  );

  const isFirstRender = useDetectFirstRender();

  useEffect(() => {
    getOtherUserInfo(userId!).then(({ data, resultType }) => {
      if (resultType === "success") setUser(data.user);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (isFirstRender) return;
    manageFollowing(userId!, isFollowing);
  }, [isFollowing]);

  return (
    <div>
      {isLoading && "Loading...."}
      {user && (
        <ProfileContent
          user={user}
          Button={() => {
            return (
              <button onClick={() => setIsFollowing((prev) => !prev)}>
                {isFollowing ? "Following" : "Follow"}
              </button>
            );
          }}
        />
      )}
    </div>
  );
};

export default TheirProfile;
