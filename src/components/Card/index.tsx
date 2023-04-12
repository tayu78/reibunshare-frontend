import { useEffect, useState } from "react";
import { useMediaPredicate } from "react-media-hook";
import { useNavigate } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CardField from "./CardField";
import Tags from "./Tags";
import Usages from "./Usages";
import AddToBook from "../Books/AddToBook";
import styles from "./styles.module.scss";
import { SMALL_SCREEN } from "../../constants/global";
import { Usage } from "../../types/card";
import { manageLikes } from "../../services/cardServices";
import useModal from "../../hooks/useModal";
import useAppDispatch from "../../hooks/useAppDispatch";
import { getUserInformation } from "../../redux/features/user/userSlice";
import ProfileHeader from "../Profile/ProfileHeader";
import { IUser } from "../../types/user";
import useAppSelector from "../../hooks/useAppSelector";
import useDetectFirstRender from "../../hooks/useDetectFirstRender";

type Props = {
  cardId: string;
  phrase: string;
  usages: Usage[];
  description: string;
  meaning: string;
  tags: { name: string }[];
  user: IUser;
  likes: string[];
  isSmallScreen?: boolean;
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
  isSmallScreen,
}: Props) => {
  const smallScreen = isSmallScreen
    ? true
    : useMediaPredicate(`(max-width: ${SMALL_SCREEN}px)`);

  const { userInfo } = useAppSelector((store) => store.user);
  const isFirstRender = useDetectFirstRender();

  const [showDetail, setShowDetail] = useState(false);
  const [isLike, setIsLike] = useState(likes.includes(userInfo._id!));

  const { Modal, openModal, isOpen } = useModal();
  const appDispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (smallScreen) {
      setShowDetail(false);
    }
  }, [smallScreen]);

  useEffect(() => {
    if (isFirstRender) return;
    manageLikes(cardId, isLike);
  }, [isLike]);

  useEffect(() => {
    if (isOpen) return;
    appDispatch(getUserInformation());
  }, [isOpen]);

  return (
    <>
      <Modal>
        <AddToBook cardId={cardId} />
      </Modal>
      <div className={`${styles.card} ${smallScreen && styles.smallScreen}`}>
        <ProfileHeader user={user} />

        <CardField label="Phrase">{phrase}</CardField>

        <div>
          <p className={styles.label}>Usages</p>
          <Usages usages={usages} />
        </div>

        {smallScreen && !showDetail && (
          <p
            className={styles.showMore}
            onClick={() => setShowDetail((prev) => !prev)}
          >
            show more...
          </p>
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

        <div className={styles.icons}>
          <div
            className={`${styles.icon} ${isLike && styles.like}`}
            onClick={() => setIsLike((prev) => !prev)}
          >
            <FavoriteBorderOutlinedIcon />
            <span>{likes.length}</span>
          </div>
          <div
            className={styles.icon}
            onClick={() => navigate(`/card/${cardId}`)}
          >
            <ChatBubbleOutlineOutlinedIcon />
          </div>
          <div className={styles.icon} onClick={() => openModal()}>
            <BookmarkBorderOutlinedIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
