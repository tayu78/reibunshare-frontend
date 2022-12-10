import styles from "./styles.module.scss";

const Book = () => {
  return (
    <li className={styles.book}>
      <p className={styles.bookTitle}>Book1</p>
      <p className={styles.bookDescription}>This is the book about Japanese</p>
    </li>
  );
};

export default Book;
