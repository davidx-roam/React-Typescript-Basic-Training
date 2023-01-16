import { LuggageSizeInfo, MealInfo, RocketInfo } from "../Exercise";

interface PreviewProps {
  rocket: RocketInfo;
  meal: MealInfo;
  luggageSize: LuggageSizeInfo;
}

export const Preview = ({ rocket, meal, luggageSize }: PreviewProps) => {
  return (
    <div>
      <h3>Your booking</h3>
      <ul>
        <li>
          <h4>{rocket.label}</h4>
          <p>{rocket.description}</p>
        </li>
        <li>
          <h4>{meal.label}</h4>
          <p>{meal.calories}</p>
        </li>
        <li>
          <h4>{luggageSize.label}</h4>
          <p>
            `${luggageSize.height} x ${luggageSize.width}
          </p>
        </li>
      </ul>
    </div>
  );
};