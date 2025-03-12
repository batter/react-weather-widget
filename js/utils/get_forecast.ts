import request, { Response } from 'superagent';

import config from './../../config.json';

const {
  api_key,
  latitude,
  longitude,
} = config;

// fetches a forecast response from Pirateweather.net via SuperAgent
export default function (callback: (err: any, res: Response) => undefined, lat: string, lon: string) {
  if (config.api_key === null) {
    return;
  }

  lat = lat || latitude;
  lon = lon || longitude;

  let coords = [lat, lon].join(',');
  let uri = 'https://api.pirateweather.net/forecast/' + api_key + '/' + coords;

  request
    .get(uri)
    .end(callback);
};
