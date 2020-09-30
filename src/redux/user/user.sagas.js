import { takeLatest, put, all, call } from "redux-saga/effects";
import { emailSignInSuccess, emailSignInFailure } from "./user.actions";
import { UserActionTypes } from "./user.types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const signInSuccessAlert = () => {
  toast.success("Sign in Success!", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1000,
  });
};

const signUpSuccessAlert = () => {
  toast.success("Sign up Success!", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1000,
  });
};

const wrongCredentialsAlert = () => {
  toast.error("Wrong credentials!", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
  });
};
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
      yield signInSuccessAlert();
      yield put(emailSignInSuccess(user));
    } else {
      yield wrongCredentialsAlert();
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
      yield signUpSuccessAlert();
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
