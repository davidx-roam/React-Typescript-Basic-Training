// Exercise 2 - Interfaces
// Add typing to these components

// Name should accept a parameter of string
// ShowAge should accept a age parameter of number
// Size could be any one of the three; "L", "M" and "S".
interface RocketInfoProps {
  name: string;
  age: number;
  size: "L" | "M" | "S";
}

const RocketInfo = ({ name, age, size }: RocketInfoProps) => (
  <>
    <ul>
      <li>
        <label>Name: {name}</label>
      </li>
      <li>
        <label>Age: {age}</label>
      </li>
      <li>
        <label>Size: {size}</label>
      </li>
    </ul>
  </>
);

export const Exercise3 = () => (
  <>
    <h2>Exercise 3</h2>
    <RocketInfo name="Roam Force 1" age={12} size="L" />
  </>
);
