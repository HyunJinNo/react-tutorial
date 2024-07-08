import axios, { AxiosResponse } from "axios";

const GET_USERS_PENDING = "users/GET_USERS_PENDING" as const;
const GET_USERS_SUCCESS = "users/GET_USERS_SUCCESS" as const;
const GET_USERS_FAILURE = "user/GET_USERS_FAILURE" as const;

const getUsersPending = () => ({
  type: GET_USERS_PENDING,
});

const getUsersSuccess = (payload: AxiosResponse<any, any>) => ({
  type: GET_USERS_SUCCESS,
  payload: payload,
});

const getUsersFailure = (payload: any) => ({
  type: GET_USERS_FAILURE,
  payload: payload,
  error: true,
});

export type Actions =
  | ReturnType<typeof getUsersPending>
  | ReturnType<typeof getUsersSuccess>
  | ReturnType<typeof getUsersFailure>;

export const getUsers = () => async (dispatch: (action: Actions) => void) => {
  try {
    dispatch(getUsersPending());
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    dispatch(getUsersSuccess(response));
  } catch (e) {
    dispatch(getUsersFailure(e));
    throw e;
  }
};

const initialState = {
  users: null,
  user: null,
  loading: {
    users: false,
    user: false,
  },
  error: {
    users: null,
    user: null,
  },
};

const users = (state = initialState, action: Actions) => {
  switch (action.type) {
    case GET_USERS_PENDING:
      return {
        ...state,
        loading: {
          ...state.loading,
          users: true,
        },
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          users: false,
        },
        users: action.payload.data,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          users: false,
        },
        error: {
          ...state.error,
          users: action.payload,
        },
      };
    default:
      return state;
  }
};

export default users;
