import { combineReducers } from "redux";
import { counter } from "./counter";
import { setList } from "./myList";
import { setAccessToken } from "./accessToken";

const rootReducer = combineReducers({
  counter,
  setList,
  setAccessToken,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
