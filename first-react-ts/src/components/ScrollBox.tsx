import React, { Component } from "react";

class ScrollBox extends Component {
  private box = React.createRef<HTMLDivElement>();

  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box.current!;
    this.box.current!.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "100px",
      width: "100px",
      overflow: "auto",
    };

    const innerStyle = {
      width: "auto",
      height: "650px",
      background: "linear-gradient(white, black)",
    };
    return (
      <div style={style} ref={this.box}>
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default ScrollBox;
