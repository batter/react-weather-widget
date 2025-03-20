import { LocationProps } from './weather';

interface LocationBarProps {
  location: string;
  locations: Array<LocationProps>;
  changeLocation: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function LocationBar({ location, locations, changeLocation, }: LocationBarProps) {
  function selectMenuOpts(locations: Array<LocationProps>) {
    return locations.map((location, i) => {
      return (<option value={location.NAME} key={i}>{location.NAME}</option>);
    });
  }

  return (
    <div id='location-bar'>
      <div id='change-location-container'>
        <select onChange={(event: React.ChangeEvent<HTMLSelectElement>): void => changeLocation(event)}>
          {selectMenuOpts(locations)}
        </select>
      </div>
      <h3>Weather for {location}</h3>
    </div>
  );
}
