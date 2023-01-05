import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import Book from "../../../components/Books/Book";
import { IBook } from "../../../types/book";
import { getBook } from "../../../services/bookServices";

const UserBook = () => {
  const { bookId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [book, setBook] = useState<IBook | null>(null);

  useEffect(() => {
    getBook(bookId!).then(({ data, resultType }) => {
      if (resultType === "success") setBook(data.book);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading && "Loading..."}
      {book && (
        <div className={styles.userBooks}>
          <h1>{book.name}</h1>
          <Book cardIds={book.cards!} />
        </div>
      )}
    </>
  );
};

export default UserBook;
