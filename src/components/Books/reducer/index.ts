import { IBook, BOOK_ACTIONS, bookActionType } from "../../../types/book.d";

const bookReducer = (state: IBook, action: bookActionType) => {
  switch (action.type) {
    case BOOK_ACTIONS.SET_BOOK_NAME:
      return {
        ...state,
        bookName: action.payload.bookName,
      };
    case BOOK_ACTIONS.SET_BOOK_DESCRIPTION:
      return {
        ...state,
        bookDescription: action.payload.bookDescription,
      };
    default:
      return state;
  }
};

export default bookReducer;
