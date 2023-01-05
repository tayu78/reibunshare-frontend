import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

type Props = {
  bookId: string;
  name: string;
  description: string;
};

const BookHeading = ({ bookId, name, description }: Props) => {
  const navigate = useNavigate();
  return (
    <li
      className={styles.bookHeading}
      onClick={() => navigate(`/book/${bookId}`)}
    >
      <p className={styles.bookTitle}>{name}</p>
      <p className={styles.bookDescription}>{description}</p>
    </li>
  );
};

export default BookHeading;
