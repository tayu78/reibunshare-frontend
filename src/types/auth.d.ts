export enum SIGN_ACTIONS {
  SET_ACCOUNT_NAME = "SET_ACCOUNT_NAME",
  SET_USERNAME = "SET_USERNAME",
  SET_EMAIL = "SET_EMAIL",
  SET_PASSWORD = "SET_PASSWORD",
  SET_CONFIRM_PASSWORD = "SET_CONFIRM_PASSWORD",
}

export interface SetAccountName {
  type: SIGN_ACTIONS.SET_ACCOUNT_NAME;
  payload: {
    accountName: string;
  };
}
export interface SetUsername {
  type: SIGN_ACTIONS.SET_USERNAME;
  payload: {
    username: string;
  };
}
export interface SetEmail {
  type: SIGN_ACTIONS.SET_EMAIL;
  payload: {
    email: string;
  };
}
export interface SetPassword {
  type: SIGN_ACTIONS.SET_PASSWORD;
  payload: {
    password: string;
  };
}
export interface SetConfirmPassword {
  type: SIGN_ACTIONS.SET_CONFIRM_PASSWORD;
  payload: {
    confirmPassword: string;
  };
}

export type SignActionType =
  | SetAccountName
  | SetUsername
  | SetEmail
  | SetPassword
  | SetConfirmPassword;
