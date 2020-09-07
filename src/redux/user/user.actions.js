import { UserActionTypes } from "./user.types";

export const signoutUser = {
  type: UserActionTypes.SIGN_OUT_USER,
};

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const emailSignInSuccess = (user) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCESS,
  payload: user,
});

export const emailSignInFailure = (errorMessage) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: errorMessage,
});
