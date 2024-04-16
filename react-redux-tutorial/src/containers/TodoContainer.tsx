import Todos from "../components/Todos";
import { connect } from "react-redux";
import { changeInput, insert, remove, toggle } from "../modules/todos";
import { RootType } from "../modules";

type MyProps = {
  input: string;
  todos: { id: number; text: string; done: boolean }[];
  onChangeInput: (input: string) => void;
  onInsert: (text: string) => void;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

const TodoContainer = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}: MyProps) => {
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

export default connect(
  // 비구조화 할당을 통해 todos을 분리하여
  // state.todos.input 대신 todos.input을 사용
  ({ todos }: RootType) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    onChangeInput: changeInput,
    onInsert: insert,
    onToggle: toggle,
    onRemove: remove,
  },
)(TodoContainer);
