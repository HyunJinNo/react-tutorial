import React from "react";

type Props = {};
type State = {
  num: number;
  fixedNum: number;
};

class Counter extends React.Component<Props, State> {
  state = {
    num: 0,
    fixedNum: 0,
  };

  render() {
    const { num, fixedNum } = this.state;
    return (
      <div>
        <h1>{num}</h1>
        <h2>fixedNum: {fixedNum}</h2>
        <button
          onClick={() => {
            //this.setState({ num: num + 1 });
            this.setState((prevState) => {
              return { num: prevState.num + 1 };
            });
            this.setState(
              (prevState) => ({ num: prevState.num + 1 }),
              () => {
                alert("+2");
              }
            );
          }}
        >
          +2
        </button>
      </div>
    );
  }
}

export default Counter;
