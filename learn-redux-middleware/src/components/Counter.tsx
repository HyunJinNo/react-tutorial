type MyProps = {
  number: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseAsync: () => void;
  onDecreaseAsync: () => void;
};

const Counter = ({
  number,
  onIncrease,
  onDecrease,
  onIncreaseAsync,
  onDecreaseAsync,
}: MyProps) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onIncreaseAsync}>+1 Async</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={onDecreaseAsync}>-1 Async</button>
    </div>
  );
};

export default Counter;
