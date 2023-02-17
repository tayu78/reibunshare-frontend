import { useEffect, useState, FormEvent } from "react";
import { useParams } from "react-router-dom";
import useAppSelector from "../../hooks/useAppSelector";
import Card from "../../components/Card";
import Avatar from "../../components/Avatar";
import { getCard, getComments, makeComment } from "../../services/cardServices";
import { CardWithUser, IComment } from "../../types/card";
import styles from "./styles.module.scss";
import InputField from "../../components/Form/InputField";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import Btn from "../../components/Btn";
import Comment from "../../components/Comment";

const CardPage = () => {
  const { cardId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [card, setCard] = useState<CardWithUser | null>(null);
  const [comments, setComments] = useState<IComment[] | null>(null);
  const [content, setContent] = useState("");
  const { userInfo } = useAppSelector((store) => store.user);

  useEffect(() => {
    if (!cardId) {
      return;
    }

    getCard(cardId).then(({ data }) => {
      setCard(data.card);
      setIsLoading(false);
    });

    getComments(cardId).then(({ data }) => {
      setComments(data.comments);
    });
  }, [cardId]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!cardId) return;
    await makeComment(cardId, content);
    const { data } = await getComments(cardId);

    setComments(data.comments);
    setContent("");
  };

  return (
    <div>
      {isLoading && "Loading..."}
      {card && (
        <>
          <Card
            cardId={card._id!}
            phrase={card.phrase}
            usages={card.usages}
            description={card.description}
            meaning={card.meaning}
            tags={card.tags}
            user={card.user}
            likes={card.likes!}
          />
          <form onSubmit={handleSubmit}>
            <div className={styles.commentInputField}>
              <div className={styles.avatarWrapper}>
                <Avatar url={userInfo.img as string} />
              </div>
              <InputField
                textarea
                placeholder="Leave comment"
                handleChange={(e) => {
                  setContent(e.target.value);
                }}
                value={content}
              />

              <Btn label="Comment" />
            </div>
          </form>

          {comments &&
            comments.map((comment) => {
              return <Comment comment={comment} />;
            })}
        </>
      )}
    </div>
  );
};

export default CardPage;
