import { combineReducers } from "redux";
import authReducer from "./auth/reducers";
import chatReducer from "./chat/reducers";

import { fetchApi } from "../services/http";

export default combineReducers({
  auth: authReducer,
  cart: chatReducer,

  [fetchApi.reducerPath]: fetchApi.reducer,
});
