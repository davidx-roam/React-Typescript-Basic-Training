//TODO: Add typescript to this file

import React from "react";

interface ClickableProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Clickable = ({ count, setCount }: ClickableProps) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e);
    setCount(count + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
};

export const Exercise = () => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <>
      <h2>Exercise 11</h2>
      <Clickable setCount={setCount} count={count} />
    </>
  );
};
