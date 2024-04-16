import Counter from "../components/Counter";
import { connect } from "react-redux";
import { decrease, increase } from "../modules/counter";
import { RootType } from "../modules";

type MyProps = {
  number: number;
  increase: () => void;
  decrease: () => void;
};

const CounterContainer = ({ number, increase, decrease }: MyProps) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

/*
const mapStateToProps = (state: any) => {
  return {
    number: state.counter.number,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increase: () => {
      dispatch(increase());
    },
    decrease: () => {
      dispatch(decrease());
    },
  };
};
*/

export default connect(
  (state: RootType) => ({
    number: state.counter.number,
  }),
  {
    increase: increase,
    decrease: decrease,
  },
)(CounterContainer);
