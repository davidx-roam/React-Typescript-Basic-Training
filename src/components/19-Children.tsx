//TODO: Fix all error in this file
interface RocketProps {
  name: string;
  children: React.ReactNode;
}

const Rocket = ({ name, children }: RocketProps) => {
  return (
    <div>
      <h3>{name}</h3>
      {children}
    </div>
  );
};

//TODO: Serial accepts a string that starts with `BOOST-` followed by numbers
const Booster = ({ serial }: { serial: `BOOST-${number}` }) => (
  <h4>Booster: {serial}</h4>
);

const Shuttle = () => {
  return <h4>Shuttle</h4>;
};

export const Exercise = () => (
  <>
    <h2>Exercise 19</h2>
    <Rocket name="Roam Force 1">
      <Shuttle></Shuttle>
      <Booster serial="BOOST-1345" />
      <Booster serial="BOOST-1234" />
      <Booster serial="BOOST-2147" />
    </Rocket>
  </>
);
