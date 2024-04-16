import * as api from "../lib/api";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "../lib/createRequestSaga";

// 액션 타입을 선언합니다.
// 한 요청당 세 개를 만들어야 합니다.

const GET_POST = "sample/GET_POST" as const;
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS" as const;
const GET_POST_FAILURE = "sample/GET_POST_FAILURE" as const;

const GET_USERS = "sample/GET_USERS" as const;
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS" as const;
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE" as const;

type Actions =
  | { type: typeof GET_POST; payload: any }
  | { type: typeof GET_POST_SUCCESS; payload: any }
  | { type: typeof GET_POST_FAILURE; payload: any; error: boolean }
  | { type: typeof GET_USERS; payload: any }
  | { type: typeof GET_USERS_SUCCESS; payload: any }
  | { type: typeof GET_USERS_FAILURE; payload: any; error: boolean };

// thunk 함수를 생성합니다.
// thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치합니다.

/*
export const getPost =
  (id: number) => async (dispatch: (action: Actions) => void) => {
    dispatch({ type: GET_POST }); // 요청을 시작한 것을 알림.
    try {
      const response = await api.getPost(id);
      dispatch({ type: GET_POST_SUCCESS, payload: response.data }); // 요청 성공
    } catch (e) {
      dispatch({ type: GET_POST_FAILURE, payload: e, error: true }); // 에러 발생
      throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌.
    }
  };

export const getUsers = () => async (dispatch: (action: Actions) => void) => {
  dispatch({ type: GET_USERS }); // 요청을 시작한 것을 알림
  try {
    const response = await api.getUsers();
    dispatch({ type: GET_USERS_SUCCESS, payload: response.data }); // 요청 성공
  } catch (e) {
    dispatch({ type: GET_USERS_FAILURE, payload: e, error: true }); // 에러 발생
    throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌.
  }
};
*/

//export const getPost = createRequestThunk(GET_POST, api.getPost);
//export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

export const getPost = (id: number) => {
  return {
    type: GET_POST,
    payload: id,
  };
};

export const getUsers = () => {
  return {
    type: GET_USERS,
  };
};

/*
function* getPostSaga(action: Actions): any {
  // 파라미터로 action을 받아오면 액션의 정보를 조회할 수 있습니다.
  try {
    // call을 사용하면 Promise을 반환하는 함수를 호출하고, 기다릴 수 있습니다.
    // 첫 번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수입니다.
    const post = yield call(api.getPost, action.payload); // api.getPost(action.payload)를 의미
    yield put({
      type: GET_POST_SUCCESS,
      payload: post.data,
    });
  } catch (e) {
    // try/catch 문을 사용하여 에러도 잡을 수 있습니다.
    yield put({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
  }
}

function* getUsersSaga(): any {
  try {
    const users = yield call(api.getUsers);
    yield put({
      type: GET_USERS_SUCCESS,
      payload: users.data,
    });
  } catch (e) {
    yield put({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    });
  }
}
*/
const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

// 초기 상태를 선언합니다.
// 요청의 로딩 중 상태는 loading이라는 개체에서 관리합니다.

const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

const sample = (state = initialState, action: Actions) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: true, // 요청 시작
        },
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: false, // 요청 완료
        },
        post: action.payload,
      };
    case GET_POST_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: false, // 요청 완료
        },
      };
    case GET_USERS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: true, // 요청 시작
        },
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: false, // 요청 완료
        },
        users: action.payload,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: false, // 요청 완료
        },
      };
    default:
      return state;
  }
};

export default sample;
