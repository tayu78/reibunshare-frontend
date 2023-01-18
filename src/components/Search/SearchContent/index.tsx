import { IUser } from "../../../types/user";
import styles from "./styles.module.scss";
import ProfileHeader from "../../Profile/ProfileHeader";

type Props = {
  datas: IUser[] | null;
};

const SearchContent = ({ datas }: Props) => {
  return (
    <ul className={styles.contents}>
      {datas?.map((data, index) => {
        return <ProfileHeader key={data._id} user={data} />;
      })}
    </ul>
  );
};

export default SearchContent;
