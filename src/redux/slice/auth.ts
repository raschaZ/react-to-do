import { IAuth } from "../../types/auth";
import { createSlice } from "@reduxjs/toolkit";
import { login, registerUser } from "../actions/auth";

export interface todoState {
  auth: IAuth[];
  logedAuth: string;
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: todoState = {
  auth: [],
  logedAuth: "",
  loading: false,
  error: null,
  success: false,
};

export const authSlice: any = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.logedAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }: any) => {
      state.logedAuth = payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, { payload }: any) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(registerUser.fulfilled, (state, { payload }: any) => {
      state.auth = payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state, { payload }: any) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentToken = (state: any) => state.authSlice;
