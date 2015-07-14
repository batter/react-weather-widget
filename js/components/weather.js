import React from 'react';

import LocationBar       from './location_bar';
import CurrentConditions from './current_conditions';
import WeekOverview      from './week_overview';

import getForecast from './../utils/get_forecast';

const {
  Component,
} = React;

import './../../styles.scss';

import config from './../../config.json';

class Weather extends Component {
  constructor (props) {
    super(props);

    this.state = { location: config.location };

    if (config.api_key !== null) {
      this.fetchCurentForecast();
    }
  }

  fetchCurentForecast() {
    getForecast(this.handleForecastResponse.bind(this));
  }

  handleForecastResponse(err, res) {
    if (res.body !== undefined) {
      this.setState(res.body);
    } else {
      console.log('Error!');
      console.log(err);
    }
  }

  nextTemp () {
    if (this.state.hourly === undefined) {
      return undefined;
    }

    return this.state.hourly.data[0].temperature;
  }

  render () {
    if (config.api_key !== null) {
      return (
        <div>
          <LocationBar location={this.state.location} />
          <CurrentConditions nextTemp={this.nextTemp()} {...this.state.currently} />
          <WeekOverview {...this.state.daily} />
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
  }
};

export default Weather;
