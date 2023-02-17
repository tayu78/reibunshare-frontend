import { IComment } from "../../types/card";
import styles from "./styles.module.scss";
import ProfileHeader from "../Profile/ProfileHeader";

type Props = {
  comment: IComment;
};
const Comment = ({ comment }: Props) => {
  return (
    <div key={comment._id} className={styles.comment}>
      <ProfileHeader user={comment.user} />
      <p className={styles.content}>{comment.content}</p>
    </div>
  );
};

export default Comment;
