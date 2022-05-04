import React, { useState } from "react";

export default function Counter() {
  const [countNum, setCountNum] = useState(0);

  //Increment
  const Increment = () => {
    setCountNum(countNum + 1);
  };

  //Decrement
  const Decrement = () => {
    if (countNum > 0) {
      setCountNum(countNum - 1);
    }
  };

  //Reset
  const Reset = () => {
    setCountNum(0);
  };
  return (
    <div>
      <h2>Counter App</h2>
      <p>{countNum}</p>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}
