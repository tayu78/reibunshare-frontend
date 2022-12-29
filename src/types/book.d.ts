export interface IBook {
  bookName: string;
  bookDescription: string;
}

export enum BOOK_ACTIONS {
  SET_BOOK_NAME = "SET_BOOK_NAME",
  SET_BOOK_DESCRIPTION = "SET_BOOK_DESCRIPTION",
}

export interface SetBookName {
  type: BOOK_ACTIONS.SET_BOOK_NAME;
  payload: {
    bookName: string;
  };
}
export interface SetBookDescription {
  type: BOOK_ACTIONS.SET_BOOK_DESCRIPTION;
  payload: {
    bookDescription: string;
  };
}
export type bookActionType = SetBookName | SetBookDescription;
