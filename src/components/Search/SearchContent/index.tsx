import { IUser } from "../../../types/user.d";
import { CardWithUser } from "../../../types/card.d";
import { SEARCH_TAB_NAME } from "../../../types/index.d";
import styles from "./styles.module.scss";
import ProfileHeader from "../../Profile/ProfileHeader";
import Card from "../../Card";

type Props = {
  datas: IUser[] | CardWithUser[];
  tab: SEARCH_TAB_NAME;
};

const SearchContent = ({ datas, tab }: Props) => {
  return (
    <ul className={styles.contents}>
      {datas.length > 0 ? (
        datas.map((data) => {
          if (tab === SEARCH_TAB_NAME.USER) {
            return (
              <div className={styles.profile}>
                <ProfileHeader key={data._id} user={data as IUser} />
              </div>
            );
          } else if (
            tab === SEARCH_TAB_NAME.PHRASE ||
            tab === SEARCH_TAB_NAME.TAG
          ) {
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
        })
      ) : (
        <p className={styles.notfoundText}>
          Result not found with this key word.
        </p>
      )}
    </ul>
  );
};

export default SearchContent;
