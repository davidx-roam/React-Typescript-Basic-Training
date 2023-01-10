// TODO: Modify the code so that on page load, the second input field receives focus
// TODO: Add typescript to this file

import { useRef } from "react";

export const Exercise = () => {
  const ref = useRef(null);
  return (
    <>
      <h2>Exercise 15</h2>
      <ul>
        <li>
          <input></input>
        </li>
        <li>
          <input ref={ref}></input>
        </li>
      </ul>
    </>
  );
};
