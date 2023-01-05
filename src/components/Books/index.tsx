import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import useAppSelector from "../../hooks/useAppSelector";
import BookHeading from "./BookHeading";
import { getUserBooks } from "../../services/bookServices";
import { useParams } from "react-router-dom";
import { IBook } from "../../types/book";

type Props = {
  isMine?: boolean;
};

const MyBooks = ({ isMine }: Props) => {
  const { userInfo } = useAppSelector((store) => store.user);
  const [isLoading, setIsLoading] = useState(false);
  const [theirBooks, setTheirBooks] = useState<IBook[]>([]);
  const { userId } = useParams();

  useEffect(() => {
    if (isMine) return;
    setIsLoading(true);

    getUserBooks(userId!).then(({ data, resultType }) => {
      if ((resultType = "success")) setTheirBooks(data.books);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log("therBOok", theirBooks);
  }, [theirBooks]);

  return (
    <>
      <div className={styles.head}>
        <p>{isMine ? "Your" : "Their"} Books</p>
        <FontAwesomeIcon icon={faSwatchbook} />
      </div>
      {isMine &&
        userInfo.userBooks?.map(({ _id, name, description }) => {
          return (
            <div key={_id}>
              <BookHeading
                bookId={_id!}
                name={name}
                description={description}
              />
            </div>
          );
        })}
      {isLoading && "Loading..."}
      {
        <>
          {!isMine && theirBooks.length === 0 ? (
            <p>User does not have books yet</p>
          ) : (
            theirBooks.map(({ _id, name, description }) => {
              return (
                <div key={_id}>
                  <BookHeading
                    bookId={_id!}
                    name={name}
                    description={description}
                  />
                </div>
              );
            })
          )}
        </>
      }
    </>
  );
};

export default MyBooks;
