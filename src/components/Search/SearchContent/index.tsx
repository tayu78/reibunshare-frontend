import { IUser } from "../../../types/user.d";
import { CardWithUser } from "../../../types/card.d";
import { SEARCH_TAB_NAME } from "../../../types/index.d";
import styles from "./styles.module.scss";
import ProfileHeader from "../../Profile/ProfileHeader";
import Card from "../../Card";

type Props = {
  datas: IUser[] | CardWithUser[] | null;
  tab: SEARCH_TAB_NAME;
};

const SearchContent = ({ datas, tab }: Props) => {
  return (
    <ul className={styles.contents}>
      {datas?.map((data) => {
        switch (tab) {
          case SEARCH_TAB_NAME.USER:
            return <ProfileHeader key={data._id} user={data as IUser} />;
          case SEARCH_TAB_NAME.TAG:
            const {
              _id,
              phrase,
              usages,
              description,
              meaning,
              tags,
              user,
              likes,
            } = data as CardWithUser;
            return (
              <Card
                key={_id!}
                cardId={_id!}
                phrase={phrase}
                usages={usages}
                description={description}
                meaning={meaning}
                tags={tags}
                user={user}
                likes={likes!}
                isSmallScreen
              />
            );
        }
      })}
    </ul>
  );
};

export default SearchContent;
