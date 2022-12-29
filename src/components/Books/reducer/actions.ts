import { ChangeEvent } from "react";
import {
  SetBookName,
  SetBookDescription,
  BOOK_ACTIONS,
} from "../../../types/book.d";

export const setBookNameAction = (
  e: ChangeEvent<HTMLInputElement>
): SetBookName => {
  return {
    type: BOOK_ACTIONS.SET_BOOK_NAME,
    payload: {
      name: e.target.value,
    },
  };
};

export const setBookDescriptionAction = (
  e: ChangeEvent<HTMLTextAreaElement>
): SetBookDescription => {
  return {
    type: BOOK_ACTIONS.SET_BOOK_DESCRIPTION,
    payload: {
      description: e.target.value,
    },
  };
};
