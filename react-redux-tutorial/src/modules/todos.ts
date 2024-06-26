const CHANGE_INPUT = "todos/CHANGE_INPUT" as const; // input 값을 변경함
const INSERT = "todos/INSERT" as const; // 새로운 todo을 등록함
const TOGGLE = "todos/TOGGLE" as const; // todo을 체크/체크 해제함
const REMOVE = "todos/REMOVE" as const; // todo을 제거함

export const changeInput = (input: string) => {
  return { type: CHANGE_INPUT, input };
};

let id = 3; // insert가 호출될 때마다 1씩 더해집니다.
export const insert = (text: string) => {
  return {
    type: INSERT,
    todo: {
      id: id++,
      text,
      done: false,
    },
  };
};

export const toggle = (id: number) => {
  return {
    type: TOGGLE,
    id,
  };
};

export const remove = (id: number) => {
  return {
    type: REMOVE,
    id,
  };
};

type Actions =
  | ReturnType<typeof changeInput>
  | ReturnType<typeof insert>
  | ReturnType<typeof toggle>
  | ReturnType<typeof remove>;

const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: true,
    },
    {
      id: 2,
      text: "리액트와 리덕스 사용하기",
      done: false,
    },
  ],
};

const todos = (state = initialState, action: Actions) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.id ? { ...todo, done: !todo.done } : todo;
        }),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

export default todos;
