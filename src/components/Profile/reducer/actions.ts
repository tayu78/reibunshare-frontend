import { ChangeEvent } from "react";
import { PROFILE_ACTIONS, SetProfileImg } from "../../../types/user.d";

export const setProfileImgAction = (file: File): SetProfileImg => {
  return {
    type: PROFILE_ACTIONS.SET_PROFILE_IMG,
    payload: {
      img: file,
    },
  };
};
