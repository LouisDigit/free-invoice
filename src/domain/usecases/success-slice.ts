import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  enabled: false,
};

const successSlice = createSlice({
  name: "success",
  initialState,
  reducers: {
    resetSuccess: (state) => {
      state.message = "";
      state.enabled = false;
    },
    setSuccess: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
      state.enabled = true;
    },
  },
});

export const { resetSuccess, setSuccess } = successSlice.actions;

export default successSlice.reducer;
