import { IUser } from "../../../types/user";
import { SignActionType, SIGN_ACTIONS } from "../../../types/auth.d";

const signReducer = (
  state: IUser & { confirmPassword: string },
  action: SignActionType
): IUser & { confirmPassword: string } => {
  switch (action.type) {
    case SIGN_ACTIONS.SET_ACCOUNT_NAME:
      return {
        ...state,
        accountName: action.payload.accountName,
      };
    case SIGN_ACTIONS.SET_USERNAME:
      return {
        ...state,
        username: action.payload.username,
      };
    case SIGN_ACTIONS.SET_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    case SIGN_ACTIONS.SET_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };
    case SIGN_ACTIONS.SET_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.payload.confirmPassword,
      };
  }
};

export default signReducer;
