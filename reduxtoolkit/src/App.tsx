import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { increment, decrement } from "./redux/slices/counter";
import MyComp from "./Mycomp";

function App() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1>Count is {count} </h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <MyComp/>
      </div>
    </>
  );
}

export default App;
