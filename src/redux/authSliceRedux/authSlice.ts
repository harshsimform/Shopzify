import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../interfaces/interface";
import { RootState } from "../store";

const initialState: AuthState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    isLoggedOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { isLoggedIn, isLoggedOut } = authSlice.actions;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export default authSlice;
