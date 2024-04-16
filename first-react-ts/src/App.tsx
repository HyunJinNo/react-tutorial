import logo from "./logo.svg";
import "./styles/App.css";
import IterationSample from "./components/IterationSample";
import LifeCycleSample from "./components/LifeCycleSample";
import { useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";

// 랜덤 색상을 생성하는 함수
const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

function App() {
  const str = "Learn React";
  const style = {
    color: "aqua",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "4px",
    border: "2px solid yellow",
  };
  //const scrollBox = React.createRef<ScrollBox>();

  const [color, setColor] = useState("#ffffff");

  const handleClick = () => {
    setColor(getRandomColor());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code style={style}>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link" // 주석 작성 방법
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {str === "Learn React" && str}
        </a>

        {/*<EventPractice />
        <ValidationSample />
        <button onClick={() => scrollBox.current?.scrollToBottom()}>
          맨 밑으로
        </button>
        <ScrollBox ref={scrollBox} />*/}

        <IterationSample />
        <button onClick={handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={color} />
        </ErrorBoundary>
      </header>
    </div>
  );
}

/*
class App extends React.Component {
  render = () => {
    return <div className="react">React</div>;
  };
}
*/
export default App;
