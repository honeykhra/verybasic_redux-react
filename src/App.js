import { useSelector, useDispatch } from "react-redux/es/exports";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const addby10 = () => {
    dispatch({ type: "ADD", payload: 10 });
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Deccrement</button>
      <button onClick={addby10}>Add By 10</button>
    </div>
  );
}

export default App;
