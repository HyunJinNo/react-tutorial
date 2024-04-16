import {
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
  throttle,
} from "redux-saga/effects";
import { RootType } from ".";

const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_ASYNC = "counter/INCREASE_ASYNC" as const;
const DECREASE_ASYNC = "counter/DECREASE_ASYNC" as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/*
// 1초 뒤에 increase 혹은 decrease 함수를 디스패치함.
export const increaseAsync = () => (dispatch: (action: Actions) => void) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};
export const decreaseAsync = () => (dispatch: (action: Actions) => void) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};
*/

export const increaseAsync = () => {
  return {
    type: INCREASE_ASYNC,
  };
};
export const decreaseAsync = () => {
  return {
    type: DECREASE_ASYNC,
  };
};

function* increaseSaga() {
  yield delay(1000); // 1초를 기다립니다.
  yield put(increase()); // 특정 액션을 디스패치합니다.
  const num: number = yield select((state: RootType) => state.counter);
  console.log(`현재 값은 ${num}입니다.`);
}

function* decreaseSaga() {
  yield delay(1000); // 1초를 기다립니다.
  yield put(decrease()); // 특정 액션을 디스패치합니다.
}

export function* counterSaga() {
  /*
  // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리해 줍니다.
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  */

  // 첫 번째 파라미터: n초 * 1000
  yield throttle(3000, INCREASE_ASYNC, increaseSaga);

  // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 처리하고
  // 가장 마지막으로 실행된 작업만 수행합니다.
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

type Actions = ReturnType<typeof increase> | ReturnType<typeof decrease>;

const initialState = 0; // 상태는 꼭 객체일 필요가 없습니다. 숫자도 작동합니다.

const counter = (state = initialState, action: Actions) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
