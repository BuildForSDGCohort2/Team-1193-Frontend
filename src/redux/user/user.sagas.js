import { takeLatest, put, all, call } from "redux-saga/effects";
import { emailSignInSuccess, emailSignInFailure } from "./user.actions";

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
      yield alert("Wrong credentials");
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

    if (user.id) {
      yield put(emailSignInSuccess(user));
    }
  } catch (error) {
    yield put(emailSignInFailure(error.message));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onEmailSignUpStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_UP_START, signUpWithEmail);
}

export function* userSagas() {
  yield all([call(onEmailSignInStart), call(onEmailSignUpStart)]);
}
