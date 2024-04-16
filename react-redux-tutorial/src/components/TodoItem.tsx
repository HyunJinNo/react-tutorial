type MyProps = {
  todo: { id: number; text: string; done: boolean };
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

const TodoItem = ({ todo, onToggle, onRemove }: MyProps) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
