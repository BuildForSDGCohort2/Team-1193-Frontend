import { takeLatest, put } from "redux-saga/effects";
import { UserActionTypes } from "../user/user.types";
import { clearCart } from "./cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT_USER, clearCartOnSignOut);
}
