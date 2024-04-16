import CounterContainer from "./containers/CounterContainer";
import CounterContainer2 from "./containers/CounterContainer2";
import TodoContainer from "./containers/TodoContainer";
import TodoContainer2 from "./containers/TodoContainer2";
import "./styles/App.css";

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <CounterContainer2 />
      <hr />
      <TodoContainer />
      <hr />
      <TodoContainer2 />
    </div>
  );
};

export default App;
