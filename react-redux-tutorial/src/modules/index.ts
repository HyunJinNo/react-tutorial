import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export type RootType = ReturnType<typeof rootReducer>;
export default rootReducer;
