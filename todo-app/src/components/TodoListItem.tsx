import "../styles/TodoListItem.scss";
import cn from "classnames";
import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from "react-icons/md";

type MyProps = {
  todo: { id: number; text: string; checked: boolean };
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
  style: React.CSSProperties;
};

const TodoListItem = ({ todo, onRemove, onToggle, style }: MyProps) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          className={cn("checkbox", { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <p className="text">{text}</p>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
