import { useState } from 'react';

import LocationBar from './location_bar';
import { CurrentConditions, CurrentConditionProps, CurrentConditionResponseProps } from './current_conditions';
import WeekOverview from './week_overview';
import { DayOverviewProps } from './day_overview';


import getForecast from './../utils/get_forecast';

import './../../styles.scss';

import config from './../../config.json';

interface TimelyResponseProps {
  summary: string;
  icon: string;
  data: Array<DayOverviewProps>;
}

export interface WeatherResponseProps {
  currently: CurrentConditionProps;
  daily: TimelyResponseProps;
  hourly: TimelyResponseProps;
}

const {
  API_KEY,
  LOCATION,
} = config;

export default function Weather() {
  const [location, setLocation] = useState(LOCATION);
  const [hourly, setHourly] = useState<TimelyResponseProps>();
  const [daily, setDaily] = useState<TimelyResponseProps>();
  const [currently, setCurrently] = useState<CurrentConditionProps>();

  const fetchCurentForecast = () => {
    getForecast(handleForecastResponse);
  }

  const handleForecastResponse = (responseBody: WeatherResponseProps) => {
    setCurrently(responseBody.currently);
    setDaily(responseBody.daily);
    setHourly(responseBody.hourly);
  }

  const nextTemp = () => {
    return hourly?.data[0]?.temperature;
  }

  if (API_KEY !== null && currently === undefined) {
    fetchCurentForecast();
  }

  if (API_KEY !== null) {
    return (
      <div>
        <LocationBar location={location} />
        <CurrentConditions nextTemp={nextTemp()} {...(currently as CurrentConditionResponseProps)} />
        <WeekOverview {...(daily as TimelyResponseProps)} />
        <div className='clear'></div>
      </div>
    );
  }
  else {
    return (
      <div>
        Please enter your API Key for
        {' '}
        <a href='https://pirate-weather.apiable.io/' target='_blank'>Pirate Weather</a>
        {' '}
        in <code>config.json</code> in the project root directory
      </div>
    )
  }
}
