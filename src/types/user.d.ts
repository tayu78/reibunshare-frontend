import { SetUsername } from "./auth";

export interface IUser {
  _id?: string;
  accountName: string;
  username: string;
  email: string;
  password: string;
  img?: File | string;
  follower?: string[];
  following?: string[];
}

export enum PROFILE_ACTIONS {
  SET_PROFILE_IMG = "SET_PROFILE_IMG",
  SET_EMAIL = "SET_EMAIL",
  SET_USER_NAME = "SET_USER_NAME",
}

export interface SetProfileImg {
  type: PROFILE_ACTIONS.SET_PROFILE_IMG;
  payload: {
    img: File;
  };
}

export interface SetEmail {
  type: PROFILE_ACTIONS.SET_EMAIL;
  payload: {
    email: string;
  };
}

export interface SetUsername {
  type: PROFILE_ACTIONS.SET_USER_NAME;
  payload: {
    username: string;
  };
}

export type ProfileActionType = setProfileImg | SetEmail | SetUsername;
