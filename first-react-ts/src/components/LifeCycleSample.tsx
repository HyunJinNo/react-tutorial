import React, { Component } from "react";

type MyProps = {
  color: string;
  children?: string;
};

type State = {
  num: number;
  color: string;
};

class LifeCycleSample extends Component<MyProps, State> {
  public state: State;
  private myRef: React.RefObject<HTMLHeadingElement>;

  constructor(myProps: MyProps) {
    super(myProps);
    this.state = {
      num: 0,
      color: this.props.color,
    };
    this.myRef = React.createRef<HTMLHeadingElement>();
    console.log("constructor");
  }

  static getDerivedStateFromProps = (
    nextProps: Readonly<MyProps>,
    prevState: Readonly<State>
  ) => {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    } else {
      return null;
    }
  };

  /*
  componentWillMount = () => {
    console.log("componentWillMount");
  };
  */

  componentDidMount = () => {
    console.log("componentDidMount");
  };

  /*
  componentWillReceiveProps(nextProps: Readonly<MyProps>) {
    console.log("componentWillReceiveProps", nextProps);
  }
  */

  shouldComponentUpdate(
    nextProps: Readonly<MyProps>,
    nextState: Readonly<State>
  ) {
    console.log("shouldComponentUpdate", nextProps, nextState);

    // 숫자의 마지막 자리가 4면 리렌더딩하지 않습니다.
    return nextState.num % 10 !== 4;
  }

  /*
  componentWillUpdate(
    nextProps: Readonly<MyProps>,
    nextState: Readonly<State>
  ) {
    console.log("componentWillUpdate", nextProps, nextState);
  }
  */

  getSnapshotBeforeUpdate(
    prevProps: Readonly<MyProps>,
    prevState: Readonly<State>
  ) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    if (prevProps.color !== this.props.color) {
      return this.myRef?.current?.style.color;
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps: Readonly<MyProps>, prevState: Readonly<State>) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (prevState) {
      console.log(`업데이트되기 직전 색상: ${prevState.color}`);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      num: this.state.num + 1,
    });
  };

  render() {
    console.log("render");
    const style = {
      color: this.props.color ?? "#ffffff",
    };
    return (
      <div
        style={{ border: "1px solid white", padding: "16px", margin: "8px" }}
      >
        <h1 style={style} ref={this.myRef}>
          {this.state.num}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
