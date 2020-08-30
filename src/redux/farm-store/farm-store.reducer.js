import { FarmStoreActionTypes } from "./farm-store.types";
import { SHOP_DATA } from "../../shop-data";

const INITIAL_STATE = {
  farmProduce: SHOP_DATA,
};

const farmStoreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FarmStoreActionTypes.FETCH_FARM_PRODUCE:
      return {
        ...state,
        farmProduce: action.payload,
      };
    default:
      return state;
  }
};

export default farmStoreReducer;
