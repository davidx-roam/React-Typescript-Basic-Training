// Name should accept a parameter of string
// ShowAge should accept a age parameter of number and is optional
// Size can be any one of the three; "L", "M" and "S" and is optional
interface RocketInfoProps {
  name: string;
  age?: number;
  size?: "L" | "M" | "S";
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

export const Exercise4 = () => (
  <>
    <h2>Exercise 4</h2>
    <RocketInfo name="Roam Force 1" age={1} size="L" />
    <RocketInfo name="Roam Force 2" size="M" />
    <RocketInfo name="Roam Force 3" age={2} />
    <RocketInfo name="Roam Force 4" size="S" />
  </>
);
