import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import sample, { sampleSaga } from "./sample";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  counter,
  sample,
});

export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐주는 역할을 합니다.
  yield all([counterSaga(), sampleSaga()]);
}

export type RootType = ReturnType<typeof rootReducer>;
export default rootReducer;
