type RocketBases = "Earth" | "Mars" | "Moon";

interface CrewMember {
  name: string;
  role: "pilot" | "flight attendant" | "engineer";
}

interface RocketInfoProps {
  name: string;
  age: number;
  crew: CrewMember[];
}

interface RouteInfo {
  name: string;
  route: {
    origin: RocketBases;
    destination: RocketBases;
  };
}

interface RocketDepartureBoardProp {
  rockets: Omit<RocketInfoProps, "age">[];
  routeInfo: RouteInfo[];
}

const RocketDepartureBoard = ({
  rockets,
  routeInfo,
}: RocketDepartureBoardProp) => {
  //TODO: Implement a departure board of three column
  // In the first column should be the rocket's name
  // In the second column should be the rocket's crew info
  // In the third column should be the rocket's route info
  return <></>;
};

export const Exercise8 = () => {
  const rockets: Omit<RocketInfoProps, "age">[] = [
    {
      name: "Roam 1",
      crew: [
        { name: "lisa", role: "pilot" },
        { name: "john", role: "engineer" },
      ],
    },
    {
      name: "Roam 2",
      crew: [
        { name: "johnny", role: "pilot" },
        { name: "mellisa", role: "engineer" },
      ],
    },
    {
      name: "Roam 3",
      crew: [
        { name: "lizzie", role: "pilot" },
        { name: "jonathan", role: "engineer" },
      ],
    },
  ];

  const routeInfo: RouteInfo[] = [
    {
      name: "Roam 1",
      route: {
        origin: "Earth",
        destination: "Mars",
      },
    },
    {
      name: "Roam 2",
      route: {
        origin: "Moon",
        destination: "Mars",
      },
    },
    {
      name: "Roam 3",
      route: {
        origin: "Moon",
        destination: "Earth",
      },
    },
  ];

  return (
    <>
      <h2>Exercise8</h2>
      <RocketDepartureBoard rockets={rockets} routeInfo={routeInfo} />
    </>
  );
};