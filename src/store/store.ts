import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../domain/usecases/auth-slice";
import errorSlice from "../domain/usecases/error-slice";
import successSlice from "../domain/usecases/success-slice";
import loadingSlice from "../domain/usecases/loading-slice";
export const reducer = combineReducers({
  auth: authSlice,
  error: errorSlice,
  success: successSlice,
  loading: loadingSlice,
});
