import { useState } from "react";
export const FancyInput = ({ message }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} value={value}></input>
      {/* TODO: modify the fancy button so it accepts either a string or a function as prop */}
      <p>PLACEHOLDER</p>
    </>
  );
};
