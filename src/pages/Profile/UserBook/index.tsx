import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import useAppSelector from "../../../hooks/useAppSelector";
import Book from "../../../components/Books/Book";

const UserBook = () => {
  const { bookId } = useParams();
  const { userInfo } = useAppSelector((store) => store.user);
  const [book, _] = useState(
    userInfo.userBooks.filter((b) => b._id === bookId)[0]
  );

  return (
    <div className={styles.userBooks}>
      <h1>{book.name}</h1>
      <Book cardIds={book.cards!} />
    </div>
  );
};

export default UserBook;
