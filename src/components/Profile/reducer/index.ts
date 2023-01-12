import { ProfileActionType, PROFILE_ACTIONS } from "../../../types/user.d";

const profileReducer = (state: { img: File }, action: ProfileActionType) => {
  switch (action.type) {
    case PROFILE_ACTIONS.SET_PROFILE_IMG:
      return {
        ...state,
        img: action.payload.img,
      };
    default:
      return state;
  }
};

export default profileReducer;
