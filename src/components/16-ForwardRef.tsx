// TODO: Modify the code so that on page load, the second custom input field receives focus
// TODO: Add typescript to this file

import { useEffect, useRef, forwardRef } from "react";

const BeautifulInput = forwardRef<HTMLInputElement>((_, ref) => (
  <>
    <label>Beautiful: </label>
    <input ref={ref}></input>
  </>
));

export const Exercise = () => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);
  return (
    <>
      <h2>Exercise 16</h2>
      <ul>
        <li>
          <BeautifulInput></BeautifulInput>
        </li>
        <li>
          <BeautifulInput ref={ref}></BeautifulInput>
        </li>
      </ul>
    </>
  );
};
