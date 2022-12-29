import { useEffect, useState } from "react";
import { useMediaPredicate } from "react-media-hook";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import Avatar from "../Avatar";
import CardField from "./CardField";
import styles from "./styles.module.scss";
import { SMALL_SCREEN } from "../../constants/global";
import { Usage } from "../../types/card";
import Usages from "./Usages";
import Tags from "./Tags";

type Props = {
  phrase: string;
  usages: Usage[];
  description: string;
  meaning: string;
  tags: { name: string }[];
  user: { img: string; accountName: string };
};

const Card = ({ phrase, usages, description, meaning, tags, user }: Props) => {
  const smallScreen = useMediaPredicate(`(max-width: ${SMALL_SCREEN}px)`);

  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    if (smallScreen) {
      setShowDetail(false);
    }
  }, [smallScreen]);

  return (
    <div className={styles.card}>
      <div className={styles.userInfo}>
        <div className={styles.avatarWrapper}>
          <Avatar url={user.img} />
        </div>
        <p>{user.accountName}</p>
      </div>
      <div className={styles.cardFields}>
        <CardField label="Phrase">{phrase}</CardField>

        <div>
          <p className={styles.label}>Usages</p>
          <Usages usages={usages} />
        </div>

        {smallScreen && !showDetail && (
          <p onClick={() => setShowDetail((prev) => !prev)}>show more...</p>
        )}
        {(showDetail || !smallScreen) && (
          <>
            {description && (
              <CardField label="Description">{description}</CardField>
            )}

            <CardField label="Meaning">{meaning}</CardField>
            {tags.length > 0 && (
              <div>
                <p className={styles.label}>Tags</p>
                <Tags tags={tags} />
              </div>
            )}
          </>
        )}
      </div>

      <div className={styles.icons}>
        <FavoriteBorderOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
        <BookmarkBorderOutlinedIcon />
      </div>
    </div>
  );
};

export default Card;
