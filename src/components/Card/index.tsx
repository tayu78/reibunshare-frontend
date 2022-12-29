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
import { manageLikes } from "../../services/cardServices";

type Props = {
  cardId: string;
  phrase: string;
  usages: Usage[];
  description: string;
  meaning: string;
  tags: { name: string }[];
  user: { _id: string; img: string; accountName: string };
  likes: string[];
};

const Card = ({
  cardId,
  phrase,
  usages,
  description,
  meaning,
  tags,
  user,
  likes,
}: Props) => {
  const smallScreen = useMediaPredicate(`(max-width: ${SMALL_SCREEN}px)`);

  const [showDetail, setShowDetail] = useState(false);
  const [isLike, setIsLike] = useState(likes.includes(user._id));

  useEffect(() => {
    if (smallScreen) {
      setShowDetail(false);
    }
  }, [smallScreen]);

  useEffect(() => {
    manageLikes(cardId, isLike);
  }, [isLike]);

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
        <div
          className={`${styles.icon} ${isLike && styles.like}`}
          onClick={() => setIsLike((prev) => !prev)}
        >
          <FavoriteBorderOutlinedIcon />
        </div>
        <div className={styles.icon}>
          <ChatBubbleOutlineOutlinedIcon />
        </div>
        <div className={styles.icon}>
          <BookmarkBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Card;
