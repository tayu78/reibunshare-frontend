import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import useAppSelector from "../../hooks/useAppSelector";
import BookHeading from "./BookHeading";

const Books = () => {
  const { userInfo } = useAppSelector((store) => store.user);

  return (
    <>
      <div className={styles.head}>
        <p>Your Books</p>
        <FontAwesomeIcon icon={faSwatchbook} />
      </div>
      {userInfo.userBooks?.map(({ _id, name, description }) => {
        return (
          <div key={_id}>
            <BookHeading bookId={_id!} name={name} description={description} />
          </div>
        );
      })}
    </>
  );
};

export default Books;
