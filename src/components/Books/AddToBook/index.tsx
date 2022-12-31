import { useState, useReducer, ChangeEvent, Fragment } from "react";
import styles from "./styles.module.scss";
import bookReducer from "../reducer";
import {
  setBookNameAction,
  setBookDescriptionAction,
} from "../reducer/actions";
import { newBook, addToBook } from "../../../services/bookServices";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import InputField from "../../Form/InputField";
import { getUserInformation } from "../../../redux/features/user/userSlice";

type Props = {
  cardId: string;
};

const AddToBook = ({ cardId }: Props) => {
  const initialState = {
    name: "",
    description: "",
  };

  const [willAddNewBook, setWillAddNewBook] = useState(false);
  const [bookState, dispatch] = useReducer(bookReducer, initialState);

  const appDispatch = useAppDispatch();
  const { userInfo } = useAppSelector((store) => store.user);

  const handleAddNewBook = () => {
    const { name, description } = bookState;

    newBook({ name, description, cardId }).then(() => {
      appDispatch(getUserInformation());
    });
    setWillAddNewBook(false);
  };

  const handleAddToBook = async (
    bookId: string,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { data } = await addToBook(bookId, cardId ,e.target.checked);
    console.log("data: ", data);
  };

  return (
    <div className={styles.addToBook}>
      <h1>Add to Book</h1>
      <div
        onClick={() => setWillAddNewBook(true)}
        className={styles.addNewBook}
      >
        + new book
      </div>
      <legend>Which book do you want to add to ?</legend>

      <ul>
        {userInfo.userBooks.map((book) => {
          return (
            <Fragment key={book._id}>
              <div>
                <input
                  type="checkbox"
                  id={book.name}
                  name={book.name}
                  onChange={(e) => handleAddToBook(book._id as string, e)}
                />
                <label htmlFor={book.name}>{book.name}</label>
              </div>
            </Fragment>
          );
        })}
      </ul>
      {willAddNewBook && (
        <div className={styles.willAddNewBook}>
          <div>
            <p>Please add new book name</p>
            <InputField
              placeholder="book name"
              handleChange={(e) =>
                dispatch(setBookNameAction(e as ChangeEvent<HTMLInputElement>))
              }
              value={bookState.name}
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
              value={bookState.description}
              textarea
            ></InputField>
          </div>
          <div className={styles.addBookBtnContainer}>
            <button onClick={handleAddNewBook}>add book</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToBook;
