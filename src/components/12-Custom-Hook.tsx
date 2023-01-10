//TODO: Add typescript to this file

import React from "react";

const Clickable = ({ handleClick, label }) => {
  return <button onClick={handleClick}>{label}</button>;
};

const useCounter = (initialValue) => {
  const [count, setCount] = React.useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};

export const Exercise = () => {
  const { count, increment, decrement } = useCounter(0);
  return (
    <>
      <h2>Exercise 12</h2>
      <h3>{count}</h3>
      <Clickable handleClick={increment} label="+" />
      <Clickable handleClick={decrement} label="-" />
    </>
  );
};
