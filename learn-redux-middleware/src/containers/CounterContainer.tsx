import Counter from "../components/Counter";
import { RootType } from "../modules";
import {
  decrease,
  decreaseAsync,
  increase,
  increaseAsync,
} from "../modules/counter";
import { connect } from "react-redux";

type MyProps = {
  number: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseAsync: () => void;
  onDecreaseAsync: () => void;
};

const CounterContainer = ({
  number,
  onIncrease,
  onDecrease,
  onIncreaseAsync,
  onDecreaseAsync,
}: MyProps) => {
  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseAsync={onIncreaseAsync}
      onDecreaseAsync={onDecreaseAsync}
    />
  );
};

export default connect(
  ({ counter }: RootType) => ({
    number: counter,
  }),
  {
    onIncrease: increase,
    onDecrease: decrease,
    onIncreaseAsync: increaseAsync,
    onDecreaseAsync: decreaseAsync,
  },
)(CounterContainer);
