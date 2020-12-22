import { combineReducers } from "redux";
import { hotelRestoReducer } from "./hotelResto/reducers";

export const rootReducer = combineReducers({
  hotelResto: hotelRestoReducer
});
