import { combineReducers } from "redux";
import { hotelRestoReducer } from "./admin/reducers";
import { authReducer } from "./auth/reducers";

export const rootReducer = combineReducers({
  hotelResto: hotelRestoReducer,
  auth: authReducer
});
