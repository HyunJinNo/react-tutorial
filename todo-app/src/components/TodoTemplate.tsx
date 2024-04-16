import "../styles/TodoTemplate.scss";

type MyProps = {
  children?: JSX.Element | JSX.Element[];
};

const TodoTemplate = ({ children }: MyProps) => {
  console.log(children);
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
