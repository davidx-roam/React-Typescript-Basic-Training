import { useState } from "react";

interface FancyInputProp {
  message?: string | ((value: string) => string);
}

export const FancyInput = ({ message }: FancyInputProp) => {
  const [value, setValue] = useState("");

  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} value={value}></input>
      {message && (
        <p>{typeof message === "string" ? message : message(value)}</p>
      )}
    </>
  );
};
