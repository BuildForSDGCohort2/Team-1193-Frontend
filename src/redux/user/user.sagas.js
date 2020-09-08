import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  emailSignInSuccess,
  emailSignInFailure,
  emailSignUpSuccess,
  emailSignUpFailure,
} from "./user.actions";

import { UserActionTypes } from "./user.types";

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const response = yield fetch(
      "https://intelligent-farm-api.herokuapp.com/signin",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const user = yield response.json();
    if (user.id) {
      yield put(emailSignInSuccess(user));
    } else {
      throw Error;
    }
  } catch (error) {
    yield put(emailSignInFailure(error.message));
  }
}

export function* signUpWithEmail({ payload: { name, email, password } }) {
  try {
    const response = yield fetch(
      "https://intelligent-farm-api.herokuapp.com/register",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );
    const user = yield response.json();
    console.log(user);
    if (user.id) {
      yield put(emailSignUpSuccess(user));
    } else {
      throw Error;
    }
  } catch (error) {
    yield put(emailSignUpFailure(error.message));
  }
} 

export function* signInAfterSignUp({payload:{user}}){
  yield put(emailSignInSuccess(user))
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpSuccess(){
  yield takeLatest(UserActionTypes.EMAIL_SIGN_UP_SUCCESS, signInAfterSignUp)
}
export function* onEmailSignUpStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_UP_START, signUpWithEmail);
}

export function* userSagas() {
  yield all([call(onEmailSignInStart), call(onEmailSignUpStart),call(onSignUpSuccess)]);
}
