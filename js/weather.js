import React from 'react';

import getForecast from './utils/getForecast';

const {
  Component,
} = React;

import config from './../config.json';


class Weather extends Component {
  constructor (props) {
    super(props);

    if (config.api_key !== null) {
      this.fetchCurentForecast();
    }
  }

  componentWillUpdate (nextProps, nextState) {
    console.log(nextState);
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

  render () {
    if (config.api_key !== null) {
      return (
        <div>
          Weather info placeholder
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
