import suggestGarment from './../utils/suggest_garment';

export interface GarmentSuggestionProps {
  temperature: number,
  activity: string,
}

export default function GarmentSuggestion({ temperature, activity }: GarmentSuggestionProps) {
  if (temperature !== undefined) {
    return (
      <div className='garment-suggestion'>
        {suggestGarment(temperature, activity)}
      </div>
    );
  } else {
    return null;
  }
}
