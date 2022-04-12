import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "./store/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const inc = () => {
    // dispatch(actions.increment());
    console.log(actions.increment());
  };
  const dec = () => {
    dispatch(actions.decrement());
  };
  const biginc = () => {
    let bigPlus = 10;
    dispatch(actions.addBy(10));
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
