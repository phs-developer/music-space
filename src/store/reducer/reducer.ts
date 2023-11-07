import tokenSlice from "./accessToken";
import myListSlice from "./myList";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    myList: myListSlice.reducer,
    token: tokenSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
