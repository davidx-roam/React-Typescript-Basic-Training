// TODO: Modify the code so that on page load, the second custom input field receives focus
// TODO: Add typescript to this file

import { useRef } from "react";

const BeautifulInput = (ref) => (
  <>
    <label>Beautiful: </label>
    <input></input>
  </>
);

export const Exercise = () => {
  const ref = useRef(null);
  return (
    <>
      <h2>Exercise 16</h2>
      <ul>
        <li>
          <BeautifulInput></BeautifulInput>
        </li>
        <li>
          <BeautifulInput></BeautifulInput>
        </li>
      </ul>
    </>
  );
};
