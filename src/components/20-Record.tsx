// Exercise  -

type SpacePortRecord = Record<string, string>;

const SpacePort = () => {
  const portRecord: SpacePortRecord = {
    "ROAM-1453": "landing",
    "ROAM-2765": "landed",
    "ROAM-2465": "onLaunchPad",
  };

  const keys = Object.keys(portRecord);

  return (
    <div>
      <ul>
        {keys.map((key) => {
          const status = portRecord[key];
          return (
            <li>
              <label>{`${key}-${status}`}</label>
            </li>
          );
        })}
      </ul>
      <button>Add</button>
    </div>
  );
};

export const Exercise = () => {
  return (
    <>
      <h2>Exercise 20</h2>
      <SpacePort />
    </>
  );
};
