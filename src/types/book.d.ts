import { ICard } from "./card";

export interface IBook {
  _id?: string;
  name: string;
  description: string;
  cards?: string[];
}

export enum BOOK_ACTIONS {
  SET_BOOK_NAME = "SET_BOOK_NAME",
  SET_BOOK_DESCRIPTION = "SET_BOOK_DESCRIPTION",
}

export interface SetBookName {
  type: BOOK_ACTIONS.SET_BOOK_NAME;
  payload: {
    name: string;
  };
}
export interface SetBookDescription {
  type: BOOK_ACTIONS.SET_BOOK_DESCRIPTION;
  payload: {
    description: string;
  };
}
export type bookActionType = SetBookName | SetBookDescription;
