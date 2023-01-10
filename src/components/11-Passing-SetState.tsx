//TODO: Add typescript to this file

import React from "react";

const Clickable = ({ count, setCount }) => {
  const handleClick = (e) => {
    console.log(e);
    setCount(count + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
};

export const Exercise = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <h2>Exercise 11</h2>
      <Clickable setCount={setCount} count={count} />
    </>
  );
};
