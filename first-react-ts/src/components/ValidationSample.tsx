import React from "react";
import "../styles/ValidationSample.css";

type Props = {};
type State = {
  password: string;
  clicked: boolean;
  validated: boolean;
};

class ValidationSample extends React.Component<Props, State> {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  private input = React.createRef<HTMLInputElement>();

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.current?.focus();
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
          ref={this.input}
        />
        <button onClick={this.handleButtonClick}>Validate</button>
      </div>
    );
  }
}

export default ValidationSample;
