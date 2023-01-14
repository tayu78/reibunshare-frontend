import { ChangeEvent } from "react";
import {
  PROFILE_ACTIONS,
  SetProfileImg,
  SetEmail,
  SetUsername,
} from "../../../types/user.d";

export const setProfileImgAction = (file: File): SetProfileImg => {
  return {
    type: PROFILE_ACTIONS.SET_PROFILE_IMG,
    payload: {
      img: file,
    },
  };
};
export const setEmailAction = (e: ChangeEvent<HTMLInputElement>): SetEmail => {
  return {
    type: PROFILE_ACTIONS.SET_EMAIL,
    payload: {
      email: e.target.value,
    },
  };
};

export const setUsernameAction = (
  e: ChangeEvent<HTMLInputElement>
): SetUsername => {
  return {
    type: PROFILE_ACTIONS.SET_USER_NAME,
    payload: {
      username: e.target.value,
    },
  };
};
