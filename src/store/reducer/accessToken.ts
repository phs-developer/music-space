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
      console.log(state);
      state.token = action.payload;
    },
    resetToken: (state) => {
      state.token = null;
    },
  },
});

export default tokenSlice;
export const { setToken, resetToken } = tokenSlice.actions;

// type ActionType = ReturnType<typeof setToken> | ReturnType<typeof resetToken>;
// export const setAccessToken = (
//   state: InitialStateType = initialState,
//   action: ActionType
// ) => {
//   switch (action.type) {
//     case SETTOKEN:
//       return {
//         ...state,
//         token: action.token,
//       };
//     case RESETTOKEN:
//       return {
//         ...state,
//         token: null,
//       };
//     default:
//       return state;
//   }
// };
