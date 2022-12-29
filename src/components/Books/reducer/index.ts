import { IBook, BOOK_ACTIONS, bookActionType } from "../../../types/book.d";

const bookReducer = (state: IBook, action: bookActionType) => {
  switch (action.type) {
    case BOOK_ACTIONS.SET_BOOK_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    case BOOK_ACTIONS.SET_BOOK_DESCRIPTION:
      return {
        ...state,
        description: action.payload.description,
      };
    default:
      return state;
  }
};

export default bookReducer;
