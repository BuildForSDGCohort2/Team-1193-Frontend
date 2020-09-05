import { FarmStoreActionTypes } from "./farm-store.types";

const INITIAL_STATE = {
  farmProduce: [{ id: 1 }],
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
