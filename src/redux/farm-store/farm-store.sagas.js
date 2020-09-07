import { takeLatest, call, put } from "redux-saga/effects";
import { FarmStoreActionTypes } from "./farm-store.types";
import { convertFarmProduceArrayToObject } from "./farm-store.utils";
import {
  fetchFarmProduceSuccess,
  fetchFarmProduceFailure,
} from "./farm-store.actions";

export function* fetchFarmProduceAsync() {
  try {
    const response = yield fetch(
      "https://intelligent-farm-api.herokuapp.com/farmproduce"
    );

    const data = yield response.json();
    const farmProduceObject = yield call(convertFarmProduceArrayToObject, data);
    yield put(fetchFarmProduceSuccess(farmProduceObject));
  } catch (error) {
    yield put(fetchFarmProduceFailure(error.message));
  }
}

export function* fetchFarmProduceStart() {
  yield takeLatest(
    FarmStoreActionTypes.FETCH_FARM_PRODUCE_START,
    fetchFarmProduceAsync
  );
}
