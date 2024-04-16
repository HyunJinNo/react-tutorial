import React, {
  ChangeEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

const getAverage = (numbers: number[]) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) {
    return 0;
  } else {
    const sum = numbers.reduce((total: number, value: number) => {
      return total + value;
    });
    return sum / numbers.length;
  }
};

const Average = () => {
  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const num = parseInt(number);
      if (Number.isInteger(num)) {
        const nextList = list.concat(num);
        setList(nextList);
        setNumber("");
      } else {
        setNumber("");
      }
      ref.current?.focus();
    },
    [number, list]
  ); // number 또는 list가 변경될 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input type="text" value={number} onChange={onChange} ref={ref} />
      <button onClick={(e) => onInsert(e)}>등록</button>
      <ul>
        {list.map((value: number, index: number) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <p>
        <b>평균값: </b> {avg}
      </p>
    </div>
  );
};

export default Average;
