import sendAxiosRequest from "../utils/sendAxiosRequest";
import { RequestMethod } from "../types/index.d";
import { ICard } from "../types/card";
import { getUserToken } from "../utils/getUserToken";

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
