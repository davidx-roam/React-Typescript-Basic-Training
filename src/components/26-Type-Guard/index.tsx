import { crewList } from "./mock-data";

//TODO: render a list of crew member, if the crew member is an intern then render
// with a yellow background, else render with a green background
export const Exercise = () => {
  return (
    <div>
      <h2>Exercise 26</h2>
      <CrewList crew={crewList} />
    </div>
  );
};
