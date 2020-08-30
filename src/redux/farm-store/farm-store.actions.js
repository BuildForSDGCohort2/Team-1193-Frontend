import { FarmStoreActionTypes } from "./farm-store.types";

const fetchFarmProduce = (data) => ({
  type: FarmStoreActionTypes.FETCH_FARM_PRODUCE,
  payload: data,
});

export default fetchFarmProduce;
