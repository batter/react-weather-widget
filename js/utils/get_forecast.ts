import request, { Response } from 'superagent';

import config from './../../config.json';

const {
  API_KEY,
  LATITUDE,
  LONGITUDE,
} = config;

// fetches a forecast response from Pirateweather.net via SuperAgent
export default function (callback: (err: any, res: Response) => undefined, lat: string, lon: string) {
  if (API_KEY === null) {
    return;
  }

  lat = lat || LATITUDE;
  lon = lon || LONGITUDE;

  let coords = [lat, lon].join(',');
  let uri = 'https://api.pirateweather.net/forecast/' + API_KEY + '/' + coords;

  request
    .get(uri)
    .end(callback);
};
