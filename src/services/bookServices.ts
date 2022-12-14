import sendAxiosRequest from "../utils/sendAxiosRequest";
import { RequestMethod } from "../types/index.d";
import { IBook } from "../types/book.d";
import { getUserToken } from "../utils/getUserToken";

export const newBook = async ({
  name,
  description,
  cardId,
}: IBook & { cardId: string }) => {
  const options = {
    method: RequestMethod.POST,
    url: `${import.meta.env.VITE_SERVER_URL}/api/v1/books/`,
    data: {
      bookName: name,
      bookDescription: description,
      cardId,
    },
    headers: {
      authorization: `Bearer ${getUserToken()}`,
    },
  };
  return await sendAxiosRequest(options);
};

export const addToBook = async (
  bookId: string,
  cardId: string,
  isAdding: boolean
) => {
  const options = {
    method: RequestMethod.PUT,
    url: `${import.meta.env.VITE_SERVER_URL}/api/v1/books/add/${bookId}`,
    params: {
      isAdding,
    },
    data: {
      cardId,
    },
    headers: {
      authorization: `Bearer ${getUserToken()}`,
    },
  };

  return await sendAxiosRequest(options);
};

export const getUserBooks = async (userId: string) => {
  const options = {
    method: RequestMethod.GET,
    url: `${
      import.meta.env.VITE_SERVER_URL
    }/api/v1/books/getUserBooks/${userId}`,
  };
  return await sendAxiosRequest(options);
};

export const getBook = async (bookId: string) => {
  const options = {
    method: RequestMethod.GET,
    url: `${import.meta.env.VITE_SERVER_URL}/api/v1/books/${bookId}`,
  };
  return await sendAxiosRequest(options);
};
