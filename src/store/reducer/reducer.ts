import { combineReducers } from "redux";
import { counter } from "./counter";
import { setList } from "./myList";

const rootReducer = combineReducers({
  counter,
  setList,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
