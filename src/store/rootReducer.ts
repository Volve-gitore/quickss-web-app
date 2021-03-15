import { combineReducers } from "redux";
import { hotelRestoReducer } from "./client/reducers";
import { authReducer } from "./auth/reducers";

export const rootReducer = combineReducers({
  hotelResto: hotelRestoReducer,
  auth: authReducer
});
