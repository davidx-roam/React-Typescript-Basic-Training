//TODO: Add typescript to this file

interface ClickableProps {
  handleClick: () => void;
}

const Clickable = ({ handleClick }: ClickableProps) => {
  return <button onClick={handleClick}>Click Me!</button>;
};

export const Exercise = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <h2>Exercise 9</h2>
      <Clickable handleClick={handleClick} />
    </>
  );
};
