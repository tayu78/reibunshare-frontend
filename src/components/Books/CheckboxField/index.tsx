import { useEffect, useState } from "react";
import { IBook } from "../../../types/book";
import { addToBook } from "../../../services/bookServices";
import useDetectFirstRender from "../../../hooks/useDetectFirstRender";

type Props = {
  book: IBook;
  cardId: string;
};

const CheckboxField = ({ book, cardId }: Props) => {
  const [checked, setChecked] = useState(book.cards?.includes(cardId));
  const isFirstRender = useDetectFirstRender();

  useEffect(() => {
    if (isFirstRender) return;
    addToBook(book._id!, cardId, checked!);
  }, [checked]);

  return (
    <>
      <div>
        <input
          type="checkbox"
          id={book.name}
          name={book.name}
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
        />
        <label htmlFor={book.name}>{book.name}</label>
      </div>
    </>
  );
};

export default CheckboxField;
