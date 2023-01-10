//TODO: Create a custom hook, that accepts an array of routes as input
// and filters the input based on name, origin, and destination
// and returns the filtered array as `results`;
const useSearchRoute = ({ routes }) => {
  return { results, setName, setOrigin, setDestination };
};

//TODO: Complete the SearchBox component so that it can set
//search terms in the parent, and also accepts a ref, and a placeholder
const SearchBox = ({ setSerchTerm, placeholder }) => {
  const handleChange = () => {
    setSearchTerm();
  };
  return <input onChange={handleChange} placeholder={placeholder}></input>;
};

//TODO: Add Typescript to this Search Result component
const SearchResult = ({ results }) => {
  return (
    <ul>
      {results.map((result) => (
        <li>
          <label>{`${result.name} -- ${result.route.origin} -- ${result.route.destination}`}</label>
        </li>
      ))}
    </ul>
  );
};

//TODO: On page load, set focus to the first search box
// And complete this component, so that users can type search terms into three different
// search boxes, and find the route they are looking for
const DepartureSearch = ({ routes }) => {
  const { results, setName, setOrigin, setDestination } =
    useSearchRoute(routes);
  return (
    <div>
      <SearchBox placeholder="Name" setSearchTerm={setName} />
      <SearchBox placeholder="Origin" setSearchTerm={setOrigin} />
      <SearchBox placeholder="Destination" setSearchTerm={setDestination} />
      <SearchResult results={results} />
    </div>
  );
};

export const Exercise = () => {
  const routes = [
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
      <h2>Exercise 17</h2>
      <DepartureSearch routes={routes} />
    </>
  );
};
