import { useCallback, useReducer, useRef } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import "./styles/App.css";
import TodoListjs from "./components/TodoListjs";

const createBulkTodos = (): {
  id: number;
  text: string;
  checked: boolean;
}[] => {
  const arr = [];
  for (let i = 1; i <= 2500; i++) {
    arr.push({
      id: i,
      text: `할 일: ${i}`,
      checked: false
    });
  }
  return arr;
};

const reducer = (
  todos: { id: number; text: string; checked: boolean }[],
  action: {
    type: string;
    todo?: { id: number; text: string; checked: boolean };
    id?: number;
  }
) => {
  switch (action.type) {
    case "INSERT":
      // { type: "INSERT", todo: { id: 1, text: "todo", checked: false } }
      return todos.concat(action.todo!);
    case "REMOVE":
      // { type: "REMOVE", id: 1 }
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
};

const App = () => {
  //const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(reducer, undefined, createBulkTodos);

  // unique id
  // ref을 사용하여 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback((text: string) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    };
    //setTodos((todos) => todos.concat(todo));
    dispatch({ type: "INSERT", todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id: number) => {
    //setTodos((todos) => todos.filter((todo) => todo.id !== id));
    dispatch({ type: "REMOVE", id });
  }, []);

  const onToggle = useCallback((id: number) => {
    /*
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );*/
    dispatch({ type: "TOGGLE", id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      {/*<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />*/}
      <TodoListjs todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
