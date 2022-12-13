import { useEffect, useState } from "react";
import { useMediaPredicate } from "react-media-hook";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import Avatar from "../Avatar";
import CardField from "./CardField";
import styles from "./styles.module.scss";
import { cardData } from "../../mockDatas/card";
import { SMALL_SCREEN } from "../../constants/global";

const Card = () => {
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
          <Avatar />
        </div>
        <p>Yuya Satake</p>
      </div>
      <div className={styles.cardFields}>
        <CardField label="Phrase" />
        <CardField label="Usage" />
        {smallScreen && !showDetail && (
          <p onClick={() => setShowDetail((prev) => !prev)}>show more...</p>
        )}
        {(showDetail || !smallScreen) && (
          <>
            <CardField label="Description" />
            <CardField label="Meaning" />
            <CardField label="Tags" />
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
