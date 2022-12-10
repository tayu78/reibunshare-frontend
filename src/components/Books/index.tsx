import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import Book from "./Book";

const Books = () => {
  return (
    <>
      <div className={styles.head}>
        <p>Your Books</p>
        <FontAwesomeIcon icon={faSwatchbook} />
      </div>
      {/* list of Book is suppose to be here */}
      <Book />
      <Book />
      <Book />
      <Book />
    </>
  );
};

export default Books;
