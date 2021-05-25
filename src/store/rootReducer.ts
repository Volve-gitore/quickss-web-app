import { combineReducers } from "redux";
import { clientsReducer } from "./client/reducers";
import { authReducer } from "./auth/reducers";

export const rootReducer = combineReducers({
  clients: clientsReducer,
  auth: authReducer
});
