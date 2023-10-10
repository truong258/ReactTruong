import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncreament = () => {
    setTimeout(function () {
      setCount((count) => count + 1);
    }, 1000);
  };
  return <div onClick={handleIncreament}>Increament {count}</div>;
};

export default Counter;
