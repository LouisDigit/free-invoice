import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../domain/usecases/auth-slice";

import loadingSlice from "../domain/usecases/loading-slice";
export const reducer = combineReducers({
  auth: authSlice,
  loading: loadingSlice,
});
