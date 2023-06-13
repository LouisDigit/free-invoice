import { createSlice } from "@reduxjs/toolkit";
import { Error } from "../entities/error-types";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: Error = {
  message: "",
  code: "",
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    resetError: (state) => {
      state.code = "";
      state.message = "";
    },
    getRegisterError: (state, action: PayloadAction<string>) => {
      const ERROR_CODE = action.payload;
      state.code = ERROR_CODE;
      switch (ERROR_CODE) {
        case "auth/weak-password":
          state.message = "Password should be at least 6 characters";
          break;
        case "auth/match-password":
          state.message = "Passwords don't match";
          break;
        case "auth/email-already-in-use":
          state.message = "This email is already in use";
          break;
        default:
          state.message = "An error has occured";
          break;
      }
    },
    getLoginError: (state, action: PayloadAction<string>) => {
      const ERROR_CODE = action.payload;
      state.code = ERROR_CODE;
      switch (ERROR_CODE) {
        case "auth/network-request-failed":
          state.message = "No account matches these identifiers";
          break;
        case "auth/user-not-found":
          state.message = "User not found with this identifier";
          break;
        case "auth/wrong-password":
          state.message = "Wrong password";
          break;
        default:
          state.message = "An error has occured";
          break;
      }
    },
  },
});

export const { getLoginError, getRegisterError, resetError } =
  errorSlice.actions;

export default errorSlice.reducer;
