import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("Initial Message");
  const onClickEnter = () => {
    return setMessage("Hello!");
  };
  const onClickLeave = () => {
    return setMessage("Bye!");
  };

  const [color, setColor] = useState("yellow");

  return (
    <div>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickLeave}>Leave</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        Red
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        green
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        blue
      </button>
    </div>
  );
};

export default Say;
