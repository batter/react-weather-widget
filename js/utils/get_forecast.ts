import config from './../../config.json';

const {
  API_KEY,
  LATITUDE,
  LONGITUDE,
} = config;

// fetches a forecast response from Pirateweather.net via SuperAgent
export default function (callback: (value: Response) => undefined, lat: string, lon: string) {
  if (API_KEY === null) {
    return;
  }

  lat = lat || LATITUDE;
  lon = lon || LONGITUDE;

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
