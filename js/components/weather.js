import { useState } from 'react';

import LocationBar       from './location_bar';
import CurrentConditions from './current_conditions';
import WeekOverview      from './week_overview';

import getForecast from './../utils/get_forecast';

import './../../styles.scss';

import config from './../../config.json';

const {
  LOCATION,
} = config;

const Weather = () => {
  const [location, setLocation] = useState(LOCATION);
  const [hourly, setHourly] = useState();
  const [daily, setDaily] = useState();
  const [currently, setCurrently] = useState();

  const fetchCurentForecast = () => {
    getForecast(handleForecastResponse);
  }

  const handleForecastResponse = (responseBody) => {
    setCurrently(responseBody.currently);
    setDaily(responseBody.daily);
    setHourly(responseBody.hourly);
  }

  const nextTemp = () => {
    if (hourly === undefined) {
      return undefined;
    }

    return hourly.data[0].temperature;
  }

  if (config.api_key !== null && currently === undefined) {
    fetchCurentForecast();
  }

  if (config.api_key !== null) {
    return (
      <div>
        <LocationBar location={location} />
        <CurrentConditions nextTemp={nextTemp()} {...currently} />
        <WeekOverview {...daily} />
        <div className='clear'></div>
      </div>
    );
  }
  else {
    return (
      <div>
        Please enter your API Key for
        {' '}
        <a href='https://developer.forecast.io/' target='_blank'>Forecast.io</a>
        {' '}
        in <code>config.json</code> in the project root directory
      </div>
    )
  }
};

export default Weather;
