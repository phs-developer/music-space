import { createSlice } from "@reduxjs/toolkit";

export type tokenObj = {
  number: string;
  name: string;
  time: number;
};

export type InitialStateType = {
  token: tokenObj | null;
};

const initialState: InitialStateType = {
  token: null,
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    resetToken: (state) => {
      state.token = null;
    },
  },
});

export default tokenSlice;
export const { setToken, resetToken } = tokenSlice.actions;
