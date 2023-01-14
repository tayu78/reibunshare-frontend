import { ProfileActionType, PROFILE_ACTIONS } from "../../../types/user.d";

const profileReducer = (
  state: { img: File; email: string; username: string },
  action: ProfileActionType
) => {
  switch (action.type) {
    case PROFILE_ACTIONS.SET_PROFILE_IMG:
      return {
        ...state,
        img: action.payload.img,
      };
    case PROFILE_ACTIONS.SET_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    case PROFILE_ACTIONS.SET_USER_NAME:
      return {
        ...state,
        username: action.payload.username,
      };
    default:
      return state;
  }
};

export default profileReducer;
