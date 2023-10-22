import React from "react";
import { Link } from "react-router-dom";
import useCounter from "./useCounter";
import "./styles.css";

const Counter = () => {
  const { count, increment, decrement, reset, localSetValue } = useCounter();

  return (
    <div className="counter">
      <div className="counter-header">
        <h1 className="counter-app-header">COUNTER APP</h1>
        <p>
          Click to go back to{" "}
          <Link className="linkHome" to="/">
            Home
          </Link>
        </p>
        <p className="count-style">{count}</p>
      </div>
      <div className="counter-button">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <input
        className="input"
        type="number"
        placeholder="Enter a value"
        onChange={(e) => localSetValue(Number(e.target.value))}
      />
    </div>
  );
};

export default Counter;
