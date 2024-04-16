const START_LOADING = "loading/START_LOADING" as const;
const FINISH_LOADING = "loading/FINISH_LOADING" as const;

// 요청을 위한 액션 타입을 payload로 설정합니다. (예: "sample/GET_POST")
export const startLoading = (requestType: string) => {
  return {
    type: START_LOADING,
    [requestType]: requestType,
  };
};

export const finishLoading = (requestType: string) => {
  return {
    type: FINISH_LOADING,
    [requestType]: requestType,
  };
};

type Actions =
  | ReturnType<typeof startLoading>
  | ReturnType<typeof finishLoading>;

const initialState = {};

const loading = (state = initialState, action: Actions) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        [action.requestType]: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        [action.requestType]: false,
      };
    default:
      return state;
  }
};

export default loading;
