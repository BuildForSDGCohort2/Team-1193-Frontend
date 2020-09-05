import { FarmStoreActionTypes } from "./farm-store.types";
import { SHOP_DATA } from "../../shop-data";

const INITIAL_STATE = {
  farmProduce: [],
  isFetching: false,
  errorMessage: undefined,
};

const farmStoreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FarmStoreActionTypes.FETCH_FARM_PRODUCE_START:
      return {
        ...state,
        isFetching: true,
      };
    case FarmStoreActionTypes.FETCH_FARM_PRODUCE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        farmProduce: action.payload,
      };
    case FarmStoreActionTypes.FETCH_FARM_PRODUCE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default farmStoreReducer;
