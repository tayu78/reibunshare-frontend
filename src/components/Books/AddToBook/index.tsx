import { useState, useReducer, ChangeEvent } from "react";
import styles from "./styles.module.scss";
import bookReducer from "../reducer";
import {
  setBookNameAction,
  setBookDescriptionAction,
} from "../reducer/actions";
import InputField from "../../Form/InputField";

const AddToBook = () => {
  const initialState = {
    bookName: "",
    bookDescription: "",
  };

  const [willAddNewBook, setWillAddNewBook] = useState(false);
  const [bookState, dispatch] = useReducer(bookReducer, initialState);

  return (
    <div className={styles.addToBook}>
      <h1>Add to Book</h1>
      <div
        onClick={() => setWillAddNewBook(true)}
        className={styles.addNewBook}
      >
        + new book
      </div>
      <p>Which book do you want to add to ?</p>
      {willAddNewBook && (
        <div className={styles.willAddNewBook}>
          <div>
            <p>Please add new book name</p>
            <InputField
              placeholder="book name"
              handleChange={(e) =>
                dispatch(setBookNameAction(e as ChangeEvent<HTMLInputElement>))
              }
              value={bookState.bookName}
            ></InputField>
          </div>
          <div className={styles.willAddNewBookField}>
            <p>Please add description for new book</p>
            <InputField
              placeholder="book description"
              handleChange={(e) =>
                dispatch(
                  setBookDescriptionAction(
                    e as ChangeEvent<HTMLTextAreaElement>
                  )
                )
              }
              value={bookState.bookDescription}
              textarea
            ></InputField>
          </div>
          <div className={styles.addBookBtnContainer}>
            <button>add book</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToBook;
