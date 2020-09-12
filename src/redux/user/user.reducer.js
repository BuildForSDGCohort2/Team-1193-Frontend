import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: undefined,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.EMAIL_SIGN_IN_SUCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case UserActionTypes.SIGN_OUT_USER:
      return { ...state, currentUser: null, errorMessage: null };
    default:
      return state;
  }
};

export default userReducer;
