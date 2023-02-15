import sendAxiosRequest from "../utils/sendAxiosRequest";
import { RequestMethod } from "../types/index.d";
import { getUserToken } from "../utils/getUserToken";

export const getUserNotifications = async () => {
  const options = {
    method: RequestMethod.GET,
    url: `${import.meta.env.VITE_SERVER_URL}/api/v1/notifications/`,
    headers: {
      authorization: `Bearer ${getUserToken()}`,
    },
  };
  return await sendAxiosRequest(options);
};
