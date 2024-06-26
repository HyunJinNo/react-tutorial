import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../modules/counter";
import Counter from "../components/Counter";
import { RootType } from "../modules";
import { useCallback } from "react";

const CounterContainer2 = () => {
  const number = useSelector((state: RootType) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer2;
