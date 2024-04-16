import logo from "./logo.svg";
import "./styles/App.css";
import Average from "./components/Average";

function App() {
  //const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/*
        <Counter />
        <div
          style={{ border: "1px solid white", margin: "8px", padding: "8px" }}
        >
          <button onClick={() => setVisible(!visible)}>
            {visible ? "숨기기" : "보이기"}
          </button>
          {visible && <Info />}
        </div>*/}
        <Average />
      </header>
    </div>
  );
}

export default App;
