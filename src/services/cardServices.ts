import sendAxiosRequest from "../utils/sendAxiosRequest";
import { RequestMethod } from "../types/index.d";
import { ICard } from "../types/card.d";
import { getUserToken } from "../utils/getUserToken";

export const getCards = async () => {
  const options = {
    method: RequestMethod.GET,
    url: `${import.meta.env.VITE_SERVER_URL}/api/v1/cards/`,
  };
  return await sendAxiosRequest(options);
};

export const getCardsOfFollowingUser = async () => {
  const options = {
    method: RequestMethod.GET,
    url: `${
      import.meta.env.VITE_SERVER_URL
    }/api/v1/cards/getCardsOfFollowingUser`,
    headers: {
      authorization: `Bearer ${getUserToken()}`,
    },
  };
  return await sendAxiosRequest(options);
};

export const getCard = async (cardId: string) => {
  const options = {
    method: RequestMethod.GET,
    url: `${import.meta.env.VITE_SERVER_URL}/api/v1/cards/${cardId}`,
    headers: {
      authorization: `Bearer ${getUserToken()}`,
    },
  };
  return await sendAxiosRequest(options);
};

export const makeCard = async ({
  phrase,
  usages,
  description,
  meaning,
  tags,
}: ICard) => {
  const options = {
    method: RequestMethod.POST,
    url: `${import.meta.env.VITE_SERVER_URL}/api/v1/cards/`,
    data: {
      phrase,
      usages,
      description,
      meaning,
      tags,
    },
    headers: {
      authorization: `Bearer ${getUserToken()}`,
    },
  };

  return await sendAxiosRequest(options);
};

export const manageLikes = async (cardId: string, isLike: boolean) => {
  const options = {
    method: RequestMethod.PUT,
    url: `${import.meta.env.VITE_SERVER_URL}/api/v1/cards/likes/${cardId}`,
    params: {
      isLike,
    },
    headers: {
      authorization: `Bearer ${getUserToken()}`,
    },
  };

  return await sendAxiosRequest(options);
};

export const getBookCards = async (cardIds: string[]) => {
  const options = {
    method: RequestMethod.POST,
    url: `${import.meta.env.VITE_SERVER_URL}/api/v1/cards/getBookCards`,
    data: { cardIds },
    headers: {
      authorization: `Bearer ${getUserToken()}`,
    },
  };

  return await sendAxiosRequest(options);
};

export const searchCardByTag = async (keyword: string) => {
  const options = {
    method: RequestMethod.GET,
    url: `${import.meta.env.VITE_SERVER_URL}/api/v1/cards/search`,
    params: {
      keyword,
    },
  };
  return await sendAxiosRequest(options);
};

export const getComments = async (cardId: string) => {
  const options = {
    method: RequestMethod.GET,
    url: `${import.meta.env.VITE_SERVER_URL}/api/v1/cards/comments/${cardId}`,
    headers: {
      authorization: `Bearer ${getUserToken()}`,
    },
  };

  return await sendAxiosRequest(options);
};

export const makeComment = async (cardId: string, content: string) => {
  const options = {
    method: RequestMethod.POST,
    url: `${import.meta.env.VITE_SERVER_URL}/api/v1/cards/comments/${cardId}`,
    data: {
      content,
    },
    headers: {
      authorization: `Bearer ${getUserToken()}`,
    },
  };
  return await sendAxiosRequest(options);
};
