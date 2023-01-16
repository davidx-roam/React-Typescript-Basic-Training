import { FancyInput } from "./components/FancyInput";

const validate = (s) => {
  const message =
    s.length === 0
      ? "I'm a very picky input"
      : s.length < 5
      ? "You need to enter at least 5 characters"
      : !s.includes("12345")
      ? "Don't enter '12345', I don't like it"
      : s.charAt(s.length - 1) === "!"
      ? "Why are you shouting at me?!"
      : "Alright, I guess that's acceptable";
  return message;
};

export const Exercise = () => {
  return (
    <div>
      <h2>Exercise 23</h2>
      <FancyInput message="Enter anything you want, I'm not picky" />
      <FancyInput message={(value) => validate(value)} />
    </div>
  );
};
