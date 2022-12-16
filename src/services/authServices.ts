import sendAxiosRequest from "../utils/sendAxiosRequest";
import { IUser } from "../types/user";
import { RequestMethod } from "../types/index.d";

export const signUp = async ({
  email,
  username,
  accountName,
  password,
}: IUser) => {
  const options = {
    method: RequestMethod.POST,
    url: `${import.meta.env.VITE_SERVER_URL}/api/v1/auth/signup`,
    data: {
      email,
      username,
      accountName,
      password,
    },
  };
  return await sendAxiosRequest(options);
};

export const login = async ({ email, password }: IUser) => {
  const options = {
    method: RequestMethod.POST,
    url: `${import.meta.env.VITE_SERVER_URL}/api/v1/auth/login`,
    data: {
      email,
      password,
    },
  };
  return await sendAxiosRequest(options);
};
