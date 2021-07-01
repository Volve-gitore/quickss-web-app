import { combineReducers } from "redux";
import { adminReducer } from "./admin/reducers";
import { clientReducer } from "./client/reducers";
import { authReducer } from "./auth/reducers";

export const rootReducer = combineReducers({
  admin: adminReducer,
  auth: authReducer,
  client: clientReducer
});
