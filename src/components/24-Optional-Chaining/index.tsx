import { PassengerManifest } from "./components/PassengerManifest";
import { passengerManifest } from "./mocked-data";

export const Exercise = () => {
  return (
    <div>
      <h2>Exercise 24</h2>
      <PassengerManifest data={passengerManifest} />
    </div>
  );
};
