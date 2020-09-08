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

export const emailSignUpStart = (userCredentials) => ({
  type: UserActionTypes.EMAIL_SIGN_UP_START,
  payload: userCredentials,
});

export const emailSignUpSuccess = (user) => ({
  type: UserActionTypes.EMAIL_SIGN_UP_SUCCESS,
  payload: user,
});

export const emailSignUpFailure = (errorMessage) => ({
  type: UserActionTypes.EMAIL_SIGN_UP_FAILURE,
  payload: errorMessage,
});
