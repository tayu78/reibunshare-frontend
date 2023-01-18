import sendAxiosRequest from "../utils/sendAxiosRequest";
import { RequestMethod } from "../types/index.d";
import { getUserToken } from "../utils/getUserToken";

export const getUserInfo = async () => {
  const options = {
    method: RequestMethod.GET,
    url: `${import.meta.env.VITE_SERVER_URL}/api/v1/users/me`,
    headers: {
      authorization: `Bearer ${getUserToken()}`,
    },
  };
  return await sendAxiosRequest(options);
};

export const getOtherUserInfo = async (userId: string) => {
  const options = {
    method: RequestMethod.GET,
    url: `${import.meta.env.VITE_SERVER_URL}/api/v1/users/them/${userId}`,
  };
  return await sendAxiosRequest(options);
};

export const manageFollowing = async (userId: string, isFollowing: boolean) => {
  const options = {
    method: RequestMethod.PUT,
    url: `${
      import.meta.env.VITE_SERVER_URL
    }/api/v1/users/${userId}/manageFollowing`,
    params: {
      isFollowing,
    },
    headers: {
      authorization: `Bearer ${getUserToken()}`,
    },
  };
  return await sendAxiosRequest(options);
};

export const updateProfileInfo = async (data: {
  email?: string;
  username?: string;
}) => {
  const options = {
    method: RequestMethod.PUT,
    url: `${import.meta.env.VITE_SERVER_URL}/api/v1/users/updateProfileInfo`,
    data,
    headers: {
      authorization: `Bearer ${getUserToken()}`,
    },
  };
  return await sendAxiosRequest(options);
};

export const uploadProfileImg = async (formData: FormData) => {
  const options = {
    method: RequestMethod.PUT,
    url: `${import.meta.env.VITE_SERVER_URL}/api/v1/users/updateProfileImg`,
    data: formData,
    headers: {
      authorization: `Bearer ${getUserToken()}`,
      "Content-Type": "multipart/form-data",
    },
  };
  return await sendAxiosRequest(options);
};

export const searchUser = async (keyword: string) => {
  const options = {
    method: RequestMethod.GET,
    url: `${import.meta.env.VITE_SERVER_URL}/api/v1/users/search`,
    params: {
      keyword,
    },
  };
  return await sendAxiosRequest(options);
};
