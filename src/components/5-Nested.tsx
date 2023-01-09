// TODO: Create a RocketInfoProps interface and use it in the code
// Name should accept a parameter of string
// ShowAge should accept a age parameter of number
// Size can be any one of the three; "L", "M" and "S"
// Pilot is an object with first and last name
interface RocketInfoProps {}

const RocketInfo = ({ name, age, size, pilot }) => (
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
      <li>
        <label>Pilot: {`${pilot.firstName} ${pilot.lastName}`} </label>
      </li>
    </ul>
  </>
);

export const Exercise5 = () => (
  <>
    <h2>Exercise 5</h2>
    <RocketInfo
      name="Roam Force 4"
      age={3}
      size="S"
      pilot={{ firstName: "bob", lastName: "john" }}
    />
  </>
);
