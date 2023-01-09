interface PlaneInfo {
  name: string;
  age: number;
  serialNumber: `ROAM-${number}`;
  crew: {
    name: string;
    role: "pilot" | "flight attendant" | "engineer";
  }[];
  wingspan: `${number}m`;
}

// TODO: Create a RocketInfo type by inheriting from the PlaneInfo interface,
// except Rocekets don't have wings, so we need to not have the 'wingspan' prop
// in RocketInfo;
