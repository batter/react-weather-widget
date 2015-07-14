import React from 'react';

import LocationBar from './location_bar';

import getForecast from './utils/getForecast';

const {
  Component,
} = React;

import './../styles.scss';

import config from './../config.json';

class Weather extends Component {
  constructor (props) {
    super(props);

    this.state = { location: config.location };

    if (config.api_key !== null) {
      // uncomment to start fetching actual forecast data
      // this.fetchCurentForecast();
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
          <LocationBar location={this.state.location} />
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
