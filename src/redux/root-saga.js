import { all, call } from "redux-saga/effects";
import { fetchFarmProduceStart } from "./farm-store/farm-store.sagas";
import { userSagas } from "./user/user.sagas";
import { onSignOut } from "./cart/cart.sagas";

export default function* rootSaga() {
  yield all([call(fetchFarmProduceStart), call(userSagas), call(onSignOut)]);
}
