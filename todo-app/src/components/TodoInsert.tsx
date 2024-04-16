import { ChangeEvent, useCallback, useState } from "react";
import "../styles/TodoInsert.scss";
import { MdAdd } from "react-icons/md";

type MyProps = {
  onInsert: (text: string) => void;
};

const TodoInsert = ({ onInsert }: MyProps) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      onInsert(value);
      setValue(""); // value 값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위해 이 함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
