import React from "react";
import "../styles/TodoList.scss";
import TodoListItem from "./TodoListItem";

type MyProps = {
  todos: { id: number; text: string; checked: boolean }[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoList = ({ todos, onRemove, onToggle }: MyProps) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          style={{}}
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
