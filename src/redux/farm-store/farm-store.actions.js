import { FarmStoreActionTypes } from "./farm-store.types";

export const fetchFarmProduceStart = () => ({
  type: FarmStoreActionTypes.FETCH_FARM_PRODUCE_START,
});

export const fetchFarmProduceSuccess = (farmProduceObject) => ({
  type: FarmStoreActionTypes.FETCH_FARM_PRODUCE_SUCCESS,
  payload: farmProduceObject,
});

export const fetchFarmProduceFailure = (errorMessage) => ({
  type: FarmStoreActionTypes.FETCH_FARM_PRODUCE_SUCCESS,
  payload: errorMessage,
});
