interface LocationBarProps {
  location: string;
}

export default function LocationBar({ location }: LocationBarProps) {
  return (
    <div id='location-bar'>
      <h3>Weather for {location}</h3>
    </div>
  );
}
