import { all, call } from "redux-saga/effects";
import { fetchFarmProduceStart } from "./farm-store/farm-store.sagas";
import { onEmailSignInStart } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(fetchFarmProduceStart), call(onEmailSignInStart)]);
}
