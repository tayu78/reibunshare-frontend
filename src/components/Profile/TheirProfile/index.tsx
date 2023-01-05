import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import { getOtherUserInfo } from "../../../services/userServices";
import ProfileContent from "../ProfileContent";
import { IUser } from "../../../types/user";

const TheirProfile = () => {
  const { userId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
    getOtherUserInfo(userId!).then(({ data, resultType }) => {
      if (resultType === "success") setUser(data.user);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading && "Loading...."}
      {user && (
        <ProfileContent
          user={user}
          Button={() => {
            return <button>Folllow</button>;
          }}
        />
      )}
    </div>
  );
};

export default TheirProfile;
