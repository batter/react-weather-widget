import config from './../../config.json';

import { WeatherResponseProps } from './../components/weather';

const {
  API_KEY,
  LOCATIONS,
} = config;

const DEFAULT_LOCATION = LOCATIONS[0];
const DEFAULT_LATITUDE = DEFAULT_LOCATION.LATITUDE;
const DEFAULT_LONGITUDE = DEFAULT_LOCATION.LONGITUDE;

// fetches a forecast response from Pirateweather.net via SuperAgent
export default function (callback: (value: WeatherResponseProps) => void, lat?: string, lon?: string) {
  if (API_KEY === null) {
    return;
  }

  lat = lat || DEFAULT_LATITUDE;
  lon = lon || DEFAULT_LONGITUDE;


  let coords = [lat, lon].join(',');
  let uri = 'https://api.pirateweather.net/forecast/' + API_KEY + '/' + coords;

  fetch(uri)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    })
    .then(callback)
    .catch((error) => console.error(`Error: ${error}`));
};
