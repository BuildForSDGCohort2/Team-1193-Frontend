import { FarmStoreActionTypes } from "./farm-store.types";
import { convertFarmProduceArrayToObject } from "./farm-store.utils";

export const fetchFarmProduceStart = {
  type: FarmStoreActionTypes.FETCH_FARM_PRODUCE_START,
};

export const fetchFarmProduceSuccess = (farmProduceObject) => ({
  type: FarmStoreActionTypes.FETCH_FARM_PRODUCE_SUCCESS,
  payload: farmProduceObject,
});

export const fetchFarmProduceFailure = (errorMessage) => ({
  type: FarmStoreActionTypes.FETCH_FARM_PRODUCE_SUCCESS,
  payload: errorMessage,
});

export const fetchFarmProduceStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchFarmProduceStart);

    fetch("https://intelligent-farm-api.herokuapp.com/farmproduce")
      .then((response) => response.json())
      .then((data) => {
        const farmProduceObject = convertFarmProduceArrayToObject(data);
        dispatch(fetchFarmProduceSuccess(farmProduceObject));
      })
      .catch((error) => dispatch(fetchFarmProduceFailure(error.message)));
  };
};
