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
}

export interface SetProfileImg {
  type: PROFILE_ACTIONS.SET_PROFILE_IMG;
  payload: {
    img: File;
  };
}

export type ProfileActionType = setProfileImg;
