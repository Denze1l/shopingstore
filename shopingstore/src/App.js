import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const inc = () => {
    dispatch({ type: "INC" });
  };
  const dec = () => {
    dispatch({ type: "DEC" });
  };
  const biginc = () => {
    let bigPlus = 10;
    dispatch({ type: "BIGINC", bigPlus });
  };
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={inc}>PLUS</button>
      <button onClick={dec}>MINUS</button>
      <button onClick={biginc}>Plus 10</button>
    </div>
  );
}

export default App;
