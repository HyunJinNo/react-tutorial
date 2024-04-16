import { useCallback } from "react";
import Todos from "../components/Todos";
import { RootType } from "../modules";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, insert, remove, toggle } from "../modules/todos";

const TodoContainer2 = () => {
  const { input, todos } = useSelector(({ todos }: RootType) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  const dispatch = useDispatch();
  const onChangeInput = useCallback(
    (input: string) => dispatch(changeInput(input)),
    [dispatch],
  );
  const onInsert = useCallback(
    (text: string) => dispatch(insert(text)),
    [dispatch],
  );
  const onToggle = useCallback(
    (id: number) => dispatch(toggle(id)),
    [dispatch],
  );
  const onRemove = useCallback(
    (id: number) => dispatch(remove(id)),
    [dispatch],
  );

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodoContainer2;
