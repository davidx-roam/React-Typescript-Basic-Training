//TODO: Add typescript to this file

import React from "react";

const Clickable = ({ handleClick }) => {
  return <button onClick={handleClick}>Click Me!</button>;
};

export const Exercise = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = (e) => {
    console.log(e);
    setCount(count + 1);
  };

  return (
    <>
      <h2>Exercise 10</h2>
      <Clickable handleClick={handleClick} />
    </>
  );
};
