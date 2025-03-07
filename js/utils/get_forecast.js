import request from 'superagent';
require('superagent-jsonp')(request);

import config from './../../config.json';

const {
  api_key,
  latitude,
  longitude,
} = config;

// fetches a forecast response from Forecast.io via SuperAgent
export default function (callback, lat, lon) {
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
