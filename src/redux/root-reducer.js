import { combineReducers } from "redux";
import farmStoreReducer from "./farm-store/farm-store.reducer";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  farmStore: farmStoreReducer,
  user: userReducer,
  cart: cartReducer,
});
