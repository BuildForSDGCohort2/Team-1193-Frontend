import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const signoutUser = {
  type: UserActionTypes.SIGN_OUT_USER,
};
