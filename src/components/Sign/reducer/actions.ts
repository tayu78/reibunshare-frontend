import { ChangeEvent } from "react";
import {
  SIGN_ACTIONS,
  SetAccountName,
  SetUsername,
  SetEmail,
  SetPassword,
  SetConfirmPassword,
} from "../../../types/auth.d";

export const setAccountNameAction = (
  e: ChangeEvent<HTMLInputElement>
): SetAccountName => {
  return {
    type: SIGN_ACTIONS.SET_ACCOUNT_NAME,
    payload: {
      accountName: e.target.value,
    },
  };
};
export const setUsernameAction = (
  e: ChangeEvent<HTMLInputElement>
): SetUsername => {
  return {
    type: SIGN_ACTIONS.SET_USERNAME,
    payload: {
      username: e.target.value,
    },
  };
};
export const setEmailAction = (e: ChangeEvent<HTMLInputElement>): SetEmail => {
  return {
    type: SIGN_ACTIONS.SET_EMAIL,
    payload: {
      email: e.target.value,
    },
  };
};
export const setPasswordAction = (
  e: ChangeEvent<HTMLInputElement>
): SetPassword => {
  return {
    type: SIGN_ACTIONS.SET_PASSWORD,
    payload: {
      password: e.target.value,
    },
  };
};
export const setConfirmPasswordAction = (
  e: ChangeEvent<HTMLInputElement>
): SetConfirmPassword => {
  return {
    type: SIGN_ACTIONS.SET_CONFIRM_PASSWORD,
    payload: {
      confirmPassword: e.target.value,
    },
  };
};
